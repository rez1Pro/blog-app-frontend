import { createPinia } from "pinia";
import { useAuthStore } from "~/store/auth";

const pinia = createPinia()
const authStore = useAuthStore(pinia)

export default defineNuxtPlugin((nuxtApp) => {
    authStore.fetchUser()
})