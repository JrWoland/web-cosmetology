<template>
  <div class="card">
    <img class="card__img" src="../assets/png/manicure.png" />
    <h4 class="card__title">Manicure</h4>
    <p class="card__description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      perferendis.
    </p>
    <MainButton button-content="choose" size="small" />
  </div>
</template>

<script>
import MainButton from './MainButton'
export default {
  name: 'ServiceCard',
  components: {
    MainButton
  }
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  box-shadow: 0px 1px 6px 0px #e6e6e6;
  text-align: center;
  :nth-child(n) {
    margin-bottom: 20px;
  }
  &__img {
    width: 100%;
  }
  &__title {
    font-family: $main-font;
    font-size: $medium-font;
    font-weight: 400;
  }
  &__description {
    font-family: $second-font;
    font-size: $small-font;
  }
}
</style>
