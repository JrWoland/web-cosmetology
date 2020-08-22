<template>
  <section class="hero-section">
    <div class="hero-section__titles">
      <h1 class="hero-section__title">
        Essence of natural
        <br />Beauty
      </h1>
      <p class="hero-section__subtitle">
        Together creeping heaven upon
        <br />third dominion be upon.
      </p>
      <div class="hero-section__button">
        <MainButton button-content="services" />
      </div>
    </div>
    <img class="hero-section__img" src="../assets/png/hero-image.png" alt />
  </section>
</template>

<script>
import MainButton from './MainButton'
export default {
  name: 'HeroSection',
  components: {
    MainButton
  }
}
</script>

<style lang="scss" scoped>
.hero-section {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: $font-color;
  padding: 0 $mobile-gap 0;
  height: calc(100vh - #{$header-height});
  width: 100%;
  overflow: hidden;
  text-align: center;
  @include for-phone-landscape {
    height: fit-content;
    min-height: fit-content;
  }
  @include for-tablet-landscape {
    padding: 0 $desktop-gap 0;
  }
  &__titles *:nth-child(n) {
    margin-top: 4vh;
  }
  &__titles {
    @include for-tablet-landscape {
      margin-top: 40px;
      text-align: left;
      align-self: flex-start;
    }
  }
  &__title {
    font-family: $main-font;
    font-size: $large-font;
    line-height: 40px;
    font-weight: 400;
    @include for-tablet-landscape-up {
      font-size: $big-font;
      line-height: $big-font;
    }
    @include for-desktop-up {
      font-size: $hero-font;
      line-height: $hero-font;
    }
  }
  &__subtitle {
    margin-top: 40px;
    font-family: $second-font;
    font-size: $small-font;
    line-height: 20px;
    @include for-tablet-landscape-up {
      font-family: $second-font;
      font-size: $medium-font;
      line-height: 50px;
    }
  }
  &__button {
    margin-top: 20px;
  }
  &__img {
    transform: translate(-192px, -180px) scale(0.5);
    z-index: -1;
    @include for-tablet-landscape {
      position: absolute;
      bottom: 20px;
      width: 100vw;
      transform: translate(0, 0) scale(1.2);
    }
  }
}
</style>
