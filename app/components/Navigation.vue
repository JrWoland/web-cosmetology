<template>
  <header class="main-header">
    <div class="main-header__logo-container">
      <nuxt-link class="main-header__logo" to="/">
        <div @click="isActive = false">
          <h1 class="main-header__logo-text">Gabinet Kosmetologiczny</h1>
          <h2 class="main-header__logo-sub-text">
            mgr Angelika Apanowicz-Kozicka
          </h2>
        </div>
      </nuxt-link>
      <div @click="handleVisible" class="main-header__hamburger">
        <i class="fas fa-bars"></i>
      </div>
    </div>

    <nav :class="{ active: isActive }" class="main-header__nav">
      <ul @click="handleVisible" class="main-header__list">
        <li class="main-header__list-item">
          <a href="#services"> Usługi </a>
        </li>
        <li class="main-header__list-item">
          <a href="#price"> Cennik </a>
        </li>
        <li class="main-header__list-item">
          <a href="#promo"> O mnie </a>
        </li>
        <li class="main-header__list-item">
          <a href="#footer"> Kontakt </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    handleVisible() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style lang="scss" scoped>
.fas {
  color: $font-color;
}
.main-header {
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: $header-height;
  box-shadow: 0px 1px 6px 0px #e6e6e6;
  background-color: white;
  z-index: 1;
  @include for-tablet-landscape {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 $desktop-gap 0;
  }
  &__logo-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: $header-height;
    padding: 0 $mobile-gap 0;
    @include for-tablet-landscape {
      padding: 0;
    }
  }
  &__logo {
    display: flex;
    align-items: center;
    color: $main-second-color;
    height: $header-height;
    @include for-tablet-landscape {
      padding-bottom: 10px;
    }
  }
  &__hamburger {
    width: 20px;
    height: 20px;
    @include for-tablet-landscape {
      display: none;
    }
  }
  &__logo-text {
    font-family: $main-font, serif;
    font-weight: 400;
    font-size: 1em;
    letter-spacing: 2px;
    padding: 0 15px 0;
    @include for-desktop-up {
      height: 70%;
      font-size: 2em;
    }
  }
  &__logo-sub-text {
    font-weight: 300;
    font-family: $main-font, serif;
    font-size: 0.6em;
    letter-spacing: 2px;
    padding: 0 15px 0;
    @include for-desktop-up {
      height: 70%;
      font-size: 1em;
    }
  }

  &__nav {
    display: none;
    width: 100vw;
    font-family: $second-font, sans-serif;
    font-weight: 700;
    font-size: $small-font;
    color: $font-color;
    background-color: rgb(255, 255, 255);
    &.active {
      display: block;
    }
    @include for-tablet-landscape {
      display: block;
      width: auto;
    }
  }
  &__list {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: calc(100vh - #{$header-height});
    padding: 5em 0;
    @include for-tablet-landscape {
      flex-direction: row;
      justify-content: space-between;
      height: $header-height;
      padding: 0;
    }
  }
  &__list-item {
    transition: color 0.3s;
    &:hover {
      color: $attention-color;
    }
    @include for-tablet-landscape {
      margin: 0 0 0 5vw;
      min-width: fit-content;
      font-size: 0.8em;
    }
  }
}
</style>
