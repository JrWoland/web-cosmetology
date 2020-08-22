<template>
  <section class="footer-section">
    <h1>Footer</h1>
  </section>
</template>

<script>
export default {
  name: 'FooterSection'
}
</script>

<style lang="scss" scoped>
.footer-section {
  font-family: $second-font;
  text-align: center;
  color: white;
  padding: 0 $mobile-gap 0;
  height: 300px;
  background-color: rgb(53, 37, 64);
  @include for-tablet-landscape {
    padding: 0 $desktop-gap 0;
  }
}
</style>
