<template>
  <main>
    <HeroSection />
    <ServicesSection />
    <PromoSection />
    <FooterSection />
  </main>
</template>

<script>
import HeroSection from '~/components/HeroSection'
import PromoSection from '~/components/PromoSection'
import ServicesSection from '~/components/ServicesSection'
import FooterSection from '~/components/FooterSection'
export default {
  components: {
    HeroSection,
    PromoSection,
    ServicesSection,
    FooterSection
  }
}
</script>

<style lang="scss" scoped></style>
