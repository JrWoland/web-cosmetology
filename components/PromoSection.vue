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
        Cześć! Mam na imię Angelika i chciałabym zostać Twoim Kosmetologiem
        <br />
        Jestem absolwentką Uniwersytetu Medycznego w Białymstoku, ukończyłam
        wyższe studia magisterskie na kierunku Kosmetologia. Poza główną wiedzą
        zdobytą na studiach, konsekwentnie od początku swojej przygody z
        Kosmetologią, uczestniczę w różnego rodzaju szkoleniach z tej dziedziny.
        Moim konikiem zawodowym jest stylizacja rzęs, w której obracam się
        aktywnie od ok. 3 lat. Pasjonuję się również w stylizacji brwi – w mojej
        ofercie znajdziesz usługi takie jak: makijaż permanentny czy henna
        pudrowa. Na bieżąco doszkalam się także w dziedzinie pielęgnacji skóry i
        poszerzam ofertę o zabiegi pielęgnacyjne. Pracuję wyłącznie na
        profesjonalnych i wysokojakościowych produktach. Przy każdym zabiegu,
        wnikliwie staram się określić Twoje oczekiwania i sprostować im na
        najwyższym poziomie, tak abyś zawsze wychodziła ode mnie zadowolona.
        Zapraszam do kontaktu.
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
  background-color: $second-background-color;
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
    text-align: justify;
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
