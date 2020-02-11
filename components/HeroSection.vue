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
    <img class="hero-section__img" src="../assets/png/hero-image.png" alt="" />
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
  color: $font-color;
  padding: 0 $mobile-gap 0;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  text-align: center;
  &__titles *:nth-child(n) {
    margin-top: 4vh;
  }
  &__title {
    font-family: $main-font;
    font-size: $medium-font;
    line-height: 40px;
    font-weight: 400;
  }
  &__subtitle {
    margin-top: 40px;
    font-family: $second-font;
    font-size: $small-font;
    line-height: 20px;
  }
  &__button {
    margin-top: 20px;
  }
  &__img {
    position: absolute;
    bottom: 0;
    right: -40%;
    width: 280%;
    @include for-phone-portrait-up {
      bottom: -20px;
      right: -30%;
      width: 250%;
    }
  }
}
// .hero-section {
//   position: relative;
//   background-size: contain;
//   background-position-x: right;
//   background-position-y: bottom;
//   background-repeat: no-repeat;
//   color: $font-color;
//   padding: 0 $desktop-gap 0;
//   &__titles {
//     position: absolute;
//     top: 60px;
//     left: $desktop-gap;
//   }
//   &__title {
//     font-family: $main-font;
//     font-size: $hero-font;
//     line-height: $hero-font;
//     font-weight: 400;
//   }
//   &__subtitle {
//     margin-top: 40px;
//     font-family: $second-font;
//     font-size: $medium-font;
//     line-height: 50px;
//   }
//   &__button {
//     margin-top: 50px;
//   }
// }
</style>
