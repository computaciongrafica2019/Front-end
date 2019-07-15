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
import GLTFLoader from 'three-gltf-loader';

var OrbitControls = require('three-orbit-controls')(THREE)
// var OBJLoader2 =  require('wwobjloader2')(THREE);
// import '../../loaderObj'
// import 'wwobjloader2'

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
     const canvas = document.querySelector('#canvas');
  const renderer = new THREE.WebGLRenderer({canvas});

  const fov = 45;
  const aspect = 2;  // the canvas default
  const near = 0.1;
  const far = 100;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 10, 20);

  const controls = new THREE.OrbitControls(camera, canvas);
  controls.target.set(0, 5, 0);
  controls.update();

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('black');

  {
    const planeSize = 40;

    const loader = new THREE.TextureLoader();
    const texture = loader.load('https://threejsfundamentals.org/threejs/resources/images/checker.png');
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.magFilter = THREE.NearestFilter;
    const repeats = planeSize / 2;
    texture.repeat.set(repeats, repeats);

    const planeGeo = new THREE.PlaneBufferGeometry(planeSize, planeSize);
    const planeMat = new THREE.MeshPhongMaterial({
      map: texture,
      side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(planeGeo, planeMat);
    mesh.rotation.x = Math.PI * -.5;
    scene.add(mesh);
  }

  {
    const skyColor = 0xB1E1FF;  // light blue
    const groundColor = 0xB97A20;  // brownish orange
    const intensity = 1;
    const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
    scene.add(light);
  }

  {
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(0, 10, 0);
    light.target.position.set(-5, 0, 0);
    scene.add(light);
    scene.add(light.target);
  }

  {
    const objLoader = new OBJLoader2();
    objLoader.load('https://threejsfundamentals.org/threejs/resources/models/windmill/windmill.obj', (event) => {
      const root = event.detail.loaderRootNode;
      scene.add(root);
    });
  }

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  function render() {

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
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