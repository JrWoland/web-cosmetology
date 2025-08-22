<template>
  <button :class="size" class="main-button">
    {{ buttonContent }}
  </button>
</template>

<script>
export default {
  name: "MainButton",
  props: {
    buttonContent: {
      type: String,
      default: "Default",
    },
    size: {
      type: String,
      default: "big",
    },
  },
};
</script>

<style lang="scss" scoped>
.main-button {
  font-family: $second-font, sans-serif;
  font-size: 16px;
  font-weight: 300;
  padding: 0.6em 1.6em;
  border: 2px solid $attention-color;
  outline: none;
  background-color: white;
  color: $attention-color;
  text-transform: uppercase;
  transition: background-color 0.2s;
  border-radius: 7px;
  @include for-desktop-up {
    font-size: $medium-font;
  }
  &.small {
    font-size: $small-font;
  }

  &:hover {
    background-color: $attention-color;
    color: white;
    cursor: pointer;
  }
}
</style>
