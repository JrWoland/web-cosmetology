<template>
  <section class="price-section">
    <h2 class="price-section__title-price">Cennik</h2>
    <div class="price-section__service-types">
      <section
        v-for="service in services"
        :data-aos="'fade-up'"
        class="price-section__service"
        data-aos-duration="1000"
      >
        <h3 class="price-section__title">{{ service.name }}</h3>
        <ul class="price-section__list">
          <li v-for="price in service.prices" class="price-section__list-item">
            <span class="price-section__service-subtype">{{ price.type }}</span
            ><span class="price-section__service-price">{{ price.value }}</span>
          </li>
        </ul>
      </section>
    </div>
  </section>
</template>

<script>
import { cosmetologyServices } from '@/assets/js/cosmetologyServices.js'
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
    margin: 20px 0;
    font-family: $main-font;
    font-size: $large-font;
    text-align: center;
  }
  @include for-tablet-landscape {
    padding: 0 $desktop-gap 0;
  }

  &__service-types {
    display: grid;
    grid-gap: 1em;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    @include for-tablet-landscape {
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    }
  }

  &__service {
    @include glassmorph;
    padding: 1em;
    display: flex;
    flex-direction: column;
    font-size: $mobile-font;
    @include for-tablet-landscape {
      margin: 0.5em;
    }
  }
  &__list {
    padding-left: 0px;
    @include for-desktop-up {
      font-size: $small-font;
    }
  }

  &__list-item {
    display: flex;
    margin: 5px 0;
    padding: 5px 0;
    list-style-type: disc;

    &:not(:last-child) {
      border-bottom: 1px solid $border-color;
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
    font-weight: $bold;
    margin: 0.5em 0;
  }
}
</style>
