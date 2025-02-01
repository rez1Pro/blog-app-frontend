import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "~/app.vue";
import { useAuthStore } from "~/store/auth";

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)

export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore(pinia)

    console.log("from auth middleware", authStore.token)

    if (authStore.token == null) {
        return navigateTo({
            name: 'login',
            query: {
                redirect: to.fullPath
            }
        })
    }
    // On server-side, allow the initial render to proceed
    return;
})
