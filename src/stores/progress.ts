import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export class Progress {
  hasStarted: boolean = false
  hasFinished: boolean = false
}

export const useProgressStore = defineStore('progress', {
  state: () => ({
    progress: useStorage('progress', new Progress(), localStorage, { mergeDefaults: true })
  }),
  actions: {
    start(): void {
      this.progress.hasStarted = true
    },
    finish(): void {
      this.progress.hasFinished = true
    },
    reset(): void {
      this.progress.hasFinished = false
      this.progress.hasStarted = false
    }
  }
})
