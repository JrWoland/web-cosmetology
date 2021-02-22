<template>
  <div class="wrapper">
    <section class="service-article">
      <article>
        <h1>{{ service.name }}</h1>
        <div v-html="service.htmlContent">
          {{ service.htmlContent }}
        </div>
      </article>
    </section>
    <aside class="service-aside">
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
  </div>
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
  font-family: $second-font;
  color: $font-color;
}
.service-article {
  padding: 0 $mobile-gap 100px;
  @include for-tablet-landscape {
    padding: 0 $desktop-gap 100px;
  }
  h1 {
    margin: 20px 0 10px;
    letter-spacing: 2px;
    font-weight: 700;
    font-size: $large-font;
  }

  h2 {
    margin: 40px 0 10px;
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
