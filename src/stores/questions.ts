import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useQuestionStore = defineStore('questions', {
  state: () => ({
    questions: useStorage('questions', new Map<string, boolean>(), localStorage, { mergeDefaults: true })
  }),
  actions: {
    activateQuestion(key: string): void {
      this.questions.set(key, true)
    },
    isActive(key: string): boolean {
      return this.questions.get(key) ?? false
    },
    reset(): void {
      this.questions.clear()
    }
  }
})
