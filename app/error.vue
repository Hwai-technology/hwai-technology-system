<template>
  <div class="error-page">
    <transition name="fade-slide">
      <div v-if="show" class="error-content">
        <div class="icon">{{ icon }}</div>
        <h1>{{ error?.statusCode || 500 }}</h1>
        <p>{{ error?.message || defaultMessage }}</p>
        <NuxtLink to="/" class="btn-home">Back to Home</NuxtLink>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

const error = useError();
const show = ref(false);

const defaultMessage = "An unexpected error occurred.";


const icon = computed(() => {
  switch (error.value?.statusCode) {
    case 404: return "😕";
    case 403: return "🚫";
    case 401: return "🔒";
    default: return "💥";
  }
});

// تأخير بسيط قبل عرض البطاقة لإعطاء تأثير دخول سلس
onMounted(() => {
  setTimeout(() => show.value = true, 100);
});
</script>

<style scoped>
  @import "@/assets/css/error.css";
</style>
