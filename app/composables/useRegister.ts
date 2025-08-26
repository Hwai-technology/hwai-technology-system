import { ref, reactive } from "vue";
import { useNotificationStore } from "@/store/notification";

type RegisterErrors = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
};

export default function useRegister() {
  const notification = useNotificationStore();

  // بيانات المستخدم
  const firstName = ref("");
  const lastName = ref("");
  const email = ref("");
  const phone = ref("");
  const password = ref("");
  const role = ref("user");

  // أخطاء الإدخال
  const errors = reactive<RegisterErrors>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  // Loading state
  const isLoading = ref(false);

  // التحقق من البيانات
  const validate = (): boolean => {
    // مسح الأخطاء السابقة
    errors.firstName = "";
    errors.lastName = "";
    errors.email = "";
    errors.phone = "";
    errors.password = "";

    if (!firstName.value.trim()) errors.firstName = "First name is required.";
    if (!lastName.value.trim()) errors.lastName = "Last name is required.";
    if (!email.value.trim()) errors.email = "Email is required.";
    if (!phone.value.trim()) errors.phone = "Phone number is required.";
    if (!password.value.trim()) errors.password = "Password is required.";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value && !emailRegex.test(email.value))
      errors.email = "Invalid email format.";

    return (
      !errors.firstName &&
      !errors.lastName &&
      !errors.email &&
      !errors.phone &&
      !errors.password
    );
  };

  // تسجيل المستخدم
  const register = async () => {
    if (!validate()) {
      notification.show("Please fix the errors before submitting.", "error");
      return;
    }

    try {
      isLoading.value = true;

      const data = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        phone: phone.value,
        password: password.value,
        role: role.value,
      };

      const { $api } = useNuxtApp();
      const api = $api as import("axios").AxiosInstance;

      const res = await api.post("/auth/register", data);

      isLoading.value = false;

      notification.show("Registration successful!", "success");

      // إعادة ضبط البيانات بعد التسجيل (اختياري)
      firstName.value = "";
      lastName.value = "";
      email.value = "";
      phone.value = "";
      password.value = "";
      role.value = "user";

      return res.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err);
      isLoading.value = false;

      // عرض رسالة الخطأ القادمة من السيرفر
      if (err.response?.data?.message) {
        notification.show(err.response.data.message, "error");
      } else {
        notification.show("An error occurred during registration.", "error");
      }
    }
  };

  return {
    firstName,
    lastName,
    email,
    phone,
    password,
    role,
    errors,
    isLoading,
    register,
  };
}
