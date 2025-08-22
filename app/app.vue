<template>
  <div class="app-container">
    <Navigation />
    <NuxtPage />
    <FooterSection id="footer" />
    <div id="fb-root" ref="fb-root"></div>
    <div
      id="fb-customer-chat"
      ref="fb-customer-chat"
      class="fb-customerchat"
    ></div>
  </div>
</template>

<script>
import Navigation from "~/components/Navigation.vue";
import FooterSection from "~/components/FooterSection.vue";
export default {
  components: {
    Navigation,
    FooterSection,
  },
};
</script>

<style lang="scss" scoped>
.app-container {
  padding-top: $header-height;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  // background-image: url("/public/mesh.png");
}
</style>
