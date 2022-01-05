import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LoginAndRegister from "@/views/LoginAndRegister";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login-and-register',
    name: 'About',
    component: LoginAndRegister
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
