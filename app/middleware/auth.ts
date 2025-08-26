// middleware/auth.ts
import { useAuthStore } from "@/store/auth";

export default defineNuxtRouteMiddleware(() => {
  const authStore = useAuthStore();
  if (!authStore.token) {
    return navigateTo("/login");
  }
});
