<template>
  <div class="app-container">
    <Navigation />
    <nuxt />
  </div>
</template>

<script>
import Navigation from '~/components/Navigation'
export default {
  components: {
    Navigation
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
