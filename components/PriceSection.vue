<template>
  <section class="price-section">
    <h2 class="price-section__title-price">Cennik</h2>
    <div class="price-section__service-types">
      <section v-for="service in services" class="price-section__service">
        <p class="price-section__title">{{ service.name }}</p>
        <ul class="price-section__list">
          <li v-for="price in service.prices" class="price-section__list__item">
            <span class="price-section__service-subtype">{{ price.type }}</span
            ><span class="price-section__service-price">{{ price.value }}</span>
          </li>
        </ul>
      </section>
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
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    @include for-tablet-landscape {
      grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    }
  }

  &__service {
    margin: 40px 0px 0px;
    display: flex;
    flex-direction: column;
    font-size: $mobile-font;
    @include for-tablet-landscape {
      margin: 1em;
    }
  }
  &__list {
    padding-left: 0px;
    &__item {
      display: flex;
      margin: 15px 0;
      padding: 15px 0;
      list-style-type: disc;
      border-bottom: 1px solid $border-color;
    }
    @include for-desktop-up {
      font-size: $small-font;
    }
  }

  &__service-subtype {
    display: block;
    width: 65%;
  }
  &__service-price {
    display: block;
    width: 35%;
    text-align: right;
  }

  &__title {
    font-family: $main-font;
    font-size: $medium-font;
    font-weight: 700;
    margin: 0.5em 0;
  }

  &__small-subtitle {
    font-size: 10px;
  }
}
</style>
