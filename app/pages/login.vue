<!-- eslint-disable vue/html-self-closing -->
<template>
  <div class="login-container">
    <div class="login-card">
      <img
        src="/logo3.png"
        alt="Logo"
        width="300"
        class="logo"
        preload
        format="png"
        fetchpriority="high"
      />

      <h1>Welcome Back</h1>

      <form class="login-form" @submit.prevent="login">
        <!-- Email -->
        <div class="input-group">
          <label>Email</label>
          <input
            v-model="email"
            type="email"
            placeholder="Enter your email"
            :class="{ 'input-error': errors.email }"
            autocomplete="email"
          />
          <span v-if="errors.email" class="error-msg">{{ errors.email }}</span>
        </div>

        <!-- Password -->
        <div class="input-group">
          <label>Password</label>
          <input
            v-model="password"
            type="password"
            placeholder="Enter your password"
            :class="{ 'input-error': errors.password }"
            autocomplete="current-password"
          />
          <span v-if="errors.password" class="error-msg">{{
            errors.password
          }}</span>
        </div>

        <!-- Button -->
        <button type="submit" :disabled="isLoading">Login</button>
      </form>

      <!-- Footer -->
      <p class="footer-text">
        Don't have an account?
        <nuxt-link to="/register">Sign up</nuxt-link>
      </p>
    </div>
    <p class="version">Version 1.0.0</p>
  </div>
</template>

<script setup lang="ts">
import { useLogin } from "../composables/useLogin";

const { email, password, errors, isLoading, login } = useLogin();
</script>

<style scoped>
@import "@/assets/css/login.css";
</style>
