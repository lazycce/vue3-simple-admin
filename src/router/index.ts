import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/layout/index'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login')
    },
    {
      path: '/',
      name: 'Layout',
      redirect: 'home',
      component: Layout,
      children: [
        {
          path: 'home',
          name: 'Home',
          component: () => import('@/views/HomeView')
        },
        {
          path: 'About',
          name: 'about',
          component: () => import('@/views/AboutView')
        }
      ]
    }
  ]
})

export default router
