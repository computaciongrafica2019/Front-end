<template>
  <div class="range-custom">
    <div class="input-custom__placeholder">{{ label }} <div class="input-custom--required" v-if="isRequired">*</div></div>
    
    <div class="range-slider">
      <div
        style="text-align: center">{{ `${innerValue} ${unit}` }}</div>
      <input
        v-model="innerValue"
        ref="rsRangeLine"
        class="rs-range"
        type="range"
        :min="minVal"
        :max="maxVal"
        :step="step"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      innerValue: 0
    };
  },
  props: {
    value: {
      type: null
    },
    minVal: {
      type: Number
    },
    maxVal: {
      type: Number
    },
    step: {
      type: Number,
      default: 1
    },
    isRequired: {
      type: Boolean,
      default: false
    },
    unit: {
      type: String,
      default: 'cm'
    },
    label: {
      type: String
    }
  },
  model: {
    prop: "value",
    event: "input"
  },
  methods: {
    handleInput() {
      this.$emit("input", this.innerValue);
    }
  },
  mounted() {
    // this.$refs.rsRangeLine.addEventListener('input', () => {
    //   let circle = this.$refs.rsBullet;
    //   let bulletPosition =
    //     (this.innerValue - this.minVal) /
    //     (this.maxVal - this.minVal);
    //   let tempSize = this.$refs.rsRangeLine.getBoundingClientRect().width;
    //   circle.style.left = `${bulletPosition * tempSize - bulletPosition * 22}px`;
    // })
  }
};
</script>

<style lang="scss" scoped>
.range-custom {
  border-radius: 6px;
  background: rgba(black, 0.5);
  color: white;
  height: 130px;
  transition: 0.3s;
  position: relative;
  margin: 1px;
  padding: 0 30px;

  &:hover {
    background: rgba(white, 0.3);
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


// Basural

.range-slider {
  position: relative;
  margin-top: 60px;
  
}
.rs-range {
  width: 100%;
  margin-top: 15px;
  -webkit-appearance: none;
  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 1px;
    cursor: pointer;
    box-shadow: none;
    background: #ffffff;
    border-radius: 0px;
    border: 0px solid #010101;
  }
  &::-moz-range-track {
    width: 100%;
    height: 1px;
    cursor: pointer;
    box-shadow: none;
    background: #ffffff;
    border-radius: 0px;
    border: 0px solid #010101;
  }

  &::-webkit-slider-thumb {
    box-shadow: none;
    border: 0px solid #ffffff;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
    height: 22px;
    width: 22px;
    border-radius: 22px;
    background: rgba(255, 255, 255, 1);
    cuorsor: pointer;
    -webkit-appearance: none;
    margin-top: -10px;
  }
  &::-moz-range-thumb {
    box-shadow: none;
    border: 0px solid #ffffff;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
    height: 42px;
    width: 22px;
    border-radius: 22px;
    background: rgba(255, 255, 255, 1);
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -20px;
  }
  &::-moz-focus-outer {
    border: 0;
  }
}
.rs-label {
  position: relative;
  transform-origin: center center;
  display: block;
  width: 58px;
  height: 58px;
  background: transparent;
  border-radius: 50%;
  line-height: 30px;
  text-align: center;
  font-weight: bold;
  padding-top: 20px;
  box-sizing: border-box;
  border: 2px solid #fff;
  margin-top: 20px;
  margin-left: -18px;
  left: attr(value);
  color: #fff;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 16px;
  &::after {
    display: block;
    font-size: 20px;
    letter-spacing: 0.07em;
    margin-top: -2px;
  }
}
</style>
