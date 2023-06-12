import { createApp } from 'vue';
import router        from "./router";
import './style.css';
// @ts-ignore
import App from './App.vue';

const app = createApp(App);
app.mount('#app');
app.use(router);

