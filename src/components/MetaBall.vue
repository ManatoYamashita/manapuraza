<template>
    <div id="main">
        <div id="container" ref="container"></div>
    </div>
</template>

<script lang="js" type="module">
		import * as THREE from 'three';

		import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
		import { MarchingCubes } from 'three/addons/objects/MarchingCubes.js';
		import backgroundimage from '@/assets/y.svg';

		let container, stats;
		let camera, scene, renderer;
		let materials, current_material;
		let light, pointLight, ambientLight;
		let effect, resolution;
		let effectController;
		let time = 0;
		const clock = new THREE.Clock();
		
		function onWindowResize() {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize( window.innerWidth, window.innerHeight );
		}

		function generateMaterials() {
			const materials = {
				'plastic': new THREE.MeshPhongMaterial( { specular: 0xFF8C00, shininess: 5, color: 0xffb300 } ),
			};
			return materials;
		}

		function setupGui() {
			effectController = {
				material: 'plastic',
				speed: 0.1,
				numBlobs: 3,
				resolution: 50,
				isolation: 4,
			};

		}

		// this controls content of marching cubes voxel field

		function updateCubes( object, time, numblobs, floor, wallx, wallz ) {

			object.reset();

			const subtract = 10;
			const strength = 0.6 / ( ( Math.sqrt( numblobs ) - 1 ) / 4 + 1 );
			for ( let i = 0; i < numblobs; i ++ ) {
				const ballx = Math.sin( i + 1.26 * time * ( 1.03 + 0.5 * Math.cos( 0.21 * i ) ) ) * 0.27 + 0.5;
				const bally = Math.abs( Math.cos( i + 1.12 * time * Math.cos( 1.22 + 0.1424 * i ) ) ) * 0.77; // dip into the floor
				const ballz = Math.cos( i + 1.32 * time * 0.1 * Math.sin( ( 0.92 + 0.53 * i ) ) ) * 0.27 + 0.5;

				object.addBall( ballx, bally, ballz, strength, subtract );					
			}

			object.update();
		}

		function render() {

			const delta = clock.getDelta();

			time += delta * effectController.speed * 0.5;

			// marching cubes

			if ( effectController.resolution !== resolution ) {

				resolution = effectController.resolution;
				effect.init( Math.floor( resolution ) );

			}

			if ( effectController.isolation !== effect.isolation ) {

				effect.isolation = effectController.isolation;

			}

			updateCubes( effect, time, effectController.numBlobs, effectController.floor, effectController.wallx, effectController.wallz );

			// render

			renderer.render( scene, camera );

		}
        
        export default {
            name: 'MetaBall',
            mounted() {
                this.init();
                this.animate();
            },
            methods: {
                init() {

                    const container = this.$refs.container;

                    // CAMERA

                    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
                    camera.position.set( - 100, 1000, 800 );
                    
                    // SCENE
                    
                    scene = new THREE.Scene();
					
                    // urlには画像の相対パスを指定
					const url = backgroundimage;

                    const textureLoader = new THREE.TextureLoader();
                    const backgroundTexture = textureLoader.load(url);

                    scene.background = backgroundTexture;
					
                    light = new THREE.DirectionalLight( 0xffffff, 5 );
                    light.position.set( 0.5, 0.5, 1 );
                    scene.add( light );

                    pointLight = new THREE.PointLight( 0xff7c00, 3, 0, 0 );
                    pointLight.position.set( 0, 0, 100 );
                    scene.add( pointLight );

                    ambientLight = new THREE.AmbientLight( 0x323232, 3 );
                    scene.add( ambientLight );

                    // MATERIALS

                    materials = generateMaterials();
                    current_material = 'plastic';

                    // MARCHING CUBES

                    resolution = 50;

                    effect = new MarchingCubes( resolution, materials[ current_material ], true, true, 100000 );
                    effect.position.set( 0, 0, 0 );
                    effect.scale.set( 700, 700, 700 );

                    effect.enableUvs = false;
                    effect.enableColors = false;

                    scene.add( effect );

                    // RENDERER

                    renderer = new THREE.WebGLRenderer();
                    renderer.setPixelRatio( window.devicePixelRatio );
                    renderer.setSize( window.innerWidth, window.innerHeight );
                    container.appendChild( renderer.domElement );

                    // CONTROLS

                    const controls = new OrbitControls( camera, renderer.domElement );
                    controls.minDistance = 500;
                    controls.maxDistance = 5000;
                    
					// Raycasterとマウスのベクトルを作成
					const raycaster = new THREE.Raycaster();
					const mouse = new THREE.Vector2();

					function onMouseClick(event) {
						// マウスの位置を正規化
						mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
						mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

						// Raycasterを更新
						raycaster.setFromCamera(mouse, camera);

						// 交差するオブジェクトを取得
						const intersects = raycaster.intersectObjects(scene.children);
						
						if (intersects.length > 0) {
							if(intersects[0].object.material.color.getHex() === 0xffb300) {
								intersects[0].object.material.color.set(0xffffff);
							} else if(intersects[0].object.material.color.getHex() === 0xffffff) {
								intersects[0].object.material.color.set(0x58c0fc);
							} else if(intersects[0].object.material.color.getHex() === 0x58c0fc) {
								intersects[0].object.material.color.set(0x7dff95);
							} else {
								intersects[0].object.material.color.set(0xffb300);
							}
						}
					}

					// クリックイベントリスナーを追加
					window.addEventListener('click', onMouseClick, false);

                    setupGui();

                    // EVENTS

                    window.addEventListener( 'resize', onWindowResize );
                },
                animate() {
                    requestAnimationFrame( this.animate );
                    render();
                }
            }
        }
</script>