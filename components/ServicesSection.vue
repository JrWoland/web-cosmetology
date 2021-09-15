<template>
  <section class="services-section">
    <h2 class="services-section__title">Zabiegi</h2>
    <div class="services-section__content">
      <!-- <ServiceCard
        v-for="group in groupedServices"
        :key="group.name"
        :video="group.video"
        :title="group.name"
        class="services-section__item"
      /> -->
      <div
        v-for="group in groupedServices"
        :key="group.name"
        class="services-section__item"
      >
        <div class="services-section__video-container">
          <video
            :src="group.video"
            class="services-section__video"
            autoplay
            loop
            playsinline
            muted
          ></video>
          <div class="services-section__group-title">
            <h3 class="services-section__title">{{ group.name }}</h3>
          </div>
        </div>
        <div
          v-for="service in group.services"
          :key="service.name"
          class="services-section__details"
        >
          <p class="services-section__type">
            {{ service.name }}
          </p>
          <NuxtLink :to="{ path: `/${service.path}` }">
            <MainButton button-content="więcej" size="small" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  groupedServices,
  cosmetologyServices
} from '@/assets/js/cosmetologyServices.js'
import MainButton from '@/components/MainButton.vue'

// import ServiceCard from './ServiceCard.vue'
export default {
  name: 'ServicesSection',
  components: {
    MainButton
    // ServiceCard
  },
  data() {
    return {
      services: cosmetologyServices,
      groupedServices
    }
  }
}
</script>

<style lang="scss" scoped>
.services-section {
  margin-top: 150px;
  padding: 0 $mobile-gap 0;
  color: $font-color;
  text-align: center;
  min-height: 80vh;

  @include for-tablet-landscape {
    padding: 0 $desktop-gap 0;
  }

  &__item {
    @include box-shadow;
    margin: 150px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // &:nth-child(even) {
    //   flex-direction: row-reverse;
    // }
  }

  &__title {
    margin: 1.2em 0;
    font-family: $main-font;
    font-size: $large-font;
    font-weight: 700;
    @include for-desktop-up {
      font-size: $big-font;
      margin: 15px 0;
    }
  }

  &__video-container {
    position: relative;
    height: 40vh;
  }

  &__video {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
  }

  &__group-title {
    position: absolute;
    width: 100%;
    background: rgba(255, 255, 255, 0.808);
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  &__details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 1em;
  }

  &__type {
    font-family: $second-font;
    display: flex;
    justify-content: space-between;
  }
}
</style>
