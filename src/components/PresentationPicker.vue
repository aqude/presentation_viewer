<script>
export default {
  data() {
    return {
      fileName: '',
      selectedFile: null,
      acceptNextPage: false
    };
  },
  methods: {
    checkFileSelection() {
      if (this.selectedFile) {
        this.acceptNextPage = true;
      }
    },
    handleFileChange(event) {
      const selectedFile = event.target.files[0];
      this.selectedFile = selectedFile ? selectedFile.name : null;
    }
  }
}
</script>

<template>
  <h1>Загрузите вашу презентацию</h1>
  <form @submit.prevent="checkFileSelection">
    <div class="field">
      <label for="file-upload" class="custom-file-upload">
        Выбрать файл
      </label>
      <input id="file-upload" type="file" ref="file" accept=".pptx" v-on:change="selectedFile" @change="handleFileChange" style="display: none;">
    </div>
    <button type="submit" :class="{ 'red-button': !selectedFile }" :disabled="acceptNextPage">Открыть презентацию</button>
  </form>
</template>

<style>
.red-button:hover {
  color: white;
  background-color: red;
  border-color: red;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  width: 300px;
}
button {
  padding: 8px;
  font-size: 20px;
  border-radius: 20px;
  border-width: 1.5px;
  width: 260px;
  transition-duration: 0.4s;
  color: black;
}

button:hover {
  color: white;
  background-color: black;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  width: 300px;
}

.field {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.custom-file-upload {
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
  background-color: #4CAF50;
  color: white;
  border-radius: 4px;
  border: none;
  transition: background-color 0.3s;
}

.custom-file-upload:hover {
  background-color: #45a049;
}

.custom-file-upload:active {
  background-color: #3e8e41;
}
</style>