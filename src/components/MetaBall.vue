<template>
    <div id="main">
        <canvas ref="container" id="container" />
    </div>
</template>

<script setup lang="ts">
import { ref, shallowRef, markRaw, onMounted, onUnmounted, nextTick, type Ref, type ShallowRef } from 'vue';
import { PerspectiveCamera, Scene, WebGLRenderer, Clock } from 'three';
import { AmbientLight, DirectionalLight, MeshPhongMaterial } from 'three';
import type { MarchingCubes } from 'three/addons/objects/MarchingCubes.js';

// Vue3 Composition API + Three.js ベストプラクティス実装
// Three.jsオブジェクトを非リアクティブ化してパフォーマンス最適化

// エフェクトコントローラーのインターフェース定義
interface EffectController {
  material: string;
  speed: number;
  numBlobs: number;
  resolution: number;
  isolation: number;
}

// 基本設定（リアクティブ）
const effectController: Ref<EffectController> = ref({
    material: 'plastic',
    speed: 0.1,
    numBlobs: 3,
    resolution: 30,
    isolation: 10,
});

// アニメーション状態（リアクティブ）
const time: Ref<number> = ref(0);
const isPaused: Ref<boolean> = ref(false);

// Three.jsオブジェクト（非リアクティブ - パフォーマンス重視）
const container: ShallowRef<HTMLCanvasElement | null> = shallowRef(null);
const camera: ShallowRef<PerspectiveCamera | null> = shallowRef(null);
const scene: ShallowRef<Scene | null> = shallowRef(null);
const renderer: ShallowRef<WebGLRenderer | null> = shallowRef(null);
const effect: ShallowRef<MarchingCubes | null> = shallowRef(null);
const clock: ShallowRef<Clock | null> = shallowRef(null);

// パフォーマンス管理
const frameInterval: Ref<number> = ref(1000 / 30);
const lastFrameTime: Ref<number> = ref(0);

// アニメーション制御
let animationFrameId: number | null = null;
let resizeTimeout: ReturnType<typeof setTimeout> | null = null;

// マテリアル生成（非リアクティブ）
const generateMaterials = (): { plastic: MeshPhongMaterial } => {
    return {
        plastic: markRaw(new MeshPhongMaterial({
            color: 0xffa500,
            emissive: 0xffa500,
            emissiveIntensity: 0.75,
            specular: 0xffff00,
            shininess: 5,
            flatShading: false,
            transparent: false,
            fog: false
        }))
    };
};

// カメラ初期化（Vue3ベストプラクティス）
const setupCamera = (): void => {
    const fov = 50; // シンプル固定FOV
    const aspect = window.innerWidth / window.innerHeight;

    camera.value = markRaw(new PerspectiveCamera(fov, aspect, 1, 700));
    camera.value.position.set(100, 100, 400);

    console.log('MetaBall: Camera initialized with Vue3 best practices');
};

// レンダラー初期化（Canvas解像度統一システム）
const setupRenderer = (): (() => void) | undefined => {
    if (!container.value) {
        console.error('MetaBall: Canvas element not found!');
        return;
    }

    renderer.value = markRaw(new WebGLRenderer({
        canvas: container.value,
        antialias: false,
        alpha: true,
        powerPreference: 'high-performance'
    }));

    // Canvas解像度統一システム（重要）
    const updateCanvasSize = (): void => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const devicePixelRatio = window.devicePixelRatio || 1;

        // CSS解像度とCanvas解像度の完全同期
        const pixelRatio = Math.min(devicePixelRatio, 2); // 最大2xまで
        renderer.value!.setSize(width, height, false);
        renderer.value!.setPixelRatio(pixelRatio);

        console.log(`MetaBall: Canvas resolution synchronized - ${width}x${height} @ ${pixelRatio}x`);
    };

    updateCanvasSize();
    return updateCanvasSize;
};

// シンプル統一解像度システム（逆補正座標変換法対応）
const getOptimalResolution = (): number => {
    // パフォーマンス最適化：画面サイズに応じた動的解像度
    const screenArea = window.innerWidth * window.innerHeight;
    const baseResolution = screenArea > 1920 * 1080 ? 32 : 28;

    return Math.min(baseResolution, 35); // 統一解像度（立方体維持）
};

// MarchingCubes初期化（統一スケールシステム）
const setupMarchingCubes = async (): Promise<void> => {
    try {
        const { MarchingCubes } = await import('three/addons/objects/MarchingCubes.js');

        const materials = generateMaterials();
        const resolution = getOptimalResolution();

        effect.value = markRaw(new MarchingCubes(
            resolution,
            materials.plastic,
            true,
            true,
            50000
        ));

        effect.value.position.set(0, 0, 0);
        effect.value.scale.set(300, 300, 300); // 統一スケール（逆補正で正円実現）
        scene.value!.add(effect.value);

        console.log(`MetaBall: Uniform scale MarchingCubes initialized - Resolution: ${resolution}, Scale: 300x300x300`);
    } catch (error) {
        console.error('MetaBall: MarchingCubes initialization failed:', error);
    }
};

