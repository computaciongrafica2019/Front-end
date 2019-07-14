<template>
  <div class="catalog-product view__default">
    <div class="title--simple title--centered title--spacer title--spacer">{{ product }}</div>

    <div class="detail">
      <div id="canvas" ref="canvas">
        <!-- <Scene>
          <Camera type="arcRotate" :radius="7.5" :beta="Math.PI / 3"></Camera>
          <HemisphericLight></HemisphericLight>
          <Asset
            src="https://www.babylonjs-playground.com/scenes/skull.babylon"
            :scaling="[0.02, 0.02, 0.02]"
            :position="[4, 0.5, 0]"
          ></Asset>
          <Asset
            src="https://www.babylonjs-playground.com/scenes/Buggy/glTF/buggy.gltf"
            :scaling="[0.02, 0.02, 0.02]"
            :position="[1, 0, -1]"
            :rotation="[0, Math.PI / 2, 0]"
          ></Asset>
          <Asset
            diffuse="#00F"
            src="https://www.babylonjs-playground.com/scenes/StanfordBunny.obj"
            :scaling="[7.5, 7.5, 7.5]"
            :position="[-4, -0.25, -0.5]"
            :rotation="[0, Math.PI, 0]"
          >
            <Texture src="../../assets/wood.png"></Texture>
          </Asset>
          <Asset
            src="../../assets/structure.obj"
            :scaling="[0.02, 0.02, 0.02]"
            :position="[-2, 0, -0.5]"
          ></Asset>
        </Scene>-->
      </div>
    </div>

    <div class="form">
      <input-custom label="Width" :isRequired="true"></input-custom>
      <input-custom label="Height" :isRequired="true"></input-custom>
      <range-custom :minVal="200" :maxVal="500" v-model="length" label="Length"></range-custom>
      <select-custom label="Color" v-model="test" :options="options"></select-custom>
    </div>
  </div>
</template>

<script>
import * as BABYLON from "babylonjs";
import "babylonjs-loaders";

import * as THREE from "three";
import { MTLLoader, OBJLoader } from "three-obj-mtl-loader";

var OrbitControls = require('three-orbit-controls')(THREE)

import InputCustom from "../../components/InputCustom.vue";
import RangeCustom from "../../components/RangeCustom.vue";
import SelectCustom from "../../components/SelectCustom.vue";

export default {
  data() {
    return {
      test: "",
      product: "",
      length: "",
      options: [
        { label: "a", value: 1, bgColor: "coral" },
        { label: "b", value: 2, bgColor: "blue" },
        { label: "c", value: 3, bgColor: "red" },
        { label: "d", value: 4 }
      ]
    };
  },
  mounted() {
      let uob = 'https://www.babylonjs-playground.com/scenes/StanfordBunny.obj'
			var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75, 500/500, 0.1, 1000 );

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( 500, 500 );
			this.$refs.canvas.appendChild( renderer.domElement );
			var geometry = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
			var cube = new THREE.Mesh( geometry, material );
      var ambient = new THREE.AmbientLight(0xFFFFFF);
            scene.add(ambient);
      // scene.add( cube );
      
      let controls = new OrbitControls(camera, renderer.domElement)
      // controls.addEventListener( 'change', () =>  {
      //   renderer.render(scene, camera)
      // });


      var textureLoader = new THREE.TextureLoader();
      var map = textureLoader.load('../../assets/wood.png');
      var material = new THREE.MeshPhongMaterial({map: map});
      var loader = new OBJLoader();
      // loader.load( 'https://www.babylonjs-playground.com/scenes/StanfordBunny.obj', function ( object ) {

      //   // For any meshes in the model, add our material.
      //   object.traverse( function ( node ) {

      //     if ( node.isMesh ) node.material = material;

      //   } );

      //   // Add the model to the scene.
      //   scene.add( object );
      // } );

      loader.load(uob , function(model) {
          // model.traverse(function(child) {
          //     if (child instanceof THREE.Mesh) {
          //         child.material.color = new THREE.Color(0xff0000);
          //     }
          // });
          model.position.set(0, 0, -53);
          model.matrix.scale(10000)

          console.log(model.computeBoundingBox());

          camera.lookAt(model.position)
          scene.add(model);
          window.model = model;
          renderer.render(scene, camera);
      });

			camera.position.z = 5;
      renderer.render(scene, camera)
			// var animate = function () {
			// 	requestAnimationFrame( animate );

			// 	cube.rotation.x += 0.01;
			// 	cube.rotation.y += 0.01;

			// 	renderer.render( scene, camera );
			// };

      // animate();
      
    function animate() {
        requestAnimationFrame( animate );
        renderer.render( scene, camera );
    }
    animate();
  },
  components: {
    InputCustom,
    RangeCustom,
    SelectCustom
  }
};
</script>

<style lang="scss" scoped>
.catalog-product {
  background-image: url("../../assets/backCatalog.jpg");
  background-size: cover;
  background-position: fixed;
  height: 100vh;
  overflow-y: auto;
}

.detail {
  margin: 0 auto;
  margin-bottom: 50px;
  background: white;
  width: 70vw;
  height: 50vh;
  min-height: 300px;
  padding: 30px;
}

#canvas {
  @include squared(100%);
}

.title--spacer {
  margin: 100px 0;
}
</style>