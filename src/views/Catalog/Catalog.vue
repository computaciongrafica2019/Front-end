<template>
  <div class="catalog view__default">
    <div class="title--simple title--centered title--spacer">
      DISCOVER 
      OUR AMAZING
      PRODUCTS
    </div>
    <div class="subtitle title--centered">Discover</div>

    <div class="catalog__container">
      <catalog-item>
        <img src="../../assets/reference/fachada_home.jpg" alt="">
      </catalog-item>
      <catalog-item>
        <img src="../../assets/reference/fachada_home.jpg" alt="">
      </catalog-item>
      <catalog-item>
        <img src="../../assets/reference/fachada_home.jpg" alt="">
      </catalog-item>
      <catalog-item>
        <img src="../../assets/reference/fachada_home.jpg" alt="">
      </catalog-item>
    </div>

  </div>
</template>

<script>
import { TweenMax, Elastic, Power2 } from 'gsap/TweenMax';
import CatalogItem from './CatalogItem.vue'

export default {
  components: {
    CatalogItem
  },
  mounted() {
    TweenMax
      .staggerFrom('.catalog-item', 1, {
        scale: 0.8, yPercent: -20, opacity:0, delay:1, ease: Power2.easeOut
      }, 0.7)
  }
}
</script>

<style lang="scss" scoped>

.catalog__container {
  display: flex;
  flex-flow: row wrap;
}

</style>
