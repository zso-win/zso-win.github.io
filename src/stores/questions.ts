import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export class Questions {
  question1: boolean = true
  question2: boolean = false
}


export const useQuestionStore = defineStore('questions', {
  state: () => ({
    questions: useStorage('questions', new Questions(), localStorage, { mergeDefaults: true })
  }),
  actions: {
    update(partialQuestions: Partial<Questions>): void {
      this.questions = { ...this.questions, ...partialQuestions }
    }
  }
})
