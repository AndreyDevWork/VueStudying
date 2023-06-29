
import { createRouter, createWebHashHistory } from "vue-router"
import Main from '@/pages/Main'
import PostPages from '@/pages/PostPages'
import About from '@/pages/About'

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/posts',
    component: PostPages
  },
  {
    path: '/about',
    component: About
  },
]

const router = createRouter({
  routes, 
  history: createWebHashHistory(process.env.BASE_URL)
})

export default router;