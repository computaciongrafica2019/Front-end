<template>
  <div class="modal" ref="modal" :class="{'modal--off': !isActive}">
    <div class="modal__box" ref="modal-box"
      :style="{'width': size != '-1' ? `${size}` : '300px', 'height': size != '-1' ? `${size}` : '300px'}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { TweenMax } from 'gsap/TweenMax';

export default {
  data() {
    return {
      isActive: false
    }
  },
  props: {
    time: {
      type: Number,
      default: 1300
    },
    size: {
      type: String,
      default: '-1'
    }
  },
  methods: {
    triggerModal() {
      console.log("Modal activated");
      let animationTime = this.time / 1000;

      this.isActive = true;
      TweenMax.from(
        this.$refs.modal, animationTime * 0.5, {
          opacity: 0,
          clearProps: 'all'
        }
      )

      TweenMax.from(
        this.$refs['modal-box'], animationTime * 0.6, {
          yPercent: 30,
          clearProps: 'all'
        }
      )

      setTimeout(() => {
        TweenMax.to(
          this.$refs.modal, animationTime * 0.3, {
            opacity: 0,
            clearProps: 'all'
          }
        )

        setTimeout(() => {
          this.isActive = false;
        }, 300);
      }, this.time * 1.5);  
    },
    toggleModal() {
      let animationTime = this.time / 1000;

      if (this.isActive) {
        this.isActive = !this.isActive;

        TweenMax.to(
          this.$refs.modal, animationTime * 0.3, {
            opacity: 0,
            clearProps: 'all'
          }
        )

      } else {
        this.isActive = !this.isActive;

        TweenMax.from(
          this.$refs.modal, animationTime * 0.5, {
            opacity: 0,
            clearProps: 'all'
          }
        )
      }
        
    }
  }
}
</script>

<style lang="scss" scoped>

.modal--off {
  display: none;
}

.modal {
  width: 100vw;
  height: 100vh;
  background: rgba(black, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}

.modal__box {
  @include squared(300px);
  @extend %absoluteCentered;
  background: $color-orange;
}

</style>
