<template>
  <div class="app-container">
    <Navigation />
    <nuxt />
    <FooterSection />
  </div>
</template>

<script>
import Navigation from '~/components/Navigation'
import FooterSection from '~/components/FooterSection'
export default {
  components: {
    Navigation,
    FooterSection
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  padding-top: $header-height;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
