<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="register-container">
        <div class="register-card">
            <img src="/logo3.png" alt="Logo" class="logo">

            <h1>Register</h1>

            <form class="register-form" @submit.prevent="register">
                <!-- الاسم -->
                <div class="input-group">
                    <label for="firstName">First Name:</label>
                    <input id="firstName" v-model="firstName" type="text"  placeholder="Enter your first name" aria-placeholder="First Name">
                    <span  v-if="errors.firstName" class="error-msg">{{ errors.firstName }}</span>

                </div>
                <div class="input-group">
                    <label for="lastName">Last Name:</label>
                    <input id="lastName" v-model="lastName" type="text"  placeholder="Enter your last name" aria-placeholder="Last Name">
                    <span v-if="errors.lastName" class="error-msg">{{ errors.lastName }}</span>
                </div>

                <!-- البريد والهاتف -->
                <div class="input-group">
                    <label for="email">Email:</label>
                    <input id="email" v-model="email" type="email"  placeholder="Enter your email" aria-placeholder="Email">
                    <span v-if="errors.email" class="error-msg">{{ errors.email }}</span>
                </div>
                <div class="input-group">
                    <PhoneInput v-model:phone="phone" />
                </div>

                <!-- كلمة السر والدور -->
                <div class="input-group">
                    <label for="password">Password:</label>
                    <input id="password" v-model="password" type="password"  minlength="6"
                        placeholder="Enter your password" autocomplete="new-password" aria-placeholder="Password">
                    <span v-if="errors.password" class="error-msg">{{ errors.password }}</span>
                </div>
                <div class="input-group">
                    <label for="role">Role:</label>
                    <select id="role" v-model="role" >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>

                <!-- زرار والفوتر -->
                <div class="form-footer">
                    <button type="submit">Register</button>
                    <div class="footer-text">
                        Already have an account?
                        <nuxt-link to="/login">Login here</nuxt-link>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import PhoneInput from "~/components/ui/PhoneInput.vue";
import useRegister from "../composables/useRegister";

const { firstName, lastName, email, phone, password, role, errors, register } = useRegister();
</script>

<style scoped>
@import "~/assets/css/register.css";
</style>
