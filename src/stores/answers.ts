import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export class Answers {
  answer1: boolean = false
  answer2: boolean = false
  polAnswer1: boolean = false
  polAnswer2: boolean = false
  sanAnswer1: boolean = false
  sanAnswer2: boolean = false
  fwAnswer1: boolean = false
  fwAnswer2: boolean = false
  zsAnswer1: boolean = false
  zsAnswer2: boolean = false
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
