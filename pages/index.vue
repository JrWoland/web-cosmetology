<template>
  <main>
    <HeroSection />
    <ServicesSection id="services" />
    <PromoSection id="promo" />
    <PriceSection id="price" />
  </main>
</template>

<script>
import HeroSection from '~/components/HeroSection.vue'
import PromoSection from '~/components/PromoSection.vue'
import ServicesSection from '~/components/ServicesSection.vue'
import PriceSection from '~/components/PriceSection.vue'
export default {
  components: {
    HeroSection,
    PromoSection,
    ServicesSection,
    PriceSection
  }
}
</script>

<style lang="scss" scoped></style>
