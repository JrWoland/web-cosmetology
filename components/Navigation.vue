<template>
  <header class="main-header">
    <nuxt-link class="main-header__logo" to="/">
      <img class="main-header__logo-img" src="~/assets/svg/Logo.svg" alt="" />
      <p class="main-header__logo-text">cosmetology</p>
    </nuxt-link>

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
  width: 100%;
  height: $header-height;
  padding: 0 $main-gap 0;
  box-shadow: 0px 1px 6px 0px #e6e6e6;

  &__logo {
    display: flex;
    align-items: center;
    color: $main-second-color;
    width: 400px;
    height: 80%;
  }
  &__logo-img {
    height: 70%;
  }
  &__logo-text {
    font-size: 2.5em;
    padding: 0 15px 0;
  }

  &__list {
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    font-size: $small-font;
    color: $font-color;
    display: flex;
  }

  &__list-item {
    min-width: fit-content;
    margin: 0 0 0 5em;
    transition: color 0.3s;
    &:hover {
      color: $attention-color;
    }
  }
}
</style>
