<template>
  <section class="hero-section">
    <div class="hero-section__titles">
      <header>
        <h1 class="hero-section__title">Profesjonalne zabiegi</h1>
        <h1 class="hero-section__subtitle">
          <ul class="hero-section__list">
            <li class="hero-section__list__item">Makijaż permanentny brwi</li>
            <li class="hero-section__list__item">Stylizacja rzęs</li>
            <li class="hero-section__list__item">Zabiegi pielęgnacyjne</li>
          </ul>
        </h1>
      </header>
      <img
        @click="isActive = false"
        class="hero-section__logo-img"
        src="~/assets/png/logo.png"
        alt="logo gabinetu"
      />
      <div class="hero-section__button">
        <MainButton button-content="więcej" />
      </div>
    </div>
    <img
      class="hero-section__img"
      src="../assets/png/avatar-angela-mid.png"
      alt="Women avatar"
    />
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
  height: calc(120vh - #{$header-height});
  min-height: min-content;
  width: 100%;
  overflow: hidden;
  text-align: center;
  @include for-phone-landscape {
    height: fit-content;
    min-height: fit-content;
  }
  @include for-tablet-landscape {
    height: calc(100vh - #{$header-height});
    flex-direction: row;
    justify-content: space-between;
    padding: 0 $desktop-gap 0;
  }
  &__logo-img {
    width: 200px;
    @include for-tablet-landscape {
      width: 20vw;
    }
  }
  &__titles *:nth-child(n) {
    margin-top: 1vh;
  }
  &__titles {
    @include for-tablet-landscape {
      text-align: center;
      max-width: 50vw;
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
    font-weight: 400;
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
    transform: translate(0px, 30px);
    width: 85vw;
    @include for-tablet-landscape {
      position: absolute;
      right: 10px;
      width: 40vw;
      transform: translate(0, 0);
    }
  }
}
</style>
