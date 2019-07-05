<template>
  <div class="input-custom">
    <div class="input-custom__placeholder">{{ label }} <div class="input-custom--required" v-if="isRequired">*</div></div>
    <input type="text" name="" id="">
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String
    },
    isRequired: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>

.input-custom {
  border-radius: 6px;
  background: rgba(black, 0.5);
  color: white;
  height: 150px;
  transition: 0.3s;
  position: relative;
  margin: 3px;

  &:hover {
    background: rgba(white, 0.3);
  }

  input {
    @include squared(100%);
    background: transparent;
    border: 0;
    outline: 0;
    color: inherit;
    font-size: 17px;
    padding: 0 30px;
    font-weight: bolder;
  }
}

.input-custom--required {
  display: inline-block;
  color: $color-orange;
  margin: 0 5px;
  font-size: 20px;
}

.input-custom__placeholder {
  top: 20px;
  left: 30px;
  position: absolute;
  font-size: 16px;
}

</style>
