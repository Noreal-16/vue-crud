import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutView';
import ModalUpdateComponent from '@/components/ModalUpdateComponent';
import FormComponet from '@/components/FormComponet';
import GalleryComponents from '@/components/GalleryComponents';

const routes = [
  {
    path: '/',
    name: 'home',
    component: AboutView
  },{
    path: '/update/:id',
    name: 'update',
    component: ModalUpdateComponent
  },{
    path: '/form',
    name: 'form',
    component: FormComponet
  },{
    path: '/gallery',
    name: 'gallery',
    component: GalleryComponents
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
