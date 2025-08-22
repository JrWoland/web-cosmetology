<template>
  <section class="services-section">
    <h2 class="services-section__title">Zabiegi</h2>
    <div class="services-section__content">
      <div
        v-for="(group, i, k) in groupedServices"
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
            data-aos="fade-in"
          ></video>
          <div class="services-section__group-title">
            <h3 class="services-section__title">{{ group.name }}</h3>
          </div>
        </div>
        <div class="services-section__details">
          <div
            v-for="service in group.services"
            :key="service.name"
            :data-aos="k % 2 === 0 ? 'fade-left' : 'fade-right'"
            data-aos-duration="1000"
            class="services-section__type"
          >
            <p class="services-section__type-name">{{ service.name }}</p>
            <NuxtLink
              :to="{ path: `/${service.path}` }"
              class="services-section__read-more-btn"
            >
              <MainButton button-content="sprawdź" size="small" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  groupedServices,
  cosmetologyServices,
} from "~/assets/js/cosmetologyServices.js";
import MainButton from "~/components/MainButton.vue";

export default {
  name: "ServicesSection",
  components: {
    MainButton,
  },
  data() {
    return {
      services: cosmetologyServices,
      groupedServices,
    };
  },
};
</script>

<style lang="scss" scoped>
.services-section {
  margin-top: 50px;
  padding: 0 $mobile-gap 0;
  color: $font-color;
  text-align: center;
  min-height: 75vh;

  @include for-tablet-landscape-up {
    padding: 0 $desktop-gap 0;
  }

  &__item {
    @include glassmorph;
    margin: 150px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:first-child {
      margin-top: 15px;
    }

    @include for-tablet-landscape-up {
      margin: 100px 0;
      align-items: center;
      flex-direction: row;
      &:nth-child(even) {
        flex-direction: row-reverse;
      }
      &:nth-child(odd) {
        .services-section__details {
          text-align: left;
        }
        .services-section__type {
          flex-direction: row-reverse;
        }
      }
    }
  }

  &__title {
    margin: 1.2em 0;
    font-family: $main-font;
    font-size: $large-font;
    font-weight: $bold;

    @include for-desktop-up {
      font-size: $big-font;
      margin: 15px 0;
    }
  }

  &__video-container {
    position: relative;
    height: 30vh;

    @include for-tablet-landscape-up {
      width: 55%;
      height: 40vh;
    }
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
    background: rgba(255, 255, 255, 0.9);
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  &__details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @include for-tablet-landscape-up {
      flex-direction: column;
      justify-content: center;
      width: 45%;
      text-align: right;
    }
  }

  &__type {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1em 0em;
    font-family: $second-font;

    @include for-tablet-landscape-up {
      width: 100%;
      font-size: $small-font;
      padding: 0.5em 0.5em;
      justify-content: space-evenly;
    }

    @include for-desktop-up {
      font-size: $medium-font;
    }
  }

  &__read-more-btn {
    margin: 5px 15px 5px 15px;
  }
  &__type-name {
    word-wrap: break-word;
    @include for-tablet-landscape-up {
      flex-grow: 1;
    }
  }
}
</style>
