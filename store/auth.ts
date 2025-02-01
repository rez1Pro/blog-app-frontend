import { useRuntimeConfig } from '#app'
import { useLocalStorage } from '@vueuse/core'
import { defineStore, skipHydrate } from 'pinia'


export const useAuthStore = defineStore('auth', () => {
    const token = ref<string | null>(useLocalStorage('token', null).value)
    const user = ref()

    const name = computed(() => {
        return user.value?.name
    })

    const setUser = (user: any) => {
        user.value = user
    }

    async function login(tokenResponse: string) {
        useLocalStorage('token', tokenResponse)
        token.value = tokenResponse
        await fetchUser()
    }

    async function fetchUser() {
        const config = useRuntimeConfig()
        if (token.value) {
            await $fetch(`${config.public.apiBase}/user`, {
                headers: {
                    Authorization: `Bearer ${token.value}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then((user) => {
                setUser(user)
            }).catch((error) => {
                logout()
            })
        }
    }

    function logout() {
        useLocalStorage('token', null).value = null
        user.value = null
        token.value = null
    }

    return {
        token: skipHydrate(token),
        user: skipHydrate(user),
        setUser,
        name,
        logout,
        login,
        fetchUser
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}