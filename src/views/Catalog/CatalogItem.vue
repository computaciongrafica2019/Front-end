<template>
  <div class="catalog-item">
    <div class="catalog__image">
      <slot></slot>
      <div class="catalog__image__title">
        <router-link
          tag="span"
          :to="{path: toRoute}">{{ title }}</router-link>
      </div>
    </div>

    <div class="catalog__description">
      <div class="catalog__description__title">{{ subtitle }}</div>

      <div class="catalog__description__row">
        <div class="catalog__description__th">Colors</div>
        <div class="catalog__description__td">{{ colors }}</div>
      </div>
      <div class="catalog__description__row">
        <div class="catalog__description__th">Description</div>
        <div class="catalog__description__td">{{ description }}</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'No title'
    },
    subtitle: {
      type: String,
      default: 'No subtitle'
    },
    colors: {
      type: String,
      default: 'Iron, Metal and Battery'
    },
    description: {
      type: String,
      default: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
    },
    toRoute: {
      type: String,
      default: '/catalog/table'
    }
  }
}
</script>

<style lang="scss" scoped>

.catalog-item {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  flex: 1 1 390px;
  margin: 10px;
}

.catalog__image {
  height: 300px;
  position: relative;
  cursor: pointer;

  img {
    @include squared(100%);
    object-fit: cover;
  }

  &:after {
    content: '';
    top: 0;
    left: 0;
    position: absolute;
    @include squared(100%);
    background: rgba(black, 0.5);
    z-index: 1;
    transition: 0.3s;
  }

  &:hover:after {
    background: rgba(black, 0.2);
  }
}

.catalog__image__title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 36px;
  color: white;
  text-decoration: underline;
  line-height: 44px;
  text-decoration-color: $color-orange;
  z-index: 2;
}

.catalog__description {
  margin-top: 30px;
  max-width: 450px;
  color: $color-gray;
}

.catalog__description__title {
  font-size: 24px;
  color: white;
  font-weight: bold;
  margin-bottom: 25px;
}

.catalog__description__row {
  font-weight: bolder;
  margin: 10px 0;
  padding: 10px 0;
  border-bottom: 1px solid $color-gray;
  display: flex;
  min-width: 380px;
}

.catalog__description__th {
  text-transform: uppercase;
  flex: 0 1 180px;
}

.catalog__description__td {
  font-weight: lighter;
  flex: 1 1;
}

</style>
