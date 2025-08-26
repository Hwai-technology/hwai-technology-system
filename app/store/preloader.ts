import { defineStore } from 'pinia'

export const usePreloaderStore = defineStore('preloader', {
  state: () => ({
    show: false
  }),
  actions: {
    start() {
      this.show = true
    },
    stop() {
      this.show = false
    }
  }
})
