<template>
  <div class="modal">

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.modal {
  width: 100vw;
  height: 100vh;
  background: rgba(black, 0.6);
  position: fixed;
  top: 0;
  left: 0;
}

.modal__box {
  @include squared(300px);
  @extend %absoluteCentered;
  background: white;
}

</style>
