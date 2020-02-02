<template>
  <header class="main-header">
    <div class="main-header__logo">
      <nuxt-link to="/"> LOGO </nuxt-link>
    </div>

    <nav class="main-header__nav">
      <ul class="main-header__list">
        <li class="main-header__list-item">
          <nuxt-link to="/services"> Services </nuxt-link>
        </li>
        <li class="main-header__list-item">
          <nuxt-link to="/gallery"> Gallery </nuxt-link>
        </li>
        <li class="main-header__list-item">
          <nuxt-link to="/about"> About me </nuxt-link>
        </li>
        <li class="main-header__list-item">
          <nuxt-link to="/blog"> Blog </nuxt-link>
        </li>
        <li class="main-header__list-item">
          <nuxt-link to="contact"> Contact </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style lang="scss">
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: $header-height;
  padding: 1em 0;

  &__list {
    display: flex;
  }

  &__list-item {
    padding: 0 2em;
  }
}
</style>
