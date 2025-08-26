<template>
  <NuxtRouteAnnouncer />
  <NuxtPage />
  <Preloader message="Loading" />
  <Notification />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { usePreloaderStore } from "@/store/preloader";
import Preloader from "@/components/ui/Preloader.vue";
import Notification from "@/components/ui/Notification.vue";

const router = useRouter();

onMounted(() => {
  // استدعاء الـ store فقط على العميل
  const preloader = usePreloaderStore();

  // قبل الانتقال لأي Route → شغل اللودنج
  router.beforeEach((to, from, next) => {
    preloader.start();
    next();
  });

  // بعد اكتمال الانتقال → وقف اللودنج بعد تأخير بسيط
  router.afterEach(() => {
    setTimeout(() => {
      preloader.stop();
    }, 400);
  });
});
</script>

<style>
@import "@/assets/main.css";
</style>
