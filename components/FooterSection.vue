<template>
  <section class="footer-section">
    <div>
      <img
        class="footer-section__logo-img"
        src="~/assets/svg/Logo.svg"
        alt="logo image"
      />
    </div>
    <div>
      <h3>Contact</h3>
      <ul>
        <li>+48 555 555 555</li>
        <li>myadress@email.com</li>
        <li>City, Best Street 07/12</li>
      </ul>
    </div>
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
  color: $main-color;
  padding: 0 $mobile-gap 0;
  height: 300px;
  background-color: rgb(53, 37, 64);
  @include for-tablet-landscape {
    padding: 0 $desktop-gap 0;
  }

  &__logo-img {
    width: 40px;
  }
}
</style>
