<template>
  <div class="lino">
    <div class="lino__content">
      <div class="title--simple" style="margin-top: 30px;">Lino</div>
      <br />
      <br />
      <h1 style="font-size:20px;">Altura</h1>
      <div class="range-slider">
        <span id="rs-bullet1" class="rs-label">200</span>
        <input
          id="rs-range-line1"
          class="rs-range"
          type="range"
          value="200"
          min="200"
          max="500"
          step="10"
        />
      </div>
      <h1 style="font-size:20px;">Ancho</h1>
      <div class="range-slider">
        <span id="rs-bullet2" class="rs-label">200</span>
        <input id="rs-range-line2" class="rs-range" type="range" value="200" min="200" max="500" />
      </div>
      <h1 style="font-size:20px;">Profundidad</h1>
      <div class="range-slider">
        <span id="rs-bullet3" class="rs-label">200</span>
        <input id="rs-range-line3" class="rs-range" type="range" value="200" min="200" max="500" />
      </div>
      <form action method="post"></form>
      <select>
        <option value="Dos iguales">Dos iguales</option>
        <option value="Una ancha y una angosta">Una ancha y una angosta</option>
      </select>
    </div>
  </div>
</template>

<script>
import SliderCustom from "../components/SliderCustom.vue";
export default {
  components: {
    SliderCustom
  },
  mounted() {
    let rangeSlider1 = document.getElementById("rs-range-line1");
    let rangeBullet1 = document.getElementById("rs-bullet1");
    let rangeSlider2 = document.getElementById("rs-range-line2");
    let rangeBullet2 = document.getElementById("rs-bullet2");
    let rangeSlider3 = document.getElementById("rs-range-line3");
    let rangeBullet3 = document.getElementById("rs-bullet3");

    rangeSlider1.addEventListener("input", showSliderValue1, false);
    rangeSlider2.addEventListener("input", showSliderValue2, false);
    rangeSlider3.addEventListener("input", showSliderValue3, false);

    function showSliderValue1() {
      rangeBullet1.innerHTML = rangeSlider1.value;

      let bulletPosition =
        (rangeSlider1.value - rangeSlider1.min) /
        (rangeSlider1.max - rangeSlider1.min);


			let tempSize = document.getElementsByClassName('range-slider')[0].querySelector('input');
			console.log(tempSize.getBoundingClientRect().width);

      rangeBullet1.style.left = `calc(${bulletPosition * tempSize.getBoundingClientRect().width - bulletPosition * 22}px)`;
      console.log(bulletPosition);
    }
    function showSliderValue2() {
      rangeBullet2.innerHTML = rangeSlider2.value;

      let bulletPosition =
        (rangeSlider2.value - rangeSlider2.min) /
        (rangeSlider2.max - rangeSlider2.min);
      rangeBullet2.style.left = bulletPosition * 478 + "px";
    }
    function showSliderValue3() {
      rangeBullet3.innerHTML = rangeSlider3.value;

      let bulletPosition =
        (rangeSlider3.value - rangeSlider3.min) /
        (rangeSlider3.max - rangeSlider3.min);
      rangeBullet3.style.left = bulletPosition * 478 + "px";
    }
  }
};
</script>


<style lang="scss" scoped>
.lino {
  background: #2a2a2a;
  min-height: 100vh;
  padding: 8%;
  position: relative;

  &::after {
    content: "";
    @include squared(100%);
    background: url("../assets/reference/fachada_home.jpg");
    filter: blur(3px) grayscale(70%);
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
  }

  &::before {
    content: "";
    @include squared(100%);
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(20, 20, 20, 0.8);
    z-index: 2;
  }
}
.lino__content {
  font-size: 18px;
  z-index: 3;
  width: 20%;
  color: white;
  position: relative;
  font-weight: normal;
}

.box-minmax {
  margin-top: 5px;
  width: 608px;
  display: flex;
  justify-content: space-between;
  font-size: 15x;
  color: #ffffff;
  span:first-child {
    margin-left: 10px;
  }
}
.range-slider {
  margin-bottom: 50px;
}
.rs-range {
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
    cursor: pointer;
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
