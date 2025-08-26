/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useNotificationStore } from "~/store/notification";
import { usePreloaderStore } from "~/store/preloader";

export default defineNuxtPlugin(() => {
  const api = axios.create({
    baseURL: "/api",
    timeout: 20000,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  // ==== Request Interceptor ====
  api.interceptors.request.use((config) => {
    const token = useCookie("token").value;
    if (token) config.headers.Authorization = `Bearer ${token}`;

    // استدعاء الـ preloader عند بداية الطلب
    const preloader = usePreloaderStore();
    preloader.start();

    // تخزين وقت البداية لضمان مدة عرض loader
    (config as any)._startTime = Date.now();

    return config;
  });

  // ==== Response Interceptor ====
  api.interceptors.response.use(
    async (response) => {
      await handlePreloader(response.config);
      return response;
    },
    async (error) => {
      await handlePreloader(error.config);

      const notification = useNotificationStore();

      if (error.response) {
        const status = error.response.status;
        switch (status) {
          case 401:
            notification.show("Unauthorized. Redirecting to login.", "error");
            navigateTo("/login");
            break;
          case 403:
            notification.show("Access forbidden", "warning");
            break;
          case 404:
            notification.show("Resource not found", "warning");
            break;
          default:
            console.error("API Error:", error.response.data);
            notification.show(error?.message || "An error occurred", "error");
        }
      } else if (error.request) {
        notification.show(
          "Network error. Please check your connection.",
          "error"
        );
      } else {
        notification.show(error.message || "Unknown error occurred", "error");
      }

      return Promise.reject(error);
    }
  );

  // ==== Helper function: Handle Preloader with minimum duration ====
  async function handlePreloader(config: any) {
    const preloader = usePreloaderStore();
    const minDuration = 100; // 400ms على الأقل
    const startTime = config?._startTime || Date.now();
    const elapsed = Date.now() - startTime;
    const delay = Math.max(minDuration - elapsed, 0);

    return new Promise((resolve) =>
      setTimeout(() => {
        preloader.stop();
        resolve(true);
      }, delay)
    );
  }

  return {
    provide: {
      api,
    },
  };
});
