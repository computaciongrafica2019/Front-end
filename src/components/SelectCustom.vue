<template>
  <div class="select-custom" ref="wrapper">
    <div class="input-custom__placeholder">{{ label }} <div class="input-custom--required" v-if="isRequired">*</div></div>

    <div class="icon hlp__container-svg hlp__abs-vertical-align">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="white"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>
    </div>

    <select
      aria-placeholder="Please select"
      ref="selector"
      @change="handleInput"
      v-model="innerValue">

      <option value="" disabled selected>Select your option</option>
      <option
        v-for="(opt) in options"
        :key="opt.label"
        :style="{'backgroundColor': opt.bgColor ? opt.bgColor : '#131313'}"
        :value="opt.value">{{ opt.label }}</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      innerValue: ''
    }
  },
  props: {
    value: {
      type: null
    },
    options: {
      type: Array,
      default: () => []
    },
    isRequired: {
      type: Boolean,
      default: false
    },
    label: {
      type: String
    },
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  methods: {
    handleInput() {
      this.$emit('input', this.innerValue);
    },
    inBounds(x1, y1, t, r, b, l) {
      if (x1 >= l && x1 <= r && y1 >= t && y1 <= b) return true;
      return false;
    }
  },
}
</script>

<style lang="scss" scoped>

select {
  @include squared(100%);
  background: transparent;
  outline: 0;
  border: 0;
  appearance: none;
  cursor: pointer;
  padding: 30px;
  color: white;
  font-size: 17px;
  font-weight: bolder;
}

.select-custom {
  border-radius: 6px;
  background: rgba(black, 0.5);
  color: white;
  height: 130px;
  transition: 0.3s;
  position: relative;
  margin: 1px;
  position: relative;

  &:hover {
    background: rgba(white, 0.3);
  }
}

.icon {
  right: 5%;
  @include squared(40px);

  svg {
    fill: white;
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
