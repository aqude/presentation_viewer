<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="table">
      <div class="information_block">
        <h1>Удобный инструмент для показа вашей презентации!</h1>
        <button>Презентовать презентацию!</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.information_block {
  text-align: center;
}
.table {
  background-color: #f1eded;
  width: 185vh;
  height: 90vh;
  border-radius: 10px; /* задаем радиус закругления */
  display: flex; /* Добавляем flex-контейнер */
  justify-content: center; /* Центрируем содержимое по горизонтали */
  align-items: center; /* Центрируем содержимое по вертикали */
}
.container {
  display: grid;
  place-items: center;
  height: 100vh;
}
body {
  padding: 0;
  margin: 0;
  border: none;
  display: grid;
  background-color: yellow;
}
</style>