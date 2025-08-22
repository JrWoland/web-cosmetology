<template>
  <main class="wrapper">
    <div class="hero-img">
      <NuxtImg
        :src="service?.heroImg.src"
        :alt="service?.heroImg.alt"
        loading="eager"
      />
    </div>
    <article class="service-article">
      <header class="service-article__header">
        <h1>{{ service?.name.toUpperCase() }}</h1>
        <p>{{ service?.shortDescription }}</p>
      </header>

      <div class="service-article__info">
        <section class="service-article__section">
          <h2>Informacje ogólne</h2>
          <p v-if="service?.time">
            <span>Czas trwania zabiegu: </span>{{ service?.time }}
          </p>
        </section>
        <section class="service-article__section">
          <h2 id="price">Cennik</h2>
          <ul v-if="service?.prices.length">
            <li v-for="price in service?.prices" :key="price.type">
              {{ price.type }}: {{ price.value }}
            </li>
          </ul>
        </section>
      </div>

      <div class="service-article__info">
        <section
          v-if="service?.details.contraindications.length"
          class="service-article__section"
        >
          <h2>Przeciwwskazania</h2>
          <ul>
            <li
              v-for="contraindication in service?.details.contraindications"
              :key="contraindication"
            >
              {{ contraindication }}
            </li>
          </ul>
        </section>

        <section
          v-if="service?.details.indications.length"
          class="service-article__section"
        >
          <h2>Wskazania</h2>
          <ul>
            <li
              v-for="indication in service?.details.indications"
              :key="indication"
            >
              {{ indication }}
            </li>
          </ul>
        </section>
      </div>

      <section
        v-if="service?.details.aboutService"
        class="service-article__about"
      >
        <h2>Przebieg zabiegu</h2>
        <p v-html="service?.details.aboutService"></p>
      </section>

      <section
        v-if="service?.details.afterServiceEffects"
        class="service-article__about"
      >
        <h2>Efekty po zabiegu</h2>
        <p>{{ service?.details.afterServiceEffects }}</p>
      </section>
    </article>
    <aside id="services" class="service-aside">
      <h2 class="service-aside__title">Zobacz inne zabiegi</h2>
      <div class="service-aside__content">
        <NuxtLink
          v-for="(service, index) in restOfServices"
          :key="index"
          :to="{ path: `/${service?.path}` }"
          :class="{ current: `/${service?.path}` === currentPath }"
          class="service-aside__content-item"
        >
          <span>{{ service?.name }}</span>
        </NuxtLink>
      </div>
    </aside>
  </main>
</template>

<script setup lang="ts">
import { cosmetologyServices as services } from "~/assets/js/cosmetologyServices";

const route = useRoute();

const currentPath = computed(() => route.params.slug);

const restOfServices = computed(() =>
  services.filter((service) => service?.path !== currentPath.value)
);

const service = computed(() =>
  services.find((service) => service?.path === currentPath.value)
);

useHead({
  title: service.value?.head.title,
  meta: service.value?.head.meta.map((meta) => ({
    name: meta.name,
    content: meta.content,
  })),
});
</script>
<style lang="scss">
.wrapper {
  padding-top: 0px;
  font-family: $second-font;
  color: $font-color;
}
.hero-img {
  overflow: hidden;
  aspect-ratio: 3;

  @include for-tablet-landscape {
    aspect-ratio: 17/3;
  }

  img {
    width: 100%;
    transform: translateY(-40%);
  }
}
.service-article {
  margin-top: 30px;
  padding: 0 $mobile-gap 100px;
  @include for-tablet-landscape {
    padding: 0 $desktop-gap 100px;
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @include for-tablet-landscape {
      flex-direction: row;
    }
  }

  &__section {
    @include glassmorph;
    margin: 30px 0px;
    padding: 30px;
    @include for-tablet-landscape {
      width: 48%;
    }
  }

  &__about {
    @include glassmorph;
    padding: 30px;
  }

  h1 {
    font-family: $main-font;
    font-size: $medium-font;
    letter-spacing: 2px;
    font-weight: 700;
    @include for-tablet-landscape {
      font-size: $large-font;
      margin: 50px 0 10px;
    }
  }

  h2 {
    margin: 10px 0 10px;
    font-family: $main-font;
    font-weight: 700;
    @include for-tablet-landscape {
      font-size: $medium-font;
    }
  }

  p {
    font-size: $small-font;
    line-height: 1.75em;
    @include for-tablet-landscape {
      margin: 5px 0;
    }
  }

  li {
    line-height: 1.75em;
    list-style: disc;
    @include for-tablet-landscape {
      font-size: $small-font;
    }
  }
}

.service-aside {
  padding: 0 $mobile-gap 0;
  background-color: $second-background-color;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 200px;
  @include for-tablet-landscape {
    padding: 0 $desktop-gap 0;
  }

  &__title {
    font-family: $second-font;
    margin: 30px 0;
    width: 100%;
  }

  &__content {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    padding: 10px;
    margin: 20px 0;
  }

  &__content-item {
    @include glassmorph;
    min-width: 15%;
    margin: 5px;
    padding: 10px;
    &.current {
      color: $attention-color;
    }

    @include for-tablet-landscape {
      min-width: 10%;
    }
  }
}
</style>
