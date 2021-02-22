<template>
  <button :class="size" class="main-button">
    {{ buttonContent }}
  </button>
</template>

<script>
export default {
  name: 'MainButton',
  props: {
    buttonContent: {
      type: String,
      default: 'Default'
    },
    size: {
      type: String,
      default: 'big'
    }
  }
}
</script>

<style lang="scss" scoped>
.main-button {
  font-family: $second-font, sans-serif;
  font-size: 20px;
  font-weight: 300;
  padding: 0.4em 1.3em;
  border-radius: 10em;
  border: none;
  outline: none;
  background-color: $attention-color;
  color: white;
  text-transform: uppercase;
  transition: background-color 0.2s;
  @include for-desktop-up {
    font-size: $medium-font;
  }
  &.small {
    font-size: $small-font;
  }

  &:hover {
    background-color: darken($attention-color, 10%);
    cursor: pointer;
  }
}
</style>
