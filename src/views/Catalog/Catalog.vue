<template>
  <div class="catalog view__default">
    <div class="title--simple title--centered title--spacer">
      DISCOVER 
      OUR AMAZING
      PRODUCTS
    </div>
    <div class="subtitle title--centered">Discover</div>

    <div class="catalog__container">
      <catalog-item
        v-for="furniture in furnitureList"
        :key="furniture.IdMueble"
        :title="furniture.TipoMueble"
        :subtitle="furniture.TipoMueble"
        :description="furniture.Descripcion"
        :toRoute="'/catalog/' + furniture.TipoMueble + '?'"
        colors="Wood, Cherry and Oak">
        <img
          v-if="furniture.TipoMueble == 'Lavadero'" 
          src="../../assets/srcfurnitures/MuebleLavadero.png">
        <img
          v-if="furniture.TipoMueble == 'Lino'" 
          src="../../assets/srcfurnitures/MuebleLino.png">
        <img
          v-if="furniture.TipoMueble == 'MuebleTV'" 
          src="../../assets/srcfurnitures/MuebleTV.png">
        <img
          v-if="furniture.TipoMueble == 'Vestier'" 
          src="../../assets/srcfurnitures/Vestier.png">
      </catalog-item>
    </div>

  </div>
</template>

<script>
import { TweenMax, Elastic, Power2 } from 'gsap/TweenMax';
import CatalogItem from './CatalogItem.vue'

import { HTTP } from '../../http_common';

export default {
  data() {
    return {
      furnitureList: [] 
    }
  },
  components: {
    CatalogItem
  },
  async beforeMount() {
    const res = await HTTP.get('/Mueble/GetAll');
    this.furnitureList = res.data.slice(0, 6);
    this.furnitureList.forEach(f => {
      f['Ruta_de_una_imagen'] = '@assets/srcfurnitures/' + f['Ruta_de_una_imagen'];
    });

    console.log(this.furnitureList);
  },
  async mounted() {
    TweenMax
      .staggerFrom('.catalog-item', 1, {
        scale: 0.8, yPercent: -20, opacity:0, delay:1, ease: Power2.easeOut
      }, 0.5)
  },
  methods: {
    getPath(name) {
      return require('../../../public/imgfurnitures/' + name);
    }
  }
}
</script>

<style lang="scss" scoped>

.catalog__container {
  display: flex;
  flex-flow: row wrap;
}

</style>
