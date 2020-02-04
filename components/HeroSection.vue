<template>
  <section class="hero-section">
    <h1>herosection</h1>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style lang="scss">
.hero-section {
  background-color: rgb(193, 193, 193);
  color: $attention-color;
  width: 100vw;
  height: calc(100vh - #{$header-height});
}
</style>
