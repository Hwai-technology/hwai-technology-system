<template>
  <div class="notification-container">
    <transition-group name="toast" tag="div">
      <div
        v-for="n in notification.notifications"
        :key="n.id"
        class="notification"
        :class="n.type"
      >
        <span>{{ n.message }}</span>

        <!-- خط زمني -->
        <div
          class="progress"
          :style="{ animationDuration: n.duration + 'ms' }"
        />
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { useNotificationStore } from "@/store/notification";

const notification = useNotificationStore();
</script>

<style scoped>
/* الحاوية */
.notification-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 300px;
  max-width: fit-content;
}

/* الشكل العام */
.notification {
  position: relative;
  padding: 14px 20px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 500;
  color: #fff;
  display: flex;
  align-items: center;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  margin-bottom: 10px;
}

/* الألوان */
.notification.success {
  background: linear-gradient(135deg, #28a745, #218838);
}
.notification.error {
  background: linear-gradient(135deg, #dc3545, #a71d2a);
}
.notification.warning {
  background: linear-gradient(135deg, #ffc107, #e0a800);
  color: #000;
}
.notification.info {
  background: linear-gradient(135deg, #007bff, #0056b3);
}

/* خط زمني */
.progress {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4px;
  background: rgba(255, 255, 255, 0.7);
  animation: progress-bar linear forwards;
}

/* أنيميشن الخط */
@keyframes progress-bar {
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
}

/* أنيميشن الدخول والخروج */
.toast-enter-active {
  animation: slideIn 0.4s ease;
}
.toast-leave-active {
  animation: fadeOut 0.4s ease forwards;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(100%) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateX(100%) scale(0.9);
  }
}
</style>
