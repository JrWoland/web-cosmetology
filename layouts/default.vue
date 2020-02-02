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
  margin: auto;
  display: flex;
  flex-direction: column;
  width: $app-container-width;
}
</style>
