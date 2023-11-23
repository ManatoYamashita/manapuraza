<template>
    <div id="main">
        <div id="container" ref="container"></div>
    </div>
</template>

<script lang="js" type="module">
		import * as THREE from 'three';

		import Stats from 'three/addons/libs/stats.module.js';
         
		import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
		import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
		import { MarchingCubes } from 'three/addons/objects/MarchingCubes.js';
		// import { ToonShader1, ToonShader2, ToonShaderHatching, ToonShaderDotted } from 'three/addons/shaders/ToonShader.js';

		let container, stats;

		let camera, scene, renderer;

		let materials, current_material;

		let light, pointLight, ambientLight;

		let effect, resolution;

		let effectController;

		let time = 0;
        
		const clock = new THREE.Clock();
		
        // animate();
        //  init();

		//

		function onWindowResize() {

			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();

			renderer.setSize( window.innerWidth, window.innerHeight );

		}

		function generateMaterials() {

			// environment map

			// const path = 'textures/cube/SwedishRoyalCastle/';
			// const format = '.jpg';
			// const urls = [
			// 	path + 'px' + format, path + 'nx' + format,
			// 	path + 'py' + format, path + 'ny' + format,
			// 	path + 'pz' + format, path + 'nz' + format
			// ];

			// const cubeTextureLoader = new THREE.CubeTextureLoader();

			// const reflectionCube = cubeTextureLoader.load( urls );
			// const refractionCube = cubeTextureLoader.load( urls );
			// refractionCube.mapping = THREE.CubeRefractionMapping;

			// toons

			// const toonMaterial1 = createShaderMaterial( ToonShader1, light, ambientLight );
			// const toonMaterial2 = createShaderMaterial( ToonShader2, light, ambientLight );
			// const hatchingMaterial = createShaderMaterial( ToonShaderHatching, light, ambientLight );
			// const dottedMaterial = createShaderMaterial( ToonShaderDotted, light, ambientLight );

			// const texture = new THREE.TextureLoader().load( 'textures/uv_grid_opengl.jpg' );
			// texture.wrapS = THREE.RepeatWrapping;
			// texture.wrapT = THREE.RepeatWrapping;
			// texture.colorSpace = THREE.SRGBColorSpace;

			const materials = {
				// 'shiny': new THREE.MeshStandardMaterial( { color: 0x9c0000, roughness: 0.1, metalness: 1.0 } ),
				// 'chrome': new THREE.MeshLambertMaterial( { color: 0xffffff, envMap: reflectionCube } ),
				// 'liquid': new THREE.MeshLambertMaterial( { color: 0xffffff, refractionRatio: 0.85 } ),
				// 'matte': new THREE.MeshPhongMaterial( { shininess: 100, color: 0xFADA5E } ),
				// 'flat': new THREE.MeshLambertMaterial( { /*TODO flatShading: true */ } ),
				// 'textured': new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x111111, shininess: 1, map: texture } ),
				// 'colors': new THREE.MeshPhongMaterial( { color: 0x000000, specular: 0xffffff, shininess: 250, vertexColors: true } ),
				// 'multiColors': new THREE.MeshPhongMaterial( { shininess: 250, vertexColors: true} ),
				'plastic': new THREE.MeshPhongMaterial( { specular: 0xFF8C00, shininess: 250, color: 0xffb300 } ),
				// 'toon1': toonMaterial1,
				// 'toon2': toonMaterial2,
				// 'hatching': hatchingMaterial,
				// 'dotted': dottedMaterial
			};
            
			return materials;

		}

		// function createShaderMaterial( shader, light, ambientLight ) {

		// 	const u = THREE.UniformsUtils.clone( shader.uniforms );

		// 	const vs = shader.vertexShader;
		// 	const fs = shader.fragmentShader;

		// 	const material = new THREE.ShaderMaterial( { uniforms: u, vertexShader: vs, fragmentShader: fs } );

		// 	material.uniforms[ 'uDirLightPos' ].value = light.position;
		// 	material.uniforms[ 'uDirLightColor' ].value = light.color;

		// 	material.uniforms[ 'uAmbientLightColor' ].value = ambientLight.color;

		// 	return material;

		// }

		//

		function setupGui() {

			// const createHandler = function ( id ) {

			// 	return function () {

			// 		current_material = id;

			// 		effect.material = materials[ id ];
			// 		// effect.enableUvs = ( current_material === 'textured' ) ? true : false;
			// 		// effect.enableColors = ( current_material === 'colors' || current_material === 'multiColors' ) ? true : false;

			// 	};

			// };

			effectController = {

				material: 'plastic',

				speed: 0.1,
				numBlobs: 3,
				resolution: 50,
				isolation: 4,

				// floor: false,
				// wallx: false,
				// wallz: false,

				// dummy: function () {}

			};

			// let h;

			// const gui = new GUI();

			// material (type)

			// h = gui.addFolder( 'Materials' );

			// for ( const m in materials ) {

			// 	effectController[ m ] = createHandler( m );
			// 	h.add( effectController, m ).name( m );

			// }

			// simulation

			// h = gui.addFolder( 'Simulation' );

			// h.add( effectController, 'speed', 0.1, 8.0, 0.05 );
			// h.add( effectController, 'numBlobs', 1, 50, 1 );
			// h.add( effectController, 'resolution', 14, 100, 1 );
			// h.add( effectController, 'isolation', 1, 10, 1 );

			// h.add( effectController, 'floor' );
			// h.add( effectController, 'wallx' );
			// h.add( effectController, 'wallz' );

		}

		// this controls content of marching cubes voxel field

		function updateCubes( object, time, numblobs, floor, wallx, wallz ) {

			object.reset();

			// fill the field with some metaballs

			// const rainbow = [
			// 	new THREE.Color( 0xFFEFD5 ),
			// 	new THREE.Color( 0xFFF8DC ),
			// 	new THREE.Color( 0xFADA5E ),
			// 	new THREE.Color( 0xFFE4C4 ),
			// 	new THREE.Color( 0xFFB347 ),
			// 	new THREE.Color( 0xFF9966 ),
			// 	new THREE.Color( 0xFF5E4D )
			// ];
			const subtract = 10;
			const strength = 0.6 / ( ( Math.sqrt( numblobs ) - 1 ) / 4 + 1 );

			for ( let i = 0; i < numblobs; i ++ ) {

				const ballx = Math.sin( i + 1.26 * time * ( 1.03 + 0.5 * Math.cos( 0.21 * i ) ) ) * 0.27 + 0.5;
				const bally = Math.abs( Math.cos( i + 1.12 * time * Math.cos( 1.22 + 0.1424 * i ) ) ) * 0.77; // dip into the floor
				const ballz = Math.cos( i + 1.32 * time * 0.1 * Math.sin( ( 0.92 + 0.53 * i ) ) ) * 0.27 + 0.5;

				// if ( current_material === 'multicolors' ) {

				// 	object.addBall( ballx, bally, ballz, strength, subtract, rainbow[ i % 7 ] );

				// } else {

					object.addBall( ballx, bally, ballz, strength, subtract );
					
				// }

			}

			// if ( floor ) object.addPlaneY( 2, 12 );
			// if ( wallz ) object.addPlaneZ( 2, 12 );
			// if ( wallx ) object.addPlaneX( 2, 12 );

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

                    const url = 'src/assets/y.svg';

                    const textureLoader = new THREE.TextureLoader();
                    const backgroundTexture = textureLoader.load(url);

                    scene.background = backgroundTexture;

                    light = new THREE.DirectionalLight( 0xffffff, 3 );
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
                    

                    // STATS

                    // stats = new Stats();
                    // container.appendChild( stats.dom );

                    // GUI

                    setupGui();

                    // EVENTS

                    window.addEventListener( 'resize', onWindowResize );
                },
                animate() {
                    requestAnimationFrame( this.animate );
                    render();
                    // stats.update();
                }
            }
        }
</script>