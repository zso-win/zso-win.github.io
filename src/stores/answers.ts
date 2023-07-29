import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export class Answers {
  answer1: boolean = false
  answer2: boolean = false
}


export const useAnswerStore = defineStore('answers', {
  state: () => ({
    answers: useStorage('answers', new Answers(), localStorage, { mergeDefaults: true })
  }),
  actions: {
    update(partialAnswers: Partial<Answers>): void {
      this.answers = { ...this.answers, ...partialAnswers }
    }
  }
})
