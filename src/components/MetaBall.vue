<template>
    <div id="main">
        <div id="container" ref="container"></div>
    </div>
</template>

<script>
import { PerspectiveCamera, Scene, TextureLoader, WebGLRenderer, Clock } from 'three';
import { AmbientLight, DirectionalLight, PointLight } from 'three';
import { MeshPhongMaterial } from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { MarchingCubes } from 'three/addons/objects/MarchingCubes.js';
import backgroundimage from '@/assets/background.webp';

export default {
    name: 'MetaBall',
    data() {
        return {
            resolution: 30,
            effectController: {
                material: 'plastic',
                speed: 0.1,
                numBlobs: 3,
                resolution: 30,
                isolation: 10,
            },
            time: 0,
            clock: new Clock(),
            // パフォーマンス最適化用設定
            targetFPS: 30, // 60FPS→30FPSに制限
            frameInterval: 1000 / 30,
            lastFrameTime: 0,
            isVisible: true,
            isPaused: false,
            dynamicResolution: {
                base: 30,
                min: 15,
                max: 40,
                current: 30
            },
            performanceMonitor: {
                frameCount: 0,
                lastCheck: performance.now(),
                avgFrameTime: 0
            }
        };
    },
    async mounted() {
        await this.init();
        this.animate();
        window.addEventListener('resize', this.onWindowResize);
        
        // 非アクティブ時の描画停止機構
        this.setupVisibilityControl();
        
        // Intersection Observerで要素の可視状態を監視
        this.setupIntersectionObserver();
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.onWindowResize);
        
        // イベントリスナーのクリーンアップ
        document.removeEventListener('visibilitychange', this.handleVisibilityChange);
        window.removeEventListener('blur', this.handleWindowBlur);
        window.removeEventListener('focus', this.handleWindowFocus);
        
        if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
        }
        
        // Three.jsリソースのクリーンアップ
        this.cleanupThreeResources();
    },
    methods: {
        async init() {
            this.container = this.$refs.container;

            // カメラの設定
            this.camera = new PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 700);
            this.camera.position.set(100, 100, 400);

            // シーンの設定
            this.scene = new Scene();
            const textureLoader = new TextureLoader();
            const backgroundTexture = textureLoader.load(backgroundimage);
            this.scene.background = backgroundTexture;

            // ライトの設定
            this.setupLights();

            // マテリアルの生成
            this.materials = this.generateMaterials();

            // 条件付きでOrbitControlsとMarchingCubesを読み込み
            const [{ OrbitControls }, { MarchingCubes }] = await Promise.all([
                import('three/addons/controls/OrbitControls.js'),
                import('three/addons/objects/MarchingCubes.js')
            ]);

            // Marching Cubesの設定（最適化版）
            this.effect = new MarchingCubes(
                this.dynamicResolution.current, // 動的解像度を初期値として使用
                this.materials[this.effectController.material],
                true, // enableUvs
                true, // enableColors  
                50000 // maxPolyCount を100000から50000に削減
            );
            this.effect.position.set(0, 0, 0);
            this.effect.scale.set(300, 300, 300);
            
            // Frustum Culling を有効化（見えない部分の描画をスキップ）
            this.effect.frustumCulled = true;
            
            this.scene.add(this.effect);

            // レンダラーの設定（パフォーマンス最適化）
            this.renderer = new WebGLRenderer({ 
                antialias: false, 
                alpha: false, 
                powerPreference: 'high-performance',
                stencil: false,
                depth: true,
                precision: 'mediump'
            });
            
            // デバイス固有の最適化
            const pixelRatio = Math.min(window.devicePixelRatio, 2) * 0.5;
            this.renderer.setPixelRatio(pixelRatio);
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            
            // レンダラーの追加最適化
            this.renderer.shadowMap.enabled = false;
            this.renderer.outputEncoding = 'sRGB';
            
            this.container.appendChild(this.renderer.domElement);

            // パフォーマンス重視設定: タッチデバイスと低スペックデバイスでOrbitControlsを無効化
            const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            const isLowPerformanceDevice = this.detectLowPerformanceDevice();
            
            // 高性能デバイスのみでOrbitControlsを有効化（パフォーマンス重視）
            if (!isTouchDevice && !isLowPerformanceDevice) {
                // コントロールの設定（軽量版）
                this.controls = new OrbitControls(this.camera, this.renderer.domElement);
                this.controls.minDistance = 100;
                this.controls.maxDistance = 500;
                this.controls.enableDamping = false; // ダンピング無効（軽量化）
                this.controls.autoRotate = false; // 自動回転無効（軽量化）
            }
        },
        animate() {
            if (this.isPaused) {
                requestAnimationFrame(this.animate);
                return;
            }

            const now = performance.now();
            const elapsed = now - this.lastFrameTime;

            // フレームレート制限（30FPS）
            if (elapsed >= this.frameInterval) {
                this.renderScene();
                this.lastFrameTime = now - (elapsed % this.frameInterval);
                
                // パフォーマンス監視
                this.monitorPerformance(now);
            }
            
            requestAnimationFrame(this.animate);
        },
        renderScene() {
            const delta = this.clock.getDelta();
            this.time += delta * this.effectController.speed * 0.5;

            // 動的解像度調整または手動解像度変更の場合のみ更新
            const currentResolution = this.dynamicResolution.current;
            if (
                this.effectController.resolution !== this.resolution ||
                this.effectController.isolation !== this.effect.isolation ||
                currentResolution !== this.resolution
            ) {
                this.resolution = Math.floor(currentResolution);
                this.effect.init(this.resolution);
                this.effect.isolation = this.effectController.isolation;
            }

            // キューブの更新（最適化版）
            this.updateCubesOptimized();

            // シーンのレンダリング
            this.renderer.render(this.scene, this.camera);
        },
        onWindowResize() {
            if (this.camera && this.renderer) {
                this.camera.aspect = window.innerWidth / window.innerHeight;
                this.camera.updateProjectionMatrix();
                this.renderer.setSize(window.innerWidth, window.innerHeight);
            }
        },
        generateMaterials() {
            // MeshPhongMaterial を軽量版に最適化
            return {
                plastic: new MeshPhongMaterial({
                    color: 0xffa500,
                    emissive: 0xffa500,
                    emissiveIntensity: 0.75,
                    // パフォーマンス重視で反射計算を簡素化
                    specular: 0xffff00,
                    shininess: 5, // 10から5に削減
                    flatShading: false, // スムーズシェーディング維持
                    // 不要な機能を無効化
                    transparent: false,
                    fog: false
                }),
            };
        },
        setupLights() {
            // 軽量化されたライト設定（パフォーマンス重視）
            // Ambient Light のみ使用（最も軽い）
            this.ambientLight = new AmbientLight(0xffffff, 0.8);
            this.scene.add(this.ambientLight);

            // Directional Light を軽量設定で追加（影なし）
            this.light = new DirectionalLight(0xffffff, 0.6);
            this.light.position.set(1, 1, 1);
            this.light.castShadow = false; // 影計算を無効化
            this.scene.add(this.light);
            
            // Point Light は重いので削除（コメントアウト）
            // this.pointLight = new PointLight(0xffffff, 10, 1, 1);
            // this.pointLight.position.set(0, 0, 50);
            // this.scene.add(this.pointLight);
        },
        updateCubes() {
            this.effect.reset();

            const numBlobs = this.effectController.numBlobs;
            const subtract = 10;
            const strength = 0.6 / ((Math.sqrt(numBlobs) - 1) / 4 + 1);

            for (let i = 0; i < numBlobs; i++) {
                const time = this.time;
                const ballx = Math.sin(i + 1.26 * time * (1.03 + 0.5 * Math.cos(0.21 * i))) * 0.27 + 0.5;
                const bally = Math.abs(Math.cos(i + 1.12 * time * Math.cos(1.22 + 0.1424 * i))) * 0.77;
                const ballz = Math.cos(i + 1.32 * time * 0.1 * Math.sin(0.92 + 0.53 * i)) * 0.27 + 0.5;

                this.effect.addBall(ballx, bally, ballz, strength, subtract);
            }

            this.effect.update();
        },
        updateCubesOptimized() {
            // 高負荷時は計算をスキップ
            if (this.performanceMonitor.avgFrameTime > 50) { // 50ms以上なら処理軽減
                this.skipFrameCount = (this.skipFrameCount || 0) + 1;
                if (this.skipFrameCount % 2 === 0) return; // 2フレームに1回実行
            }
            
            this.updateCubes();
        },
        monitorPerformance(now) {
            const monitor = this.performanceMonitor;
            monitor.frameCount++;
            
            const elapsed = now - monitor.lastCheck;
            if (elapsed >= 1000) { // 1秒ごとに監視
                monitor.avgFrameTime = elapsed / monitor.frameCount;
                
                // 動的解像度調整
                this.adjustDynamicResolution(monitor.avgFrameTime);
                
                monitor.frameCount = 0;
                monitor.lastCheck = now;
            }
        },
        adjustDynamicResolution(avgFrameTime) {
            const dynamic = this.dynamicResolution;
            
            if (avgFrameTime > 40) { // 40ms以上なら解像度を下げる
                dynamic.current = Math.max(dynamic.min, dynamic.current - 2);
            } else if (avgFrameTime < 25) { // 25ms以下なら解像度を上げる
                dynamic.current = Math.min(dynamic.max, dynamic.current + 1);
            }
        },
        pauseAnimation() {
            this.isPaused = true;
        },
        resumeAnimation() {
            this.isPaused = false;
            this.lastFrameTime = performance.now();
        },
        setupVisibilityControl() {
            // Page Visibility APIでタブの状態を監視
            this.handleVisibilityChange = () => {
                if (document.hidden) {
                    this.pauseAnimation();
                } else {
                    this.resumeAnimation();
                }
            };
            
            // ウィンドウのフォーカス状態でも制御
            this.handleWindowBlur = () => this.pauseAnimation();
            this.handleWindowFocus = () => this.resumeAnimation();
            
            document.addEventListener('visibilitychange', this.handleVisibilityChange);
            window.addEventListener('blur', this.handleWindowBlur);
            window.addEventListener('focus', this.handleWindowFocus);
        },
        setupIntersectionObserver() {
            // 要素が画面内に表示されているか監視
            if ('IntersectionObserver' in window) {
                this.intersectionObserver = new IntersectionObserver(
                    (entries) => {
                        const entry = entries[0];
                        this.isVisible = entry.isIntersecting;
                        
                        if (!this.isVisible) {
                            this.pauseAnimation();
                        } else if (!document.hidden) {
                            this.resumeAnimation();
                        }
                    },
                    { threshold: 0.1 } // 10%以上表示されたらアクティブ
                );
                
                this.intersectionObserver.observe(this.$refs.container || this.$el);
            }
        },
        detectLowPerformanceDevice() {
            // 低性能デバイスを検出（パフォーマンス重視）
            const canvas = document.createElement('canvas');
            const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
            
            if (!gl) return true; // WebGL非対応は低性能とみなす
            
            const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
            const renderer = debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : '';
            
            // 統合GPUや低性能デバイスを判定
            const lowPerformanceIndicators = [
                'intel', 'integrated', 'mobile', 'low', 'basic',
                'software', 'llvm', 'mesa', 'angle'
            ];
            
            return lowPerformanceIndicators.some(indicator => 
                renderer.toLowerCase().includes(indicator)
            );
        },
        cleanupThreeResources() {
            // Three.jsリソースのメモリリーク対策強化
            if (this.controls) {
                this.controls.dispose();
                this.controls = null;
            }
            if (this.renderer) {
                this.renderer.dispose();
                this.renderer.forceContextLoss();
                this.renderer.domElement = null;
                this.renderer = null;
            }
            if (this.effect) {
                this.effect.geometry?.dispose();
                this.effect.material?.dispose();
                this.effect = null;
            }
            if (this.scene) {
                this.scene.clear();
                this.scene = null;
            }
            // ライトをクリーンアップ
            this.ambientLight = null;
            this.light = null;
        },
    },
};
</script>
