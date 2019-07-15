<template>
  <div class="input-custom">
    <div class="input-custom__placeholder">{{ label }} <div class="input-custom--required" v-if="isRequired">*</div></div>
    <input :type="type" name="" id="" :value="value" @input="handleInput">
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: null
    },
    label: {
      type: String
    },
    isRequired: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  methods: {
    handleInput() {
      this.$emit('input', this.innerValue);
    }
  }
}
</script>

<style lang="scss" scoped>

.input-custom {
  border-radius: 6px;
  background: rgba(black, 0.5);
  color: white;
  height: 130px;
  transition: 0.3s;
  position: relative;
  margin: 1px;

  &:hover {
    background: rgba(white, 0.3);
  }

  input[type="text"], input[type="email"], input[type="password"] {
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
