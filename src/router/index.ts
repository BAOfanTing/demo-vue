import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/welcome',
      name: 'Welcome',
      component: () => import('../views/WelcomeVue.vue'),
    },
    {
      path: '/index',
      name: 'Index',
      component: () => import('../views/index.vue'),
    },
  ],
})

export default router
