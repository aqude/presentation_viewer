<script lang="ts">
</script>
<template>
  <div class="container">
    <div class="table">
      <RouterView/>
    </div>
  </div>
</template>

<style scoped>


button {
  padding: 8px;
  font-size: 20px;
  border-radius: 20px;
  border-width: 1.5px;
  width: 160px;
  transition-duration: 0.4s;
}

button:hover {
  color: white;
  background-color: black;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  width: 200px;
}

.table {
  margin: 0 auto;
  background-color: #f1eded;
  width: 185vh;
  height: 90vh;
  border-radius: 10px;
  box-shadow: 0 0 16px 0 rgba(0,0,0,0.24);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>


