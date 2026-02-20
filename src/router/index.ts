import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: () => import('../views/index.vue'),
      children: [
        {
          path: '/welcome',
          name: 'Welcome',
          component: () => import('../views/WelcomeVue.vue'),
        },
        {
          path: '/admin',
          name: 'Admin',
          component: () => import('../views/admin/List.vue'),
        }
      ]
    }
  ],
})

export default router
