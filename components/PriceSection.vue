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
          <li>
            <span class="price-section__service-subtype">metoda 2d</span
            ><span class="price-section__service-price">110zł (80zł)</span>
          </li>
          <li>
            <span class="price-section__service-subtype">metoda 3d</span
            ><span class="price-section__service-price">130zł (100zł)</span>
          </li>
          <li>
            <span class="price-section__service-subtype">metoda 4/6d</span
            ><span class="price-section__service-price">150zł (120zł)</span>
          </li>
          <li>
            <span class="price-section__service-subtype">metoda 5/8d</span
            ><span class="price-section__service-price">160zł (130zł)</span>
          </li>
          <li>
            <span class="price-section__service-subtype">Mega Volume</span
            ><span class="price-section__service-price">180zł (140zł)</span>
          </li>
        </ul>
      </div>
      <div class="price-section__service">
        <p class="price-section__title">Mikrodermabracja</p>
        <ul>
          <li>
            <span class="price-section__service-subtype">diamentowa</span
            ><span class="price-section__service-price">90zł</span>
          </li>
          <li>
            <span class="price-section__service-subtype"
              >diamentowa + kwas</span
            >
            <span class="price-section__service-price">130zł</span>
          </li>
        </ul>
      </div>
      <div class="price-section__service">
        <p class="price-section__title">Peeling kawitacyjny</p>
        <ul>
          <li>
            <span class="price-section__service-subtype">maska algowa</span>
            <span class="price-section__service-price">80zł</span>
          </li>
          <li>
            <span class="price-section__service-subtype">
              sonoforeza + maska algowa</span
            >
            <span class="price-section__service-price">130zł</span>
          </li>
        </ul>
      </div>
      <div class="price-section__service">
        <p class="price-section__title">Makijaż permanentny brwi</p>
        <ul>
          <li>
            <span class="price-section__small-subtitle"
              >(korekta do 3 mscy bezpłatna)</span
            ><span class="price-section__service-price">600zł</span>
          </li>
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
  text-align: left;
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
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  }

  &__service {
    @include box-shadow;
    margin: 1em;
    display: flex;
    flex-direction: column;
    padding: 10px;
    font-size: $mobile-font;

    li {
      margin: 5px 0;
    }
    @include for-desktop-up {
      font-size: 14px;
    }
  }

  &__service-subtype {
    display: inline-block;
    width: 48%;
  }
  &__service-price {
    display: inline-block;
    width: 48%;
    text-align: right;
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
