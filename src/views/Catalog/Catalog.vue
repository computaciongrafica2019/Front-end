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
        <!-- <img :src="`../../../public/img_furnitures/${furniture['Ruta_de_una_imagen']}`" alt=""> -->
        <img :src="`../../assets/src_furnitures/${furniture['Ruta_de_una_imagen']}`">
        <!-- <img :src="`../../../public/img_furnitures/MuebleLavadero.png`"> -->
        <!-- <img src="../../assets/src_furnitures/MuebleLavadero.png" alt=""> -->
        {{  }}
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
  async mounted() {
    TweenMax
      .staggerFrom('.catalog-item', 1, {
        scale: 0.8, yPercent: -20, opacity:0, delay:1, ease: Power2.easeOut
      }, 0.5)

    const res = await HTTP.get('/Mueble/GetAll');
    this.furnitureList = res.data.slice(0, 6);
    console.log(this.furnitureList);
  }
}
</script>

<style lang="scss" scoped>

.catalog__container {
  display: flex;
  flex-flow: row wrap;
}

</style>
