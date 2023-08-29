import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: () => import('../views/QuizView.vue')
    },
    {
      path: '/question',
      name: 'question',
      component: () => import('../views/QuestionView.vue'),
      props: { isQuestion: true }
    },
    {
      path: '/correctAnswer',
      name: 'correctAnswer',
      component: () => import('../views/QuestionView.vue'),
      props: { isCorrect: true }
    },
    {
      path: '/wrongAnswer',
      name: 'wrongAnswer',
      component: () => import('../views/QuestionView.vue'),
      props: { isWrong: true }
    }

  ]
})

export default router
