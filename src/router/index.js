import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/note',
      name: 'no-id',
      component: HomeView
    },
    {
      path: '/note/:id',
      name: 'note',
      component: () => import('../views/ViewPost.vue')
    }
  ]
})

export default router
