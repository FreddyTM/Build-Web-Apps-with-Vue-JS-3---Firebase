import { createRouter, createWebHistory } from 'vue-router';
import { projectAuth } from '../firebase/config';
import Welcome from '../views/Welcome.vue';
import Chatroom from '../views/Chatroom.vue';

//Authentication guard
//The arguments are to = the route we're going to
// from = which route we come from
// next = a function to decide wherther the user is allowed to go to the 'to' route, or if we redirect them
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  /* If no user is logged in, back to the Welcome page */
  if (!user) {
    next({ name: 'Welcome' });
  } else {
    /* We need to call next() to effectively go to the route. Without it, it'll never go */
    next();
  }
};

/* Authentication guard
If the user is already logged in, redirect them to the chat room and not to the Welcome page */
const requireNoAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  /* If no user is logged in, back to the Welcome page */
  if (user) {
    next({ name: 'Chatroom' });
  } else {
    /* We need to call next() to effectively go to the route. Without it, it'll never go */
    next();
  }
};

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: requireNoAuth,
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter: requireAuth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
