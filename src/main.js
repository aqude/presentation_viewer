import { createApp } from 'vue';
// @ts-ignore
import router        from "./router/index.js";
import './style.css';
// @ts-ignore
import App from './App.vue';

const app = createApp(App)
    .use(router)
    .mount('#app');


