import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/default.vue'
import HomeView from '@/views/home/index.vue'
import OperatingTeamVue from '@/views/operating-team/pages/index.vue'
import OperatingTeamAboutUsVue from '@/views/operating-team/about-us/pages/index.vue'

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
          path: '/operation-team',
          name: 'operation-team',
          component: OperatingTeamVue
        },
        {
          path: '/operation-team/about-us',
          name: '/operation-team/about-us',
          component: OperatingTeamAboutUsVue
        }
      ]
    }
  ]
})

export default router
