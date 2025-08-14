<template>
    <div id="main">
        <div id="container" ref="container"></div>
    </div>
</template>

<script>
import { PerspectiveCamera, Scene, WebGLRenderer, Clock } from 'three';
import { AmbientLight, DirectionalLight } from 'three';
import { MeshPhongMaterial } from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { MarchingCubes } from 'three/addons/objects/MarchingCubes.js';
// 背景画像のimportを削除 - プログラマティックグラデーション使用のため

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
            },
            // 解像度変更の非同期制御
            resolutionChange: {
                pending: false,
                targetResolution: 30,
                debounceTimer: null
            },
            // 補間ベースフレーム制御
            frameControl: {
                lastUpdateTime: 0,
                updateInterval: 16, // 60FPS基準
                interpolationFactor: 1.0,
                previousBalls: [],
                adaptiveUpdate: true
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
            console.log('MetaBall: Starting initialization...');
            this.container = this.$refs.container;
            
            if (!this.container) {
                console.error('MetaBall: Container element not found!');
                return;
            }

            // カメラの設定（最適FOVで初期化）
            console.log('MetaBall: Setting up camera with optimal settings...');
            const initialFOV = this.calculateOptimalFOV();
            this.camera = new PerspectiveCamera(initialFOV, window.innerWidth / window.innerHeight, 1, 700);
            
            // 初期カメラ位置を最適化
            const initialCameraPos = this.calculateOptimalCameraPosition();
            this.camera.position.set(initialCameraPos.x, initialCameraPos.y, initialCameraPos.z);

            // シーンの設定（背景はCSSグラデーションを使用）
            console.log('MetaBall: Setting up scene...');
            this.scene = new Scene();

            // ライトの設定
            this.setupLights();

            // レンダラーを先に初期化（背景表示のため）
            console.log('MetaBall: Setting up renderer...');
            this.renderer = new WebGLRenderer({ 
                antialias: false, 
                alpha: true, // 背景はCSS側に委譲（透過）
                powerPreference: 'high-performance',
                stencil: false,
                depth: true,
                precision: 'mediump',
                // 安定性向上のための追加設定
                premultipliedAlpha: false,
                preserveDrawingBuffer: false,
                failIfMajorPerformanceCaveat: false
            });
            
            // デバイス固有の最適化（安定性重視）
            const devicePixelRatio = window.devicePixelRatio || 1;
            const pixelRatio = Math.min(Math.max(devicePixelRatio * 0.5, 0.5), 1.5);
            this.renderer.setPixelRatio(pixelRatio);
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            
            // レンダラーの追加最適化（安定性重視）
            this.renderer.shadowMap.enabled = false;
            this.renderer.outputColorSpace = 'srgb';
            this.renderer.setClearColor(0x000000, 0);
            
            // WebGL状態の安定化
            this.renderer.autoClear = true;
            this.renderer.sortObjects = true;
            this.renderer.capabilities.logarithmicDepthBuffer = false;
            console.log('MetaBall: Renderer setup complete');
            
            this.container.appendChild(this.renderer.domElement);
            console.log('MetaBall: Canvas added to DOM');
            
            // 背景はCSSグラデーションへ全面委譲
            console.log('MetaBall: Using CSS gradient background (transparent canvas)');
            
            // マテリアルの生成
            console.log('MetaBall: Generating materials...');
            this.materials = this.generateMaterials();

            // MarchingCubesを先に読み込み（必須・環境統一）
            let MarchingCubes;
            try {
                const module = await import('three/addons/objects/MarchingCubes.js');
                MarchingCubes = module.MarchingCubes;
                console.log(`MetaBall: MarchingCubes loaded successfully (${import.meta.env.MODE} mode)`);
            } catch (error) {
                console.error('MetaBall: Failed to load MarchingCubes:', error);
                throw new Error('MetaBall initialization failed: MarchingCubes module unavailable');
            }

            // Marching Cubesの設定（aspect ratio対応版）
            const initialResolution = this.calculateAspectAwareResolution();
            const maxRes = Math.max(initialResolution.x, initialResolution.y, initialResolution.z);
            
            this.effect = new MarchingCubes(
                maxRes, // aspect ratio対応解像度
                this.materials[this.effectController.material],
                true, // enableUvs
                true, // enableColors  
                50000 // maxPolyCount を100000から50000に削減
            );
            console.log(`MetaBall: Initial voxel grid - ${initialResolution.x}x${initialResolution.y}x${initialResolution.z} (max: ${maxRes})`);
            this.effect.position.set(0, 0, 0);
            
            // 完璧球形スケール適用
            const initialScale = this.calculatePerfectSphereScale();
            this.effect.scale.set(initialScale.x, initialScale.y, initialScale.z);
            console.log(`MetaBall: Perfect sphere scale set to ${initialScale.x.toFixed(1)} with FOV ${initialFOV.toFixed(1)}°`);
            
            // Frustum Culling を有効化（見えない部分の描画をスキップ）
            this.effect.frustumCulled = true;
            
            console.log('MetaBall: Adding MarchingCubes to scene...');
            this.scene.add(this.effect);
            console.log('MetaBall: MarchingCubes added successfully');

            // パフォーマンス重視設定: タッチデバイスと低スペックデバイスでOrbitControlsを無効化
            const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            const isLowPerformanceDevice = this.detectLowPerformanceDevice();
            
            // 高性能デバイスのみでOrbitControlsを条件付き読み込み（環境統一・パフォーマンス重視）
            if (!isTouchDevice && !isLowPerformanceDevice) {
                try {
                    const { OrbitControls } = await import('three/addons/controls/OrbitControls.js');
                    // コントロールの設定（軽量版）
                    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
                    this.controls.minDistance = 100;
                    this.controls.maxDistance = 500;
                    this.controls.enableDamping = false; // ダンピング無効（軽量化）
                    this.controls.autoRotate = false; // 自動回転無効（軽量化）
                    console.log(`MetaBall: OrbitControls enabled (${import.meta.env.MODE} mode)`);
                } catch (error) {
                    console.warn('MetaBall: OrbitControls failed to load, continuing without controls:', error);
                    this.controls = null;
                }
            } else {
                console.log(`MetaBall: OrbitControls disabled (touch device or low performance - ${import.meta.env.MODE} mode)`);
            }
            
            // 環境統一性確認ログ
            console.log(`MetaBall: Initialization complete! (${import.meta.env.MODE} mode, DEV=${import.meta.env.DEV}, PROD=${import.meta.env.PROD})`);
            
            // プロダクション時の追加検証
            if (import.meta.env.PROD) {
                console.log('MetaBall: Production mode - performance optimizations active');
                // プロダクション環境での統一性チェック
                if (!this.effect || !this.renderer || !this.camera) {
                    console.error('MetaBall: Critical components missing in production!');
                }
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

            // isolation変更のみアニメーションフレーム内で実行（軽量）
            if (this.effectController.isolation !== this.effect.isolation) {
                this.effect.isolation = this.effectController.isolation;
            }

            // キューブの更新（最適化版）
            this.updateCubesOptimized();

            // シーンのレンダリング
            this.renderer.render(this.scene, this.camera);
        },
        onWindowResize() {
            if (this.camera && this.renderer) {
                // リサイズ時の安定性向上
                const width = window.innerWidth;
                const height = window.innerHeight;
                
                // レンダラーサイズ変更時の安定化処理
                const devicePixelRatio = window.devicePixelRatio || 1;
                const pixelRatio = Math.min(Math.max(devicePixelRatio * 0.5, 0.5), 1.5);
                this.renderer.setPixelRatio(pixelRatio);
                this.renderer.setSize(width, height, false); // updateStyleを無効化
                
                // aspect ratio対応ボクセルグリッド補正システム更新
                this.updateAspectCorrectedMetaBall();
                
                // リサイズ後のクリア処理
                this.renderer.clear();
                
                console.log(`MetaBall: Window resized to ${width}x${height} (aspect: ${(width/height).toFixed(2)})`);
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
            // 背景表示最適化されたライト設定（パフォーマンス重視 + 美観改善）
            // Ambient Light で基本照明（背景との調和を考慮）
            this.ambientLight = new AmbientLight(0xffffff, 0.9); // 0.8→0.9に微調整
            this.scene.add(this.ambientLight);

            // Directional Light で立体感を演出（背景を引き立てる）
            this.light = new DirectionalLight(0xffffff, 0.7); // 0.6→0.7に微調整
            this.light.position.set(1, 1, 1);
            this.light.castShadow = false; // 影計算を無効化（パフォーマンス重視）
            this.scene.add(this.light);
            
            // Point Light は重いので削除を維持（パフォーマンス重視）
            // this.pointLight = new PointLight(0xffffff, 10, 1, 1);
            // this.pointLight.position.set(0, 0, 50);
            // this.scene.add(this.pointLight);
        },
        updateCubes() {
            this.effect.reset();

            const numBlobs = this.effectController.numBlobs;
            const subtract = 10;
            const strength = 0.6 / ((Math.sqrt(numBlobs) - 1) / 4 + 1);

            // aspect ratio補正係数計算
            const aspectRatio = window.innerWidth / window.innerHeight;
            const aspectCorrectionX = aspectRatio >= 1.0 ? 1.0 / aspectRatio : 1.0;
            const aspectCorrectionY = aspectRatio < 1.0 ? aspectRatio : 1.0;

            for (let i = 0; i < numBlobs; i++) {
                const time = this.time;
                
                // 元の座標計算（正規化座標系 0.0-1.0）
                let ballx = Math.sin(i + 1.26 * time * (1.03 + 0.5 * Math.cos(0.21 * i))) * 0.27 + 0.5;
                let bally = Math.abs(Math.cos(i + 1.12 * time * Math.cos(1.22 + 0.1424 * i))) * 0.77;
                const ballz = Math.cos(i + 1.32 * time * 0.1 * Math.sin(0.92 + 0.53 * i)) * 0.27 + 0.5;
                
                // aspect ratio補正を適用（完璧円形を保証）
                ballx = (ballx - 0.5) * aspectCorrectionX + 0.5;
                bally = (bally - 0.5) * aspectCorrectionY + 0.5;

                this.effect.addBall(ballx, bally, ballz, strength, subtract);
            }

            this.effect.update();
        },
        updateCubesSmooth() {
            this.effect.reset();

            const numBlobs = this.effectController.numBlobs;
            const subtract = 10;
            const strength = 0.6 / ((Math.sqrt(numBlobs) - 1) / 4 + 1);
            const frameCtrl = this.frameControl;
            const interpolation = frameCtrl.interpolationFactor;

            // aspect ratio補正係数計算
            const aspectRatio = window.innerWidth / window.innerHeight;
            const aspectCorrectionX = aspectRatio >= 1.0 ? 1.0 / aspectRatio : 1.0;
            const aspectCorrectionY = aspectRatio < 1.0 ? aspectRatio : 1.0;

            for (let i = 0; i < numBlobs; i++) {
                const time = this.time;
                
                // 元の座標計算（正規化座標系 0.0-1.0）
                let ballx = Math.sin(i + 1.26 * time * (1.03 + 0.5 * Math.cos(0.21 * i))) * 0.27 + 0.5;
                let bally = Math.abs(Math.cos(i + 1.12 * time * Math.cos(1.22 + 0.1424 * i))) * 0.77;
                const ballz = Math.cos(i + 1.32 * time * 0.1 * Math.sin(0.92 + 0.53 * i)) * 0.27 + 0.5;
                
                // aspect ratio補正を適用（完璧円形を保証）
                ballx = (ballx - 0.5) * aspectCorrectionX + 0.5;
                bally = (bally - 0.5) * aspectCorrectionY + 0.5;

                // 補間処理で滑らかな移行
                if (frameCtrl.previousBalls[i]) {
                    const prev = frameCtrl.previousBalls[i];
                    const smoothX = prev.x + (ballx - prev.x) * interpolation;
                    const smoothY = prev.y + (bally - prev.y) * interpolation;
                    const smoothZ = prev.z + (ballz - prev.z) * interpolation;
                    
                    this.effect.addBall(smoothX, smoothY, smoothZ, strength, subtract);
                    
                    // 位置更新
                    frameCtrl.previousBalls[i] = { x: smoothX, y: smoothY, z: smoothZ };
                } else {
                    this.effect.addBall(ballx, bally, ballz, strength, subtract);
                    frameCtrl.previousBalls[i] = { x: ballx, y: bally, z: ballz };
                }
            }

            this.effect.update();
        },
        updateCubesOptimized() {
            const now = performance.now();
            const frameCtrl = this.frameControl;
            const elapsed = now - frameCtrl.lastUpdateTime;
            
            // パフォーマンスに応じた更新間隔調整
            if (this.performanceMonitor.avgFrameTime > 50) {
                frameCtrl.updateInterval = 33; // 30FPS相当
                frameCtrl.interpolationFactor = 0.8;
            } else if (this.performanceMonitor.avgFrameTime > 35) {
                frameCtrl.updateInterval = 22; // 45FPS相当
                frameCtrl.interpolationFactor = 0.9;
            } else {
                frameCtrl.updateInterval = 16; // 60FPS相当
                frameCtrl.interpolationFactor = 1.0;
            }
            
            // 補間ベース更新制御
            if (elapsed >= frameCtrl.updateInterval || !frameCtrl.adaptiveUpdate) {
                this.updateCubesSmooth();
                frameCtrl.lastUpdateTime = now;
            }
        },
        monitorPerformance(now) {
            const monitor = this.performanceMonitor;
            monitor.frameCount++;
            
            const elapsed = now - monitor.lastCheck;
            if (elapsed >= 3000) { // 3秒ごとに監視（頻度減らし点滅防止）
                monitor.avgFrameTime = elapsed / monitor.frameCount;
                
                // 動的解像度調整
                this.adjustDynamicResolution(monitor.avgFrameTime);
                
                monitor.frameCount = 0;
                monitor.lastCheck = now;
            }
        },
        adjustDynamicResolution(avgFrameTime) {
            const dynamic = this.dynamicResolution;
            let newResolution = dynamic.current;
            
            if (avgFrameTime > 40) { // 40ms以上なら解像度を下げる
                newResolution = Math.max(dynamic.min, dynamic.current - 2);
            } else if (avgFrameTime < 25) { // 25ms以下なら解像度を上げる
                newResolution = Math.min(dynamic.max, dynamic.current + 1);
            }
            
            // 解像度が変更される場合は非同期で処理
            if (newResolution !== dynamic.current) {
                this.scheduleResolutionChange(newResolution);
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
        calculateAspectAwareResolution() {
            // aspect ratio対応ボクセルグリッド解像度計算
            const width = window.innerWidth;
            const height = window.innerHeight;
            const aspectRatio = width / height;
            
            // 基準解像度（正方形時の基準）
            const baseRes = this.dynamicResolution.base; // 30
            
            let resX, resY, resZ;
            
            if (aspectRatio >= 1.0) {
                // 横長画面: X軸解像度を比例増加
                resX = Math.round(baseRes * aspectRatio);
                resY = baseRes;
                resZ = baseRes;
            } else {
                // 縦長画面: Y軸解像度を逆比例増加
                resX = baseRes;
                resY = Math.round(baseRes / aspectRatio);
                resZ = baseRes;
            }
            
            // 解像度制限（パフォーマンス考慮）
            resX = Math.max(15, Math.min(60, resX));
            resY = Math.max(15, Math.min(60, resY));
            resZ = Math.max(15, Math.min(40, resZ));
            
            return { x: resX, y: resY, z: resZ };
        },
        calculatePerfectSphereScale() {
            // aspect ratio補正されたスケール計算
            const width = window.innerWidth;
            const height = window.innerHeight;
            const aspectRatio = width / height;
            
            // 基準スケール
            const baseScale = 300;
            
            // 画面サイズに応じた調整
            const minDimension = Math.min(width, height);
            const sizeFactor = Math.max(0.7, Math.min(1.3, minDimension / 800));
            
            // aspect ratio補正スケール（ボクセルグリッドと連動）
            let scaleX = baseScale * sizeFactor;
            let scaleY = baseScale * sizeFactor;
            let scaleZ = baseScale * sizeFactor;
            
            // ボクセルグリッドの矩形化を補正するスケール調整
            if (aspectRatio >= 1.0) {
                // 横長: Xグリッドが増加した分、Xスケールを減らす
                scaleX = scaleX / aspectRatio;
            } else {
                // 縦長: Yグリッドが増加した分、Yスケールを減らす
                scaleY = scaleY * aspectRatio;
            }
            
            return { x: scaleX, y: scaleY, z: scaleZ };
        },
        calculateOptimalFOV() {
            // 最適FOV計算（シンプル化）
            return 50; // ボクセルグリッド補正で解決するためFOVは固定
        },
        calculateOptimalCameraPosition() {
            // 最適カメラ位置計算（FOV補正と連携）
            const width = window.innerWidth;
            const height = window.innerHeight;
            const aspectRatio = width / height;
            
            // 基準カメラ位置
            const baseDistance = 400;
            
            // FOV補正と連動したカメラ距離微調整
            let cameraZ = baseDistance;
            
            // 極端なaspect ratioでの微調整（FOV補正を補助）
            if (aspectRatio >= 2.0) {
                cameraZ = baseDistance * 1.05; // 超横長で微調整
            } else if (aspectRatio <= 0.5) {
                cameraZ = baseDistance * 1.03; // 超縦長で微調整
            }
            
            return { x: 100, y: 100, z: cameraZ };
        },
        updateAspectCorrectedMetaBall() {
            // aspect ratio対応ボクセルグリッド補正システム
            if (this.effect && this.camera) {
                // 1. ボクセルグリッド解像度をaspect ratio対応で再初期化
                const newResolution = this.calculateAspectAwareResolution();
                
                // MarchingCubes再初期化（非同期）
                const schedule = window.requestIdleCallback || ((cb) => setTimeout(cb, 1));
                schedule(() => {
                    if (this.effect) {
                        // 最適解像度で再構築
                        this.effect.init(Math.max(newResolution.x, newResolution.y, newResolution.z));
                        console.log(`MetaBall: Voxel grid updated - ${newResolution.x}x${newResolution.y}x${newResolution.z}`);
                    }
                });
                
                // 2. aspect ratio補正スケール適用
                const scale = this.calculatePerfectSphereScale();
                this.effect.scale.set(scale.x, scale.y, scale.z);
                
                // 3. カメラ設定更新
                const optimalFOV = this.calculateOptimalFOV();
                this.camera.fov = optimalFOV;
                this.camera.aspect = window.innerWidth / window.innerHeight;
                
                // 4. 最適カメラ位置適用
                const cameraPos = this.calculateOptimalCameraPosition();
                this.camera.position.set(cameraPos.x, cameraPos.y, cameraPos.z);
                
                // 5. 投影行列更新
                this.camera.updateProjectionMatrix();
                
                console.log(`MetaBall: Aspect corrected - Scale(${scale.x.toFixed(1)},${scale.y.toFixed(1)},${scale.z.toFixed(1)}), Aspect(${this.camera.aspect.toFixed(2)})`);
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
        scheduleResolutionChange(newResolution) {
            const resChange = this.resolutionChange;
            
            // デバウンス処理：頻繁な解像度変更を防ぐ
            if (resChange.debounceTimer) {
                clearTimeout(resChange.debounceTimer);
            }
            
            resChange.targetResolution = newResolution;
            resChange.debounceTimer = setTimeout(() => {
                this.executeResolutionChange();
            }, 500); // 500ms後に実行
        },
        executeResolutionChange() {
            const resChange = this.resolutionChange;
            
            // 既に変更処理中の場合はスキップ
            if (resChange.pending) return;
            
            const targetRes = Math.floor(resChange.targetResolution);
            const currentRes = this.resolution;
            
            // 実際に変更が必要かチェック
            if (targetRes === currentRes) return;
            
            resChange.pending = true;
            
            // アイドル時または次フレームで実行
            const schedule = window.requestIdleCallback || ((cb) => setTimeout(cb, 1));
            schedule(() => {
                try {
                    // MarchingCubes再初期化（非アニメーションフレーム）
                    this.resolution = targetRes;
                    this.dynamicResolution.current = targetRes;
                    
                    if (this.effect) {
                        this.effect.init(this.resolution);
                    }
                    
                    console.log(`MetaBall: Resolution changed to ${targetRes}`);
                } catch (error) {
                    console.error('MetaBall: Resolution change failed:', error);
                } finally {
                    resChange.pending = false;
                    resChange.debounceTimer = null;
                }
            });
        },
        cleanupThreeResources() {
            // Three.jsリソースのメモリリーク対策強化
            if (this.controls) {
                this.controls.dispose();
                this.controls = null;
            }
            
            // WebGLコンテキストの安全なクリーンアップ
            if (this.renderer) {
                // レンダリング停止
                this.renderer.dispose();
                
                // コンテキストロス前のクリーンアップ
                if (this.renderer.domElement && this.renderer.domElement.parentNode) {
                    this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
                }
                
                // WebGLコンテキストの強制終了（安定性向上）
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
            
            // ライトとクロック関連のクリーンアップ
            this.ambientLight = null;
            this.light = null;
            this.clock = null;
            
            // タイマーのクリーンアップ
            if (this.resolutionChange.debounceTimer) {
                clearTimeout(this.resolutionChange.debounceTimer);
                this.resolutionChange.debounceTimer = null;
            }
        },
        // 背景生成は削除。CSSグラデーションを使用。
    },
};
</script>
