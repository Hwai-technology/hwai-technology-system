<!-- eslint-disable vue/html-self-closing -->
<template>
  <transition name="fade">
    <div
      v-if="store.show"
      class="preloader-overlay"
      aria-live="polite"
      aria-busy="true"
      role="status"
    >
      <div class="loader-card">
        <!-- لو حابب تحتفظ بدائرة الدوران بجانب النص، خلّيها؛ أو احذفها -->
        <div class="spinner" aria-hidden="true"></div>

        <div class="loading-row">
          <span class="loading-text">{{ message }}</span>
          <span class="dots" aria-hidden="true">
            <span></span><span></span><span></span>
          </span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { usePreloaderStore } from "@/store/preloader";

const props = withDefaults(
  defineProps<{
    message?: string;
  }>(),
  {
    message: "Loading",
  }
);

const store = usePreloaderStore();
const { message } = props;
</script>

<style scoped>
/* حركة دخول/خروج ناعمة */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.preloader-overlay {
  position: fixed;
  inset: 0;
  background: rgba(18, 18, 20, 0.35);
  backdrop-filter: blur(6px);
  display: grid;
  place-items: center;
  z-index: 9999;
}

.loader-card {
  position: absolute;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgba(174, 174, 174, 0.5);
  min-width: 230px;
  justify-items: center;
}

/* دائرة التحميل */
.spinner {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-top: 5px solid #ff6347; /* غيّر اللون حسب الهوية */
  animation: spin 1s linear infinite;
  margin-bottom: 16px;
}

.loading-row {
  display: inline-flex;
  align-items: baseline;
  gap: 6px;
  font-weight: 700;
  letter-spacing: 0.3px;
}

.loading-text {
  font-size: 18px;
  color: #1f2937;
}

/* النقاط المتحركة: ثلاث نقاط تقفز بشكل متتابع */
.dots {
  display: inline-flex;
  gap: 6px;
  transform: translateY(1px);
}
.dots > span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #ff6347; /* غيّر اللون حسب الهوية */
  display: inline-block;
  animation: bounce 1s infinite ease-in-out;
}
.dots > span:nth-child(2) {
  animation-delay: 0.15s;
}
.dots > span:nth-child(3) {
  animation-delay: 0.3s;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes bounce {
  0%,
  80%,
  100% {
    transform: translateY(0);
    opacity: 0.5;
  }
  40% {
    transform: translateY(-6px);
    opacity: 1;
  }
}
</style>
