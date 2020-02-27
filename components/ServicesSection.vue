<template>
  <section class="services-section">
    <div class="services-section__content">
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
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
  border: 1px dashed green;
  color: $font-color;
}
</style>
