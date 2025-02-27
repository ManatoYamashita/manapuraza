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
        };
    },
    async mounted() {
        await this.init();
        this.animate();
        window.addEventListener('resize', this.onWindowResize);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.onWindowResize);
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

            const { OrbitControls } = await import('three/addons/controls/OrbitControls.js');
            const { MarchingCubes } = await import('three/addons/objects/MarchingCubes.js');

            // Marching Cubesの設定
            this.effect = new MarchingCubes(
                this.resolution,
                this.materials[this.effectController.material],
                true,
                true,
                100000
            );
            this.effect.position.set(0, 0, 0);
            this.effect.scale.set(300, 300, 300);
            this.scene.add(this.effect);

            // レンダラーの設定
            this.renderer = new WebGLRenderer({ antialias: false });
            this.renderer.setPixelRatio(window.devicePixelRatio * 0.5);
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.container.appendChild(this.renderer.domElement);

            // デバイスがタッチ対応かどうかを判定
            const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

            // タッチデバイスでない場合にのみOrbitControlsを初期化
            if (!isTouchDevice) {
                // コントロールの設定
                this.controls = new OrbitControls(this.camera, this.renderer.domElement);
                this.controls.minDistance = 100;
                this.controls.maxDistance = 500;
            }
        },
        animate() {
            requestAnimationFrame(this.animate);
            this.renderScene();
        },
        renderScene() {
            const delta = this.clock.getDelta();
            this.time += delta * this.effectController.speed * 0.5;

            // 必要な場合のみMarching Cubesを更新
            if (
                this.effectController.resolution !== this.resolution ||
                this.effectController.isolation !== this.effect.isolation
            ) {
                this.resolution = this.effectController.resolution;
                this.effect.init(Math.floor(this.resolution));
                this.effect.isolation = this.effectController.isolation;
            }

            // キューブの更新
            this.updateCubes();

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
            return {
                plastic: new MeshPhongMaterial({
                    specular: 0xffff00,
                    shininess: 10,
                    color: 0xffa500,
                    emissive: 0xffa500,
                    emissiveIntensity: 0.75,
                }),
            };
        },
        setupLights() {
            // 照明設定
            this.ambientLight = new AmbientLight(0xffffff, 1);
            this.scene.add(this.ambientLight);

            this.light = new DirectionalLight(0xffffff, 0.5);
            this.light.position.set(0.5, 1, 0.5);
            this.scene.add(this.light);

            this.pointLight = new PointLight(0xffffff, 10, 1, 1);
            this.pointLight.position.set(0, 0, 50);
            this.scene.add(this.pointLight);
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
    },
};
</script>
