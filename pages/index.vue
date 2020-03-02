<template>
  <main>
    <HeroSection />
    <PromoSection />
    <ServicesSection />
  </main>
</template>

<script>
import HeroSection from '~/components/HeroSection'
import PromoSection from '~/components/PromoSection'
import ServicesSection from '~/components/ServicesSection'
export default {
  components: {
    HeroSection,
    PromoSection,
    ServicesSection
  }
}
</script>

<style lang="scss" scoped></style>
