import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutView';
import ModalUpdateComponent from '@/components/ModalUpdateComponent';
import FormComponet from '@/components/FormComponet';
import GalleryComponents from '@/components/GalleryComponents';
import LoginView from '@/views/LoginView';

const isAuthenticated = () => {
  return !!localStorage.getItem('user') && !!localStorage.getItem('email');
}

const routes = [
  {
    path: '/auth',
    name: 'auth',
    component: LoginView,
  },
  {
    path: '/',
    name: 'home',
    component: AboutView,
    meta: { requiresAuth: true }
  }, {
    path: '/update/:id',
    name: 'update',
    component: ModalUpdateComponent,
    meta: { requiresAuth: true }
  }, {
    path: '/form',
    name: 'form',
    component: FormComponet,
    meta: { requiresAuth: true }
  }, {
    path: '/gallery',
    name: 'gallery',
    component: GalleryComponents,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/auth' && isAuthenticated()) {
    next('/');
  } else if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated()) {
    next('/auth');
  } else {
    next();
  }

})

export default router
