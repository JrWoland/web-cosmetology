<template>
  <section
    class="hero-section"
    data-aos="fade-in"
    data-aos-duration="1000"
    data-aos-delay="100"
  >
    <div
      class="hero-section__titles"
      data-aos="fade-in"
      data-aos-duration="1000"
      data-aos-delay="700"
    >
      <header>
        <h1 class="hero-section__title">Profesjonalne zabiegi</h1>
        <h1 class="hero-section__subtitle">
          <ul class="hero-section__list">
            <li class="hero-section__list__item">Modelowanie ust</li>
            <li class="hero-section__list__item">Makijaż permanentny brwi</li>
            <li class="hero-section__list__item">Stylizacja rzęs</li>
            <li class="hero-section__list__item">
              Zabiegi estetyczne i pielęgnacyjne
            </li>
          </ul>
        </h1>
      </header>
      <NuxtImg
        @click="isActive = false"
        class="hero-section__logo-img"
        src="/png/logo.png"
        alt="logo gabinetu"
      />
    </div>
    <NuxtImg
      class="hero-section__img"
      src="/png/avatar-angela-mid.png"
      alt="Women avatar"
      data-aos="fade-in"
      data-aos-duration="1000"
      data-aos-delay="1000"
    />
  </section>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style lang="scss" scoped>
.hero-wrapper {
  @include for-tablet-landscape {
    // margin: 15px 100px 0;
  }
}
.hero-section {
  @include glassmorph;
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
  &__list {
    padding: 0;
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
    // @include glassmorph;
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
