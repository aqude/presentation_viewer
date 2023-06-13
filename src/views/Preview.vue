<script lang="ts">
import Information from "../components/Information.vue";
import PresentationPicker from "../components/PresentationPicker.vue";

export default {
  components: {PresentationPicker, Information},
  data() {
    return {
      counterComponent: 1,
      openPanel: false,
    };
  },
  methods: {
    counterIncrement() {
      this.counterComponent++;
    }
  }
}
</script>
<template>
  <div class="container">
    <div class="table">
      <header class="info">
        <img src="/src/assets/more.svg" class="icon_more" alt="more" @click="openPanel = !openPanel">
        <div class="panel" v-show="openPanel">
          <p class="text-span">
            <router-link to="/information">Бла-бла-бла</router-link>
          </p>
        </div>
      </header>
      <div class="container_components">
        <div v-if="counterComponent === 1">
          <h1>Удобный инструмент для показа вашей презентации!</h1>
          <button>Презентовать</button>
        </div>
        <div v-if="counterComponent === 2">
          <PresentationPicker></PresentationPicker>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-span {
  margin-right: 30px;
}
.panel {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
  width: 100%;
}

.container_components {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  align-self: center;
  margin-bottom: 100px;
}

.icon_more {
  margin-right: 20px;
  margin-top: 10px;
}

.info {
  text-align: end;
  width: 100%;
  position: relative; /* Добавляем позиционирование */
}

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


