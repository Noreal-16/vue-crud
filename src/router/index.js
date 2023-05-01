import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutView';
import ModalUpdateComponent from '@/components/ModalUpdateComponent';

const routes = [
  {
    path: '/',
    name: 'home',
    component: AboutView
  },{
    path: '/update/:id',
    name: 'update',
    component: ModalUpdateComponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
