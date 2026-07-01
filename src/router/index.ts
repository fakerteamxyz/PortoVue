import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home Page',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/about.vue')
  },
  {
    path: '/skills',
    name: 'Skills',
    component: () => import('../views/skills.vue')
  },
  {
    path: '/contact',
    name: 'Contact Page',
    component: () => import('../views/contact.vue')
  },
  {
    path: '/work',
    name: 'My Work Page',
    component: () => import('../views/work.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => {
    return new Promise((resolve) => resolve({ top: 0 }))
  }
})

export default router
