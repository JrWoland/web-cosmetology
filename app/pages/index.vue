<template>
  <transition name="home">
    <main v-if="true">
      <HeroSection />
      <ServicesSection id="services" />
      <PromoSection id="promo" />
      <PriceSection id="price" />
    </main>
  </transition>
</template>

<script setup lang="ts">
import HeroSection from "~/components/HeroSection.vue";
import PromoSection from "~/components/PromoSection.vue";
import ServicesSection from "~/components/ServicesSection.vue";
import PriceSection from "~/components/PriceSection.vue";
</script>

<style lang="scss" scoped>
.home-enter-active,
.home-leave-active {
  transition: opacity 0.5s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
</style>
