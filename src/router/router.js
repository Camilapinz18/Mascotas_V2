import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import Breeds from '../views/Breeds.vue'
import Pets from '../views/Pets.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingPage
    },
    {
      path: '/breeds',
      name: 'breeds',
      component: Breeds
    },
    {
      path: '/pets',
      name: 'pets',
      component: Pets
    }
  ]
})

export default router