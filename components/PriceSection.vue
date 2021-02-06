<template>
  <section class="price-section">
    <h2>Cennik</h2>
    <div class="price-section__service-types">
      <div class="price-section__service">
        <p class="price-section__title">Rzęsy</p>
        <ul>
          <li>metoda 2d <span>100PLN</span></li>
          <li>metoda 3d <span>100PLN</span></li>
          <li>metoda 4d <span>100PLN</span></li>
          <li>metoda 5d <span>100PLN</span></li>
        </ul>
      </div>
      <div class="price-section__service">
        <p class="price-section__title">Mikrodermabracja</p>
        <ul>
          <li><span>100PLN</span></li>
        </ul>
      </div>
      <div class="price-section__service">
        <p class="price-section__title">Peeling kawitacyjny</p>
        <ul>
          <li><span>100PLN</span></li>
          <li><span>100PLN</span></li>
          <li><span>100PLN</span></li>
          <li><span>100PLN</span></li>
        </ul>
      </div>
      <div class="price-section__service">
        <p class="price-section__title">Makijaż permanentny brwi</p>
        <ul>
          <li><span>100PLN</span></li>
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 1em;
    padding: 10px;
  }

  &__title {
    font-weight: 700;
    margin: 0.5em 0;
  }
}
</style>
