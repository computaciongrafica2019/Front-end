<template>
  <router-link class="wrapper" tag="div" :to="{name: toRoute}">
    <div class="content hlp__img-cover">
      <slot></slot>
    </div>

    <div class="label">
      {{ label }}
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    toRoute: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>

.wrapper {
  @include squared(90px);
  position: relative;
  cursor: pointer;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(black, 0.19);
  }

  &:first-child {
    border-top: 1px solid rgba(black, 0.19);
  }
}

.content {
  @include squared(37%);
  @include absoluteAdjust();

  svg {
    @include squared(100%);
  }
}

.label {
  display: flex;
  align-items: center;
  justify-content: center;
  @include squared(calc(100% + 1px));
  background: $color-orange;
  transition: 0.3s;
  position: absolute;
  opacity: 0;
  color: white;
  font-weight: bolder;
  text-transform: uppercase;
  font-size: 13px;

  &:hover {
    opacity: 1;
  }
}

</style>
