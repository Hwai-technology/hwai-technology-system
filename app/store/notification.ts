import { defineStore } from "pinia";

type NotificationType = "success" | "error" | "warning" | "info";

interface Notification {
  id: number;
  message: string;
  type: NotificationType;
  duration: number;
}

export const useNotificationStore = defineStore("notification", {
  state: () => ({
    notifications: [] as Notification[],
    max: 8,
  }),
  actions: {
    show(message: string, type: NotificationType = "info", duration = 4000) {
      const id = Date.now() + Math.random();

      if (this.notifications.length >= this.max) {
        this.notifications.shift();
      }

      this.notifications.push({ id, message, type, duration });

      // Auto remove
      setTimeout(() => this.remove(id), duration);
    },
    remove(id: number) {
      this.notifications = this.notifications.filter((n) => n.id !== id);
    },
  },
});
