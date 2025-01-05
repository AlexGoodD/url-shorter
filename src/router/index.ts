import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home-page.vue'
import RedirectView from '@/views/Redirect-View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/:shortUrl',
      name: 'redirect',
      component: RedirectView,
    },
  ],
})

export default router
