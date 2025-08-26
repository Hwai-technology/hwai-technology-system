// store/auth.ts
import { defineStore } from "pinia"

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as { id: number; name: string } | null,
    token: null as string | null
  }),
  actions: {
    setAuth(user: { id: number; name: string } | null, token: string) {
      this.user = user
      this.token = token
    },
    clearAuth() {
      this.user = null
      this.token = null
    }
  }
})
