<template>
  <div class="app-container">
    <Navigation />
    <nuxt />
    <FooterSection id="footer" />
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import FooterSection from '~/components/FooterSection.vue'
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
  overflow: hidden;
}
</style>
