<template>
  <div>
    <div class="home">
      <div class="main hlp__img-cover">
        <img src="../assets/reference/furniture2.jpg" alt="">
        <div class="main__paragraph hlp__abs-vertical-align" ref="pg">
          Lorem ipsum dolor sit amet.
        </div>
      </div>

      <div class="main__products">
        <div class="image__container">
          <div class="main__image">
            <img src="../assets/abc.jpg" alt="">
          </div>
          <div class="main__description">
            <div class="main__title">Mueble 1</div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, maiores!
          </div>
        </div>
        <div class="image__container">
          <div class="main__image">
            <img src="../assets/xd.jpg" alt="">
          </div>
          <div class="main__description">
            <div class="main__title">Mueble 2</div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, maiores!
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {TweenLite, Power2, Elastic, TimelineLite} from "gsap/TweenMax";

export default {
  name: 'home',
  components: {
    
  },
  mounted() {
    let pg = this.$refs.pg;

    TweenLite
      .from(pg, 2, {
        bottom: '400px',
        opacity: 0,
        ease: Elastic.easeOut.config(0.8, 0.3)
      });
  }
}
</script>

<style lang="scss" scoped>

.home {
  display: flex;
  height: 100%;
  overflow: hidden;
  height: 100vh;
}

.main {
  position: relative;
  flex: 1 0;

  &:after {
    top: 0;
    left: 0 ;
    z-index: 1;
    content: '';
    position: absolute;
    @include squared(100%);
    background: rgba(black, 0.4);
  }
}

.main__paragraph {
  font-weight: bold;
  font-size: 42px;
  max-width: 80%;
  color: white;
  left: 5%;
  text-align: left;
  z-index: 2;
  text-decoration: underline;
  text-decoration-color: $color-orange;  
}

.main__products {
  background: black;
  color: white;
  flex: 1 0;
  padding: 30px;
  padding-top: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
}

.image__container {
  max-width: 255px;
  display: flex;
  flex-flow: column nowrap;
}

.main__image {
  height: 392px;
  position: relative;
  // border: 1px solid red;

  &::after {
    position: absolute;
    content: '';
    @include squared(100%);
    z-index: 1;
    background: rgba(black, 0.4);
    top: 0;
    left: 0;
    transition: 0.3s;
    cursor: pointer;
  }

  &:hover:after {
    background: rgba(black, 0.1);
  }

  img {
    @include squared(100%);
    object-fit: cover;
  }
}

.main__title {
  color: white;
  font-weight: bold;
  border-bottom: 1.5px solid $color-orange;
  font-size: 28px;
  padding-bottom: 5px;
  display: inline-block;
  margin-bottom: 7px;
}

.main__description {
  white-space: pre-line;
  color: rgba(white, .7);
  padding: 10px;
  text-align: left;
  line-height: 27px;
}

@media (max-width: 1090px) {
  .home {
    flex-flow: column nowrap;
    overflow-y: auto;
  }

  .main__products {
    flex-flow: row wrap;
  }
}

</style>
