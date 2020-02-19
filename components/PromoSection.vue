<template>
  <section class="promo-section">
    <div class="promo-section__titles">
      <h2 class="promo-section__head promo-section--item-gap">ABOUT</h2>
      <h1 class="promo-section__title promo-section--item-gap">
        Come and you will be Inspired!
      </h1>
      <p class="promo-section__subtitle promo-section--item-gap">
        It’s the end of summer the sweltering heat makes human sweat in the
        night and makes the plants and trees wilt even in the moonlit nights.
        The eastern wind breeze brings an eerie feeling, that the monsoon clouds
        are soon coming,
      </p>
      <div class="promo-section__button promo-section--item-gap">
        <MainButton button-content="read more" />
      </div>
    </div>
  </section>
</template>

<script>
import MainButton from './MainButton'
export default {
  name: 'PromoSection',
  components: {
    MainButton
  }
}
</script>

<style lang="scss" scoped>
.promo-section {
  text-align: center;
  color: $font-color;
  padding: 0 $mobile-gap 0;
  @include for-tablet-landscape {
    padding: 0 $desktop-gap 0;
  }
  &__titles {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
  }
  &--item-gap {
    margin-top: 25px;
  }
  &__head {
    font-family: $second-font;
    font-size: $small-font;
    line-height: $medium-font;
    font-weight: 300;
    text-transform: uppercase;
    @include for-tablet-landscape {
      font-size: $medium-font;
      line-height: $medium-font;
    }
  }
  &__title {
    font-family: $main-font;
    font-size: $medium-font;
    line-height: $medium-font;
    font-weight: 400;
    @include for-tablet-landscape {
      font-size: $large-font;
      line-height: $large-font;
    }
    @include for-desktop-up {
      font-size: $big-font;
      line-height: $big-font;
    }
  }
  &__subtitle {
    font-family: $second-font;
    font-size: $mobile-font;
    line-height: 1.5em;
    @include for-tablet-landscape {
      font-size: $small-font;
    }
    @include for-desktop-up {
      line-height: 2em;
    }
  }
}
</style>
