<template>
  <div class="catalog-product view__default">
    <div class="title--simple title--centered title--spacer title--spacer"
      ref="title">{{ product }}</div>

    <div class="detail">
      <div id="canvas" ref="canvas">
        <Scene>
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
        </Scene>
      </div>
    </div>

    <div class="form">
      <template
        v-for="attr in attributes">

        <range-custom 
          :key="attr.Nombre"
          v-if="attr.Tipo == 'Rango'"
          :minVal="attr.ValorMinimo" :maxVal="attr.ValorMaximo" v-model="data[attr.Nombre]" :label="attr.Nombre"></range-custom>
        <range-custom 
          :key="attr.Nombre"
          v-if="attr.Tipo == 'Porcentaje'"
          :minVal="attr.ValorMinimo" :maxVal="attr.ValorMaximo" v-model="data[attr.Nombre]" :label="attr.Nombre" :step="0.01" unit="%"></range-custom>
        <select-custom 
          :key="attr.Nombre"
          v-if="attr.Tipo == 'Seleccion'"
          :label="attr.Nombre" v-model="data[attr.Nombre]" :options="generateOptions(attr.Valores)"></select-custom>

      </template>
    </div>

  <base-modal
    size="430px"
    ref="modal">
    <div class="modal__message modal__message--vertical"
      v-if="showMessage">
      <input-custom :tiny="true" label="Name" :isRequired="true" v-model="name"></input-custom>
      <input-custom :tiny="true" label="Email" :isRequired="true" v-model="email"></input-custom>

      <div class="button button--modal"
        style="margin: 5px; margin-top: 15px"
        @click="requestPricing">Send request</div>
      <div class="button button--modal"
        style="margin: 5px"
        @click="triggerModal">Close</div>
    </div>

    <div class="modal__message modal__thanks"
      v-else>
      {{ message }}

      <div class="button button--modal"
        style="margin-top: 30px"
        @click="triggerModal(); showMessage = true">Close</div>
    </div>
  </base-modal>

    <div class="button"
      @click="triggerModal">Request pricing</div>
  </div>
</template>

<script>
import * as BABYLON from "babylonjs";
import "babylonjs-loaders";

import * as THREE from "three";
import { MTLLoader, OBJLoader } from "three-obj-mtl-loader";
import GLTFLoader from 'three-gltf-loader';

import { TweenMax } from 'gsap/TweenMax';
import { HTTP } from '../../http_common';

var OrbitControls = require('three-orbit-controls')(THREE)

import InputCustom from "../../components/InputCustom.vue";
import RangeCustom from "../../components/RangeCustom.vue";
import SelectCustom from "../../components/SelectCustom.vue";

