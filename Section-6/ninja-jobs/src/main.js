import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; //It automatically imports the index.js file at that location when you use the folder name

createApp(App)
  .use(router)
  .mount('#app');
