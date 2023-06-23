import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/default.vue'
import HomeView from '@/views/home/index.vue'
import OperatingTeamVue from '@/views/operating-team/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: '/operating-team',
          name: 'operating-team',
          component: OperatingTeamVue
        }
      ]
    }
  ]
})

export default router
