import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export class Questions {
  spQuestion1: boolean = false
  spQuestion2: boolean = false
  rdQuestion1: boolean = false
  rdQuestion2: boolean = false
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
