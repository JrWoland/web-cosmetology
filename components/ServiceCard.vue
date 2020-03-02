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
  box-shadow: 5px 5px 10px 5px #ddd;
  text-align: center;
  font-size: 16px;
  :nth-child(n) {
    margin-bottom: 20px;
  }
  &__img {
    width: 100%;
  }
  &__title {
    font-size: $medium-font;
    font-weight: 400;
  }
  &__description {
    font-family: $second-font;
    font-size: $small-font;
  }
}
</style>
