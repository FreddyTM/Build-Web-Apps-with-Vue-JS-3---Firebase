import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import NotFound from '../views/NotFound.vue';
import About from '../views/About.vue';
import Jobs from '../views/jobs/Jobs.vue';
import JobDetails from '../views/jobs/JobDetails.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    /* To lazy load a component, first we don't import the route with a static import. Then we create a function that does the import.
    That way the component is only loaded once it's been accessed for the first time
    component: () => import('../views/About.vue')*/
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs,
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
    /* Accept props in the component to pass route params to it */
    props: true,
  },
  //Redirect
  {
    //this will be an old route that no longer exists in our app
    path: '/all-jobs',
    //and this will be the route to redirect the old route to
    redirect: '/jobs',
  },
  //Catchall 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