export default {
  data() {
    return {
      showMessage: true,
      message: 'Thank you for your interest! \n\n An email will arrive soon with all the information',
      test: "",
      product: "",
      length: "",
      options: [
        { label: "a", value: 1, bgColor: "coral" },
        { label: "b", value: 2, bgColor: "blue" },
        { label: "c", value: 3, bgColor: "red" },
        { label: "d", value: 4 }
      ],
      attributes: [],
      data: {},
      name: '',
      email: ''
    };
  },
  created() {
    this.product = this.$route.params.product;
  },
  async beforeMount() {
    let product = this.$route.params.product;
    const res = await HTTP.get(`/Atributos${product}/GetAll`);

    this.attributes = res.data;
    for (const attr of this.attributes) {
      this.data[attr.Nombre] = ''
    }
  },
  async mounted() {
    
    TweenMax.from(this.$refs.title, 2, {
      yPercent: -20,
      opacity: 0
    })

    // const canvas = document.querySelector('#canvas');
    // const renderer = new THREE.WebGLRenderer({canvas});

    // const fov = 45;
    // const aspect = 2;  // the canvas default
    // const near = 0.1;
    // const far = 100;
    // const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    // camera.position.set(0, 10, 20);

    // const controls = new THREE.OrbitControls(camera, canvas);
    // controls.target.set(0, 5, 0);
    // controls.update();

    // const scene = new THREE.Scene();
    // scene.background = new THREE.Color('black');

    // {
    //   const planeSize = 40;

    //   const loader = new THREE.TextureLoader();
    //   const texture = loader.load('https://threejsfundamentals.org/threejs/resources/images/checker.png');
    //   texture.wrapS = THREE.RepeatWrapping;
    //   texture.wrapT = THREE.RepeatWrapping;
    //   texture.magFilter = THREE.NearestFilter;
    //   const repeats = planeSize / 2;
    //   texture.repeat.set(repeats, repeats);

    //   const planeGeo = new THREE.PlaneBufferGeometry(planeSize, planeSize);
    //   const planeMat = new THREE.MeshPhongMaterial({
    //     map: texture,
    //     side: THREE.DoubleSide,
    //   });
    //   const mesh = new THREE.Mesh(planeGeo, planeMat);
    //   mesh.rotation.x = Math.PI * -.5;
    //   scene.add(mesh);
    // }

    // {
    //   const skyColor = 0xB1E1FF;  // light blue
    //   const groundColor = 0xB97A20;  // brownish orange
    //   const intensity = 1;
    //   const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
    //   scene.add(light);
    // }

    // {
    //   const color = 0xFFFFFF;
    //   const intensity = 1;
    //   const light = new THREE.DirectionalLight(color, intensity);
    //   light.position.set(0, 10, 0);
    //   light.target.position.set(-5, 0, 0);
    //   scene.add(light);
    //   scene.add(light.target);
    // }

    // {
    //   const objLoader = new OBJLoader2();
    //   objLoader.load('https://threejsfundamentals.org/threejs/resources/models/windmill/windmill.obj', (event) => {
    //     const root = event.detail.loaderRootNode;
    //     scene.add(root);
    //   });
    // }

    // function resizeRendererToDisplaySize(renderer) {
    //   const canvas = renderer.domElement;
    //   const width = canvas.clientWidth;
    //   const height = canvas.clientHeight;
    //   const needResize = canvas.width !== width || canvas.height !== height;
    //   if (needResize) {
    //     renderer.setSize(width, height, false);
    //   }
    //   return needResize;
    // }

    // function render() {

    //   if (resizeRendererToDisplaySize(renderer)) {
    //     const canvas = renderer.domElement;
    //     camera.aspect = canvas.clientWidth / canvas.clientHeight;
    //     camera.updateProjectionMatrix();
    //   }

    //   renderer.render(scene, camera);

    //   requestAnimationFrame(render);
    // }

    // requestAnimationFrame(render);
  },
  methods: {
    async requestPricing() {
      // this.$refs.modal.toggleModal();
      this.showMessage = !this.showMessage;
      let dataRequest = {}

      for (const key in this.data) {
        dataRequest[key.replace(/ /g, '')] = this.data[key];
      }

      dataRequest.NombreUsuario = 'Heyner';
      dataRequest.CorreoElectronico = 'hsmarta@unal.edu.co';

      let furniture = this.$route.params.product;
      const res = await HTTP.post(`/${furniture}/Create`, dataRequest);
      console.log(res);
    },
    triggerModal() {
      this.$refs.modal.toggleModal();
    },
    generateOptions(str) {
      let elements = str.split(',');
      return elements.map(elem => {
        let baseObj = { 'label': elem, 'value': elem };

        if (elem.includes('Oak'))    baseObj.bgColor = '#CBA078';
        if (elem.includes('Cherry')) baseObj.bgColor = '#BC3B4D';
        if (elem.includes('Walnut')) baseObj.bgColor = '#6A4332';

        return baseObj;
      });
    }
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

.modal__thanks {
  white-space: pre-line;
  flex-flow: column;
  color: white;
  padding: 30px;
}

.form {
  div {
    flex-basis: 400px;
  }
}

</style>