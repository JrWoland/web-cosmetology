<template>
  <section class="price-section">
    <h2 class="price-section__title-price">Cennik</h2>
    <div class="price-section__service-types">
      <div v-for="service in services" class="price-section__service">
        <p class="price-section__title">{{ service.name }}</p>
        <ul>
          <li v-for="price in service.prices">
            <span class="price-section__service-subtype">{{ price.type }}</span
            ><span class="price-section__service-price">{{ price.value }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import cosmetologyServices from '@/assets/js/cosmetologyServices.js'
export default {
  name: 'PriceSection',
  data() {
    return {
      services: cosmetologyServices
    }
  }
}
</script>

<style lang="scss" scoped>
.price-section {
  text-align: left;
  color: $font-color;
  margin: 50px 0;
  padding: 0 $mobile-gap 0;
  min-height: 30vh;
  font-family: $second-font;
  &__title-price {
    font-family: $main-font;
    font-size: $large-font;
    text-align: center;
  }
  @include for-tablet-landscape {
    padding: 0 $desktop-gap 0;
  }

  &__service-types {
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  }

  &__service {
    @include box-shadow;
    margin: 1em;
    display: flex;
    flex-direction: column;
    padding: 10px;
    font-size: $mobile-font;

    li {
      margin: 15px 0;
      list-style-type: disc;
    }
    @include for-desktop-up {
      font-size: $small-font;
    }
  }

  &__service-subtype {
    display: inline-block;
    width: 65%;
  }
  &__service-price {
    display: inline-block;
    width: 35%;
    text-align: right;
  }

  &__title {
    font-family: $main-font;
    font-size: $medium-font;
    letter-spacing: 0.1em;
    font-weight: 700;
    margin: 0.5em 0;
  }

  &__small-subtitle {
    font-size: 10px;
  }
}
</style>
