import { reactive, ref } from "vue";
import { useAuthStore } from "@/store/auth";
import { useNotificationStore } from "@/store/notification";

type LoginErrors = {
  email: string;
  password: string;
};

// set as boolean

export function useLogin() {
  const authStore = useAuthStore();
  const notification = useNotificationStore();

  const isLoading = ref(false);
  const email = ref("");
  const password = ref("");
  const errors = reactive<LoginErrors>({
    email: "",
    password: "",
  });

  function validate(): boolean {
    errors.email = "";
    errors.password = "";

    if (!email.value) errors.email = "Email is required.";
    if (!password.value) errors.password = "Password is required.";

    return !errors.email && !errors.password;
  }

  async function login(): Promise<void> {
    if (!validate()) {
      notification.show("Please fix the errors before submitting.", "error");
      return;
    }

    try {
      isLoading.value = true;
      const data = {
        email: email.value,
        password: password.value,
      };

      const { $api } = useNuxtApp();
      const api = $api as import("axios").AxiosInstance; // type assertion for AxiosInstance
      const res = await api.post("/auth/login", data);

      isLoading.value = false;
      // حفظ التوكن والمستخدم في الـ store
      authStore.setAuth(res.data.user, res.data.token);

      // التنقل إلى الصفحة الرئيسية بعد تسجيل الدخول
      navigateTo("/");
    } catch (err) {
      // الخطأ سيُعالج في الـ axios interceptor عالمياً
      console.error(err);
      isLoading.value = false;
    }
  }

  return {
    email,
    password,
    errors,
    isLoading,
    login,
  };
}
