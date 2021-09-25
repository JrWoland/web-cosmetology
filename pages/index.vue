<template>
  <transition name="home">
    <main>
      <HeroSection />
      <ServicesSection id="services" />
      <PromoSection id="promo" />
      <PriceSection id="price" />
    </main>
  </transition>
</template>

<script>
import HeroSection from '~/components/HeroSection.vue'
import PromoSection from '~/components/PromoSection.vue'
import ServicesSection from '~/components/ServicesSection.vue'
import PriceSection from '~/components/PriceSection.vue'
export default {
  transition: 'home',
  components: {
    HeroSection,
    PromoSection,
    ServicesSection,
    PriceSection
  },
  mounted() {
    window.AOS.init({
      duration: 800,
      mirror: false,
      once: true
    })
  }
}
</script>

<style lang="scss" scoped>
.home-enter-active,
.home-leave-active {
  transition: opacity 0.5s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
</style>
