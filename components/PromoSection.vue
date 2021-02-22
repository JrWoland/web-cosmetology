<template>
  <section id="promo-section" class="promo-section">
    <div class="promo-section__titles">
      <h2 class="promo-section__head promo-section--item-gap">
        O MNIE
      </h2>
      <figure class="promo-section--item-gap">
        <img
          class="promo-section__about-me-img"
          src="~/assets/jpg/about-me-img.jpg"
          alt="Trulli"
        />
      </figure>
      <p class="promo-section__subtitle promo-section--item-gap">
        Magister kosmetologii, absolwentka Uniwersytetu Medycznego w
        Białymsotku. Od kilku lat konsekwentnie dostarczam najwyższej jakości
        usługi z zakresu zabiegów odmładzających, stylizacji rzęs oraz makijażu
        permanentnego brwi.
      </p>
      <SocialMedia />
    </div>
  </section>
</template>

<script>
import SocialMedia from '~/components/SocialMedia.vue'
export default {
  name: 'PromoSection',
  components: { SocialMedia }
}
</script>

<style lang="scss" scoped>
.promo-section {
  text-align: center;
  color: $font-color;
  padding: 0 $mobile-gap 0;
  margin: 2em 0;
  min-height: 60vh;
  $second-background-color: #ffb7000b;
  @include for-tablet-landscape {
    padding: 0 $desktop-gap 0;
  }
  &__titles {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    padding: 20px 0;
  }

  &__about-me-img {
    width: 200px;
    border-radius: 150px;
  }

  &--item-gap {
    margin-top: 25px;
  }
  &__head {
    font-family: $second-font;
    font-size: $medium-font;
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
