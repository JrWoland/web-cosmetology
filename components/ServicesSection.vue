<template>
  <section class="services-section">
    <h2 class="services-section__title">Most popular services</h2>
    <div class="services-section__content">
      <ServiceCard class="services-section__item" />
      <ServiceCard class="services-section__item" />
      <ServiceCard class="services-section__item" />
      <ServiceCard class="services-section__item" />
    </div>
  </section>
</template>

<script>
import ServiceCard from './ServiceCard'
export default {
  name: 'ServicesSection',
  components: {
    ServiceCard
  },
  directives: {}
}
</script>

<style lang="scss" scoped>
.services-section {
  margin-top: 150px;
  padding: 0 $mobile-gap 0;
  color: $font-color;
  text-align: center;
  min-height: 80vh;
  @include for-tablet-landscape {
    padding: 0 $desktop-gap 0;
  }
  &__title {
    margin: 1.2em 0;
    font-family: $main-font;
    font-size: $medium-font;
    font-weight: 400;
    @include for-desktop-up {
      font-size: $large-font;
    }
  }
  &__content {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}
</style>
