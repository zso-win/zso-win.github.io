import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useProgressStore } from '@/stores/progress'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:org/:id/:name',
      name: 'panel',
      component: () => import('../views/QuestionView.vue'),
      props: true
    }

  ]
})

router.beforeEach((to, _from) => {
  const progressStore = useProgressStore()
  if (progressStore.progress.hasFinished && to.name != 'quiz') return { name: 'quiz' }

  if (!progressStore.progress.hasStarted && to.name != 'home') return { name: 'home' }
})

export default router
