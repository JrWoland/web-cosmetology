<template>
  <section class="hero-section">
    <div class="hero-section__titles">
      <h1 class="hero-section__title">Essence of natural <br />Beauty</h1>
      <p class="hero-section__subtitle">
        Together creeping <br />
        heaven upon third dominion be upon.
      </p>
      <div class="hero-section__button">
        <MainButton button-content="services" />
      </div>
    </div>
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
  background-image: url('../assets/png/hero-woman.png');
  background-size: contain;
  background-position-x: right;
  background-position-y: bottom;
  background-repeat: no-repeat;
  color: $font-color;
  height: calc(100vh - #{$header-height});
  padding: 0 $main-gap 0;
  &__titles {
    position: absolute;
    top: 60px;
    left: $main-gap;
  }
  &__title {
    font-family: $main-font;
    font-size: $hero-font;
    line-height: $hero-font;
    font-weight: 400;
  }
  &__subtitle {
    margin-top: 40px;
    font-family: $second-font;
    font-size: $medium-font;
    line-height: 50px;
  }
  &__button {
    margin-top: 50px;
  }
}
</style>
