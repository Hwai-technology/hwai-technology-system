<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="p-8">
    <h2 class="text-2xl font-bold mb-4">Welcome to Nuxt 3 + TailwindCSS!</h2>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});
</script>
