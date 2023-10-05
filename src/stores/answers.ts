import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'


export const useAnswerStore = defineStore('answers', {
  state: () => ({
    answers: useStorage('answers', new Map<string, boolean>, localStorage, { mergeDefaults: true })
  }),
  actions: {
    rightAnswer(key: string): void {
      this.answers.set(key, true);
    },
    reset(): void {
      this.answers.clear()
    }
  }
})
