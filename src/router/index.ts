import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home-page.vue'
import ErrorView from '@/views/ErrorPage.vue'
import NotFoundView from '@/views/NotFound.vue'
import RedirectView from '@/views/Redirect-View.vue'
const routes = [
  {
    path: '/:shortUrl',
    component: RedirectView,
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
router.beforeEach((to, from, next) => {
  console.log('Routing to:', to.path) // Muestra las rutas que Vue intenta cargar
  console.log('Params:', to.params) // Muestra los parámetros de la ruta
  next()
})
export default router
