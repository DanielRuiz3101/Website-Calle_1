import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../Layouts/DefaultLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('../views/HomeView.vue'),
        },
        {
          path: 'Integrantes',
          name: 'integrantes',
          component: () => import('../views/MembersView.vue'),
        },
        {
          path: 'Aventuras',
          name: 'aventuras',
          component: () => import('../views/AdventureView.vue'),
        },
        {
          path: 'Futbol',
          name: 'futbol',
          component: () => import('../views/MatchesView.vue'),
        },
      ],
    },
  ],
})

export default router
