import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ------------------------------
  // Global CSS
  // ------------------------------
  css: ["@/assets/main.css"],

  // ------------------------------
  // App configuration (head, meta, etc.)
  // ------------------------------
  app: {
    head: {
      title: "Restaurant App",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#ffffff" },
        { name: "mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-status-bar-style", content: "default" },
        { name: "language", content: "en" },
        { name: "description", content: "A Nuxt.js application" },
        //performance
        { name: "performance", content: "high" },
        { name: "cache-control", content: "max-age=3600" },
        { name: "x-content-type-options", content: "nosniff" },
        { name: "x-xss-protection", content: "1; mode=block" },
        { name: "referrer", content: "no-referrer" },
        { name: "permissions-policy", content: "geolocation=(self)" },
        { name: "feature-policy", content: "geolocation=(self)" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],

      htmlAttrs: {
        lang: "en",
      },
    },
  },

  // ------------------------------
  // Vite configuration
  // ------------------------------
  vite: {
    css: {
      // توليد sourcemap صحيح للـ CSS أثناء dev

      devSourcemap: true,
    },
    build: {
      // تقليل حجم JS عند build
      minify: "esbuild",
      target: "esnext",
    },
  },
  // ------------------------------
  // Runtime configuration
  // ------------------------------
  runtimeConfig: {
    public: {
      apiBase: "http://localhost:5000/",
      appVersion: "1.0.0",
    },
  },

  // ------------------------------
  // Nitro server configuration (headers, security)
  // ------------------------------
  nitro: {
    routeRules: {
      // 🔒 القواعد العامة (تنطبق على كل المسارات)
      "/**": {
        headers: {
          // 👇 منع تضمين الموقع داخل iframes (ضد clickjacking)
          "X-Frame-Options": "DENY",

          // 👇 تعطيل استكشاف أنواع غير متوقعة
          "X-Content-Type-Options": "nosniff",

          // 👇 حماية ضد بعض هجمات XSS
          "X-XSS-Protection": "1; mode=block",

          // 👇 سياسة أمان المحتوى (CSP) — يمكن تعديلها حسب مشروعك
          // مثال في middleware أو headers
          "Content-Security-Policy":
            "default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; connect-src 'self' ws://localhost:4000",
          // 👇 إجبار الاتصال عبر HTTPS
          "Strict-Transport-Security":
            "max-age=31536000; includeSubDomains; preload",

          // 👇 منع مشاركة البيانات مع مواقع أخرى إلا إذا سمحت صراحة
          "Referrer-Policy": "strict-origin-when-cross-origin",

          // 👇 التحكم في مشاركة الموارد عبر المتصفحات
          "Cross-Origin-Resource-Policy": "same-origin",
          "Cross-Origin-Embedder-Policy": "require-corp",
          "Cross-Origin-Opener-Policy": "same-origin",
        },
      },

      // 🖼 مثال: لو عندك ملفات public (صور)
      "/images/**": {
        headers: {
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      },

      // ⚡ API routes security
      "/api/**": {
        headers: {
          "Cache-Control": "no-store",
        },
      },
    },
    prerender: {
      // prerender its for set static pages as html not in ssr
      crawlLinks: true, // السماح بالزحف على الروابط
      routes: ["/", "/about", "/contact"], // تحديد المسارات للبري رندر
    },
  },
  // ------------------------------
  // Compatibility and devtools
  // ------------------------------
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: [
    "@pinia/nuxt", // تأكد من إضافة هذا
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    "@nuxt/ui",
  ],
});
