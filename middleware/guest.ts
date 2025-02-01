import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "~/app.vue";
import { useAuthStore } from "~/store/auth";

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)

export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore(pinia)
    const { token } = storeToRefs(authStore)

    console.log("from guest middleware", token.value)

    if (token.value) {
        return navigateTo(to.query.redirect as string || '/admin/posts')
    }
    return
})