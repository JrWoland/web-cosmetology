<template>
  <footer class="footer-section">
    <address class="footer-section__address">
      <img
        class="footer-section__logo-img"
        src="~/assets/svg/Logo.svg"
        alt="logo image"
      />
      <h3>Kontakt</h3>
      <ul>
        <li>+48 555 555 555</li>
        <li>email@email.com</li>
        <li>Białystok, Komisji Edukacji Narodowej 50/lok.9</li>
      </ul>
      <SocialMedia class="footer-section__media" />
    </address>
    <div class="footer-section__map">
      <iframe
        width="100%"
        height="100%"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Bia%C5%82ystok%20Komisji%20Edukacji%20narodowej%2050&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </div>
  </footer>
</template>

<script>
import SocialMedia from '~/components/SocialMedia.vue'
export default {
  name: 'FooterSection',
  components: { SocialMedia }
}
</script>

<style lang="scss" scoped>
.footer-section {
  font-family: $second-font;
  color: $main-color;
  padding: 0 $mobile-gap 0;
  background-color: rgb(53, 37, 64);
  @include for-tablet-landscape {
    padding: 30px $desktop-gap;
    display: flex;
    justify-content: space-around;
  }

  &__media {
    margin: 10px 0;
  }

  &__address {
    margin: 50px 0;
    text-align: center;
  }

  &__map {
    width: 100%;
  }

  &__logo-img {
    width: 40px;
  }
}
</style>
