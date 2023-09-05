import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export class Questions {
  polQuestion1: boolean = false
  polQuestion2: boolean = false
  sanQuestion1: boolean = false
  sanQuestion2: boolean = false
  fwQuestion1: boolean = false
  fwQuestion2: boolean = false
  zsQuestion1: boolean = false
  zsQuestion2: boolean = false
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
