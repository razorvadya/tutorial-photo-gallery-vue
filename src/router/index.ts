import { createRouter, createWebHistory } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'
import Tabs from '../views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: 'Home',
      },
      {
        path: 'home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'chats',
        component: () => import('@/views/Chats.vue'),
      },
      {
        path: 'chats/:id',
        name: 'chatId',
        component: () => import('@/views/ChatId.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