// 完璧正円維持更新ループ（逆補正座標変換法）
const updateCubes = (): void => {
    if (!effect.value) return;

    effect.value.reset();

    const numBlobs = effectController.value.numBlobs;
    const subtract = 10;
    const strength = 0.6 / ((Math.sqrt(numBlobs) - 1) / 4 + 1);

    // aspectRatio逆補正による完璧正円実現
    const aspectRatio = window.innerWidth / window.innerHeight;

    for (let i = 0; i < numBlobs; i++) {
        const currentTime = time.value;

        // 基本数学座標計算
        const rawX = Math.sin(i + 1.26 * currentTime * (1.03 + 0.5 * Math.cos(0.21 * i))) * 0.27 + 0.5;
        const rawY = Math.abs(Math.cos(i + 1.12 * currentTime * Math.cos(1.22 + 0.1424 * i))) * 0.77;
        const rawZ = Math.cos(i + 1.32 * currentTime * 0.1 * Math.sin(0.92 + 0.53 * i)) * 0.27 + 0.5;

        // 逆補正座標変換（voxel空間で楕円→スケール後正円）
        let correctedX = rawX;
        let correctedY = rawY;

        if (aspectRatio > 1.0) {
            // 横長画面: X座標を圧縮してvoxel内楕円作成
            correctedX = (rawX - 0.5) / aspectRatio + 0.5;
        } else if (aspectRatio < 1.0) {
            // 縦長画面: Y座標を拡張してvoxel内楕円作成
            correctedY = (rawY - 0.5) * aspectRatio + 0.5;
        }

        // 逆補正座標でaddBall（スケール後に完璧正円）
        effect.value.addBall(correctedX, correctedY, rawZ, strength, subtract);
    }

    effect.value.update();
};

// アニメーションループ（Vue3最適化）
const animate = (): void => {
    if (isPaused.value) {
        animationFrameId = requestAnimationFrame(animate);
        return;
    }

    const now = performance.now();
    const elapsed = now - lastFrameTime.value;

    if (elapsed >= frameInterval.value) {
        time.value += clock.value!.getDelta() * effectController.value.speed * 0.5;
        updateCubes();

        if (renderer.value && camera.value && scene.value) {
            renderer.value.render(scene.value, camera.value);
        }

        lastFrameTime.value = now - (elapsed % frameInterval.value);
    }

    animationFrameId = requestAnimationFrame(animate);
};

// 最適化リサイズハンドリング（逆補正座標変換法）
const handleResize = (): void => {
    if (resizeTimeout) {
        clearTimeout(resizeTimeout);
    }

    resizeTimeout = setTimeout(() => {
        if (camera.value && renderer.value) {
            // カメラとレンダラー更新のみ（MarchingCubes再初期化不要）
            camera.value.aspect = window.innerWidth / window.innerHeight;
            camera.value.updateProjectionMatrix();

            const width = window.innerWidth;
            const height = window.innerHeight;
            renderer.value.setSize(width, height, false);

            // updateCubes()の逆補正システムが自動で正円維持
            console.log(`MetaBall: Inverse correction maintains perfect sphere - ${width}x${height}`);
        }
    }, 100); // 高速レスポンス（再初期化不要）
};

// クリーンアップ関数
const cleanupThreeJS = (): void => {
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
    }

    if (resizeTimeout) {
        clearTimeout(resizeTimeout);
        resizeTimeout = null;
    }

    if (renderer.value) {
        renderer.value.dispose();
        renderer.value.forceContextLoss();
        renderer.value = null;
    }

    if (effect.value) {
        effect.value.geometry?.dispose();

        // Material は Material | Material[] 型のため配列チェックが必要
        if (effect.value.material) {
            if (Array.isArray(effect.value.material)) {
                effect.value.material.forEach((mat) => mat.dispose());
            } else {
                effect.value.material.dispose();
            }
        }

        effect.value = null;
    }

    if (scene.value) {
        scene.value.clear();
        scene.value = null;
    }

    // 参照のクリア
    camera.value = null;
    clock.value = null;

    console.log('MetaBall: Cleanup completed with Vue3 best practices');
};

// 完全な初期化プロセス
const init = async (): Promise<(() => void) | undefined> => {
    console.log('MetaBall: Initializing with Vue3 Composition API...');

    // Clockの初期化
    clock.value = markRaw(new Clock());

    // シーンとライトの設定
    scene.value = markRaw(new Scene());

    const ambient = markRaw(new AmbientLight(0xffffff, 0.9));
    const directional = markRaw(new DirectionalLight(0xffffff, 0.7));
    directional.position.set(1, 1, 1);

    scene.value.add(ambient);
    scene.value.add(directional);

    // 各コンポーネントの初期化
    setupCamera();
    const updateCanvasSize = setupRenderer();
    await setupMarchingCubes();

    console.log('MetaBall: Vue3 Composition API initialization complete!');
    return updateCanvasSize;
};

// Vue3 ライフサイクル
onMounted(async () => {
    await nextTick(); // DOM更新完了を待機

    await init();
    animate();
    
    // リサイズイベント登録
    window.addEventListener('resize', handleResize);
    
    console.log('MetaBall: Vue3 Composition API fully activated!');
});

onUnmounted(() => {
    // イベントリスナー削除
    window.removeEventListener('resize', handleResize);
    
    // Three.jsリソース完全クリーンアップ
    cleanupThreeJS();
    
    console.log('MetaBall: Vue3 Composition API cleanup complete!');
});
</script>

<style scoped>
#main {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
}

#container {
    width: 100%;
    height: 100%;
    display: block;
}
</style>