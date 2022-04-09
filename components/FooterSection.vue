<template>
  <footer class="footer-section">
    <address class="footer-section__address">
      <img
        class="footer-section__logo-img"
        src="~/assets/png/logo.png"
        alt="logo image"
      />
      <h3>Kontakt</h3>
      <ul class="footer-section__list">
        <li class="footer-section__adress-item">+48 516 355 412</li>
        <li class="footer-section__adress-item">
          gabinet.apanowiczkozicka@gmail.com
        </li>
        <li class="footer-section__adress-item">
          Białystok TBS, Komisji Edukacji Narodowej 50/lok.9
        </li>
      </ul>
      <SocialMedia class="footer-section__media" />
    </address>
    <div class="footer-section__map">
      <iframe
        title="Salon Kosmetyczny mapa"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d149.54657638023136!2d23.08460240858811!3d53.15066687420173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ffdc039327343%3A0x4ccd2bf730761d63!2sGabinet%20Kosmetologiczny%20Mgr%20Angelika%20Apanowicz-Kozicka!5e0!3m2!1spl!2spl!4v1617116134152!5m2!1spl!2spl"
        width="100%"
        height="100%"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
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
    margin: 50px 20px;
    text-align: center;
  }

  &__map {
    width: 100%;
  }

  &__logo-img {
    width: 200px;
  }

  &__list {
    padding: 0;
    word-wrap: break-word;
  }

  &__adress-item {
    line-height: 1.6em;
  }
}
</style>
