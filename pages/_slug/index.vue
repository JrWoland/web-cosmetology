<template>
  <main class="wrapper">
    <article class="service-article">
      <header class="service-article__header">
        <h1>{{ service.name.toUpperCase() }}</h1>
        <p>{{ service.shortDescription }}</p>
      </header>

      <section class="service-article__section">
        <h2>Informacje ogólne</h2>
        <p v-if="service.time">
          <span>Czas trwania zabiegu: </span>{{ service.time }}
        </p>
        <h2 id="price">Cennik</h2>
        <ul v-if="service.prices.length">
          <li v-for="price in service.prices">
            {{ price.type }}: {{ price.value }}
          </li>
        </ul>
      </section>

      <section
        v-if="service.details.contraindications.length"
        class="service-article__section"
      >
        <h2>Przeciwskazania</h2>
        <ul>
          <li v-for="contraindication in service.details.contraindications">
            {{ contraindication }}
          </li>
        </ul>
      </section>

      <section
        v-if="service.details.indications.length"
        class="service-article__section"
      >
        <h2>Wskazania</h2>
        <ul>
          <li v-for="indication in service.details.indications">
            {{ indication }}
          </li>
        </ul>
      </section>

      <section
        v-if="service.details.aboutService"
        class="service-article__section"
      >
        <h2>Przebieg zabiegu</h2>
        <p>{{ service.details.aboutService }}</p>
      </section>

      <section
        v-if="service.details.afterServiceEffects"
        class="service-article__section"
      >
        <h2>Efekty po zabiegu</h2>
        <p>{{ service.details.afterServiceEffects }}</p>
      </section>
    </article>
    <aside id="services" class="service-aside">
      <h2 class="service-aside__title">Zobacz inne zabiegi</h2>
      <NuxtLink
        v-for="(service, index) in restOfServices"
        :key="index"
        :to="{ path: `/${service.path}` }"
        class="service-aside__content"
      >
        <span>{{ service.name }}</span>
      </NuxtLink>
    </aside>
  </main>
</template>

<script>
import services from '~/assets/js/cosmetologyServices'
export default {
  computed: {
    restOfServices() {
      return services.filter((item) => item.path !== this.service.path)
    }
  },
  async asyncData({ params }) {
    const { slug } = await params
    const service = services.find((service) => service.path === slug)
    return { service }
  },

  head() {
    return this.service.head
  }
}
</script>

<style lang="scss">
.wrapper {
  padding-top: 50px;
  font-family: $second-font;
  color: $font-color;
}
.service-article {
  padding: 0 $mobile-gap 100px;
  @include for-tablet-landscape {
    padding: 0 $desktop-gap 100px;
  }

  &__section {
    margin-top: 60px;
  }

  h1 {
    margin: 20px 0 10px;
    font-family: $second-font;
    font-size: $large-font;
    letter-spacing: 2px;
    font-weight: 700;
  }

  h2 {
    margin: 40px 0 10px;
    font-family: $second-font;
    font-weight: 700;
    @include for-tablet-landscape {
      font-size: $medium-font;
    }
  }

  p {
    font-size: $small-font;
    line-height: 1.75em;
    @include for-tablet-landscape {
      margin: 15px 0;
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
    @include box-shadow;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px;
    margin: 20px 0;
  }
}
</style>
