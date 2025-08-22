<template>
  <div class="card">
    <video
      :src="video"
      autoplay
      loop
      playsinline
      muted
      class="card__img"
    ></video>
    <h3 class="card__title">{{ title }}</h3>
    <p class="card__description">
      {{ description }}
    </p>
    <NuxtLink :to="{ params: { service: path } }">
      <MainButton button-content="czytaj więcej" size="small" />
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import MainButton from "./MainButton.vue";

defineProps<{
  video: string;
  title: string;
  shortDescription: string;
  description: string;
  path: string;
}>();
</script>

<script>
export default {
  name: "ServiceCard",
  components: {
    MainButton,
  },
};
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
    font-weight: 700;
    text-align: center;
  }
  &__description {
    font-family: $second-font;
    flex-grow: 1;
    font-size: $mobile-font;
    line-height: 1.5em;
    text-align: left;
    @include for-tablet-landscape {
      font-size: $small-font;
      line-height: 1.5em;
    }
  }
}
</style>
