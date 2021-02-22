<template>
  <div class="card">
    <video :src="img" autoplay loop playsinline muted class="card__img"></video>
    <h3 class="card__title">{{ title }}</h3>
    <p class="card__description">
      {{ longDescription }}
    </p>
    <NuxtLink :to="{ path: `/${path}` }">
      <MainButton button-content="czytaj więcej" size="small" />
    </NuxtLink>
  </div>
</template>

<script>
import MainButton from './MainButton.vue'
export default {
  name: 'ServiceCard',
  components: {
    MainButton
  },
  props: {
    img: {
      type: String,
      default: 'def'
    },
    title: {
      type: String,
      default: 'def'
    },
    shortDescription: {
      type: String,
      default: 'def'
    },
    longDescription: {
      type: String,
      default: 'def'
    },
    path: {
      type: String,
      default: '#'
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  box-shadow: 0px 0px 3px 0px #e6e6e6;
  text-align: left;
  transition: box-shadow 0.3s;
  :nth-child(n) {
    margin-bottom: 20px;
  }
  &:hover {
    box-shadow: 0px 1px 10px 0px #e6e6e6;
  }
  &__img {
    width: 100%;
  }
  &__title {
    font-family: $main-font;
    font-size: $medium-font;
    font-weight: 400;
  }
  &__description {
    font-family: $second-font;
    flex-grow: 1;
    font-size: $small-font;
    line-height: 1.5em;
  }
}
</style>
