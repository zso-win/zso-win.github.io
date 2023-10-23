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
      path: '/info',
      name: 'info',
      component: HomeView
    },
    {
      path: '/:org/:id/:name',
      name: 'panel',
      component: () => import('../views/QuestionView.vue'),
      props: true
    },
    {
      path: '/gettheprize',
      name: 'end',
      component: () => import('../views/PrizeView.vue')
    }
  ]
})

router.beforeEach((to, _from) => {
  const progressStore = useProgressStore()
  if (progressStore.progress.hasFinished) {
    if (to.name == 'end') return
    else return { name: 'end' }
  }

  if (!progressStore.progress.hasStarted) {
    if (to.name == 'home') {
      progressStore.start()
      return
    }
    if (to.name != 'info') return { name: 'info' }
  }
})

export default router
