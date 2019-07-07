<template>
    <div class="catalog">
        <div class="catalog__content">
        <!-- <div class="title--simple" style="margin-top: 30px;">
            Register now
        </div> -->
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. In ipsum eius corrupti, ipsa, tempora provident excepturi, quod totam nobis a quisquam laboriosam architecto est!

        <!-- <div class="form">
            <input-custom
            label="Name"
            :isRequired="true"></input-custom>
            <input-custom
            label="Last name"
            :isRequired="true"></input-custom>
            <input-custom
            label="Last name"
            :isRequired="true"></input-custom>
        </div> -->
        <Furniture
        toRoute="home"
        label="Home"
        nameFurniture="Lino"></Furniture>
    </div>
    </div>
</template>

<script>
import Furniture from '../components/Furniture.vue';
export default {
    components: {
        Furniture
    }
}
</script>



<style lang="scss" scoped>
.catalog {
  background: #2A2A2A;
  min-height: 100vh; 
  padding: 8%;
  position: relative;

  &::after {
    content: '';
    @include squared(100%);
    background: url('../assets/reference/fachada_home.jpg');
    filter: blur(3px) grayscale(70%);
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;    
  }

  &::before {
    content: '';
    @include squared(100%);
    position: absolute;
    top: 0;
    left: 0;    
    background: rgba(20, 20, 20, 0.8);
    z-index: 2;
  }
  .catalog__content {
    font-size: 18px; 
    z-index: 3;
    color: white;
    position: relative; 
    font-weight: normal;
  }   
}
</style>