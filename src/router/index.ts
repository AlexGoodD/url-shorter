import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home-page.vue'
import ErrorView from '@/views/ErrorPage.vue'
import NotFoundView from '@/views/NotFound.vue'
const routes = [
  {
    path: '/:shortUrl',
    component: () => import('@/views/Redirect-View.vue'),
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/error',
    name: 'error',
    component: ErrorView,
  },
  {
    path: '/404',
    name: 'notfound',
    component: NotFoundView,
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
