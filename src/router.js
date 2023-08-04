// router.js

import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue'
import About from './components/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home, // Replace with your home component path
  },
  {
    path: '/about',
    name: 'About',
    component: About, // Replace with your about component path
  },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
