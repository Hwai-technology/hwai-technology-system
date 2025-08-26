<template>
    <div class="phone-input-container">
        <label class="phone-input-label" for="phone">{{ label }}</label>
        <div class="phone-input-wrapper">
            <!-- اختيار الدولة -->
            <div class="country-select" @click="toggleDropdown">
                <!-- العلم باستخدام class من flag-icons -->
                <span v-if="selectedCountry" :class="['fi', 'fi-' + selectedCountry.code.toLowerCase()]"></span>
                <span>{{ selectedCountry ? selectedCountry.dial_code : '' }}</span>
                <span class="arrow">▼</span>
            </div>

            <!-- إدخال رقم الهاتف -->
            <input id="phone" type="tel" v-model="phoneNumber"
                :placeholder="selectedCountry ? `e.g. ${selectedCountry.dial_code} 123456789` : 'Select country'"
                :maxlength="selectedCountry ? selectedCountry.mobile_number_length : undefined" />

        </div>

        <!-- Dropdown الدول -->
        <ul v-if="showDropdown" class="country-dropdown">
            <li v-for="country in countries" :key="country.code" @click="selectCountry(country)">
                <span :class="['fi', 'fi-' + country.code.toLowerCase()]"></span>
                <span>{{ country.name }} ({{ country.dial_code }})</span>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, defineEmits } from "vue";
import "flag-icons/css/flag-icons.css";
import countries from "@/assets/data/countries.json";
import type { CountryPhone } from "~/types/CountryPhone";



// Props
const label = "Phone Number";

// Emits
const emit = defineEmits<{
    (e: "update:phone", value: string): void;
}>();

// Reactive state
const phoneNumber = ref("");
const showDropdown = ref(false);
// بعد تعريف المتغيرات reactive
const selectedCountry = ref<CountryPhone | null>(null);

// عند تحميل المكون اختار سوريا تلقائياً
const defaultCountryCode = "SY"; // رمز سوريا
selectedCountry.value = countries.find(c => c.code.toUpperCase() === defaultCountryCode) || null;

// Toggle dropdown
const toggleDropdown = () => {
    showDropdown.value = !showDropdown.value;
};

// Select country
const selectCountry = (country: CountryPhone) => {
    selectedCountry.value = country;
    showDropdown.value = false;
};

watch(phoneNumber, (val) => {
    if (selectedCountry.value && val.length > selectedCountry.value.mobile_number_length) {
        phoneNumber.value = val.slice(0, selectedCountry.value.mobile_number_length);
    }
    emit("update:phone", phoneNumber.value);
});


// Watch لتحديث الرقم مع المكون الأب
watch(phoneNumber, (val) => {
    emit("update:phone", val);
});
</script>

<style scoped>
.phone-input-container {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    position: relative;
    font-family: Arial, sans-serif;
}

label {
    display: block;
    margin-bottom: 0.3rem;
    font-weight: 500;
    color: #fff5e6;
    font-size: 0.95rem;
}

.phone-input-wrapper {
    display: flex;
    align-items: center;
    gap: 0.5rem;


}

.country-select {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.5rem 0.7rem;
    border-radius: 6px;
    cursor: pointer;
    padding: 0.75rem 1rem;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    background: rgba(255, 255, 255, 0.85) !important;
    color: #1e293b;
    font-size: 1rem;
    outline: none;
    transition: 0.3s;
}

.country-select img {
    width: 24px;
    height: 18px;
}

.country-select .arrow {
    margin-left: auto;
    font-size: 0.7rem;
}

.phone-input-wrapper input {
    flex: 1;
    padding: 0.5rem 0.7rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 1rem;
    outline: none;
    padding: 0.75rem 1rem;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    background: rgba(255, 255, 255, 0.85) !important;
    color: #1e293b;
    font-size: 1rem;
    outline: none;
    transition: 0.3s;
}

.country-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    max-height: 250px;
    overflow-y: auto;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 6px;
    margin-top: 0.2rem;
    z-index: 100;
}

.country-dropdown li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.3rem 0.5rem;
    cursor: pointer;
    transition: background 0.2s;
}

.country-dropdown li:hover {
    background: #f0f0f0;
}

.country-dropdown img {
    width: 24px;
    height: 18px;
}
</style>
