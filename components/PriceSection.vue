<template>
  <section class="price-section">
    <h2>Cennik</h2>
    <div class="price-section__service-types">
      <div class="price-section__service">
        <p class="price-section__title">Rzęsy</p>
        <span class="price-section__small-subtitle">
          (cena w nawiasie dotyczy uzupełnienia)
        </span>
        <ul>
          <li>metoda 2d - <span>110PLN (80PLN)</span></li>
          <li>metoda 3d - <span>130PLN (100PLN)</span></li>
          <li>metoda 4/6d - <span>150PLN (120PLN)</span></li>
          <li>metoda 5/8d - <span>160PLN (130PLN)</span></li>
          <li>Mega Volume - <span>180PLN (140PLN)</span></li>
        </ul>
      </div>
      <div class="price-section__service">
        <p class="price-section__title">Mikrodermabracja</p>
        <ul>
          <li>diamentowa - <span>90PLN</span></li>
          <li>diamentowa + kwas - <span>130PLN</span></li>
        </ul>
      </div>
      <div class="price-section__service">
        <p class="price-section__title">Peeling kawitacyjny</p>
        <ul>
          <li>maska algowa - <span>80PLN</span></li>
          <li>sonoforeza + maska algowa - <span>130PLN</span></li>
        </ul>
      </div>
      <div class="price-section__service">
        <p class="price-section__title">Makijaż permanentny brwi</p>
        <ul>
          <li><span>600PLN</span></li>
          <li><span>korekta do 3 mscy - bezpłatna</span></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PriceSection'
}
</script>

<style lang="scss" scoped>
.price-section {
  text-align: center;
  color: $font-color;
  padding: 0 $mobile-gap 0;
  min-height: 30vh;
  font-family: $second-font;
  @include for-tablet-landscape {
    padding: 0 $desktop-gap 0;
  }

  &__service-types {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  &__service {
    @include box-shadow;
    margin: 1em;
    display: flex;
    flex-direction: column;
    padding: 10px;
    font-size: $mobile-font;
    @include for-desktop-up {
      font-size: 14px;
    }
  }

  &__title {
    font-weight: 700;
    margin: 0.5em 0;
  }

  &__small-subtitle {
    font-size: 10px;
  }
}
</style>
