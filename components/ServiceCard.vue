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
  border: 1px dashed rgb(58, 0, 128);
  text-align: center;
  width: 50vw;
  height: 50vh;
  &__img {
    width: 100%;
  }
  &__title {
    font-size: $small-font;
  }
}
</style>
