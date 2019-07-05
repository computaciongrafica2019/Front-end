<template>
  <div id="app">
    <div class="layout">
    <div class="title" ref="title">COMGRA</div>
    <div class="main-content">
      <router-view></router-view>
    </div>

    <div class="menu">
      <menu-component></menu-component>
    </div>
  </div>
  </div>
</template>

<script>
import MenuComponent from './components/Menu.vue';
import {TweenLite, Power2, Elastic, TimelineLite} from "gsap/TweenMax";

export default {
  components: {
    MenuComponent
  },
  mounted() {
    let title = this.$refs.title;

    TweenLite
      .from(title, 1, {
        left: '-100px',
        opacity: 0
      });
  }
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+HK:700&display=swap');

html, body {
  margin: 0;
  padding: 0;
  font-family: 'Noto Sans HK', sans-serif;
}

* {
  box-sizing: border-box;
}

.layout {
  display: flex;
  overflow: hidden;
}

.main-content {
  width: calc(100vw - 90px);
  height: 100vh;
  overflow: auto;
}

.menu {
  flex: 0 1;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.spacer {
  width: 100vw;
  height: 200vh;
}

.title {
  font-size: 42px;
  color: $color-orange;
  position: fixed;
  top: 5%;
  left: 5%;
  font-weight: bold;
  z-index: 2;
}

.title--simple {
  color: $color-orange;
  font-size: 36px;
  font-weight: bold;
}

</style>
