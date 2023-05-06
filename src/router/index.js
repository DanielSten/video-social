import { createRouter, createWebHistory } from 'vue-router'
import NavMenu from "../components/nav-menu/header-menu.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: NavMenu,
    },
  ]
})

export default router
