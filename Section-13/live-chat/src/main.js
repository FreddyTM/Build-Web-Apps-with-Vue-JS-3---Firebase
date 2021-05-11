import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './assets/main.css';
// Import Firebase auth service
import { projectAuth } from './firebase/config';

let app;

/* We are going to listen to any authentication change, so we'll know if there's any user logged in
  The auth guard will always know if there's a current user*/

projectAuth.onAuthStateChanged(() => {
  /* If the app is not created, create the app */
  if (!app) {
    app = createApp(App)
      .use(router)
      .mount('#app');
  }
});
