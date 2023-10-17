import { createRouter, createWebHistory } from 'vue-router'
import Acceuil from '../views/Acceuil.vue'
import AddDeps from '../views/AddDeps.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Acceuil',
      component: Acceuil
    },
    {
      path:'/add',
      name:'AddDeps',
      component: AddDeps
    }
  ]
})

export default router
