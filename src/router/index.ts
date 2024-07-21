import { createRouter, createWebHistory } from 'vue-router'
import { handleHotUpdate, routes } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})


// 热更新
if (import.meta.hot) {
  handleHotUpdate(router)
}

export default router
