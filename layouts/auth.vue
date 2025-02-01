<script setup lang="ts">
import { useAuthStore } from '~/store/auth';

const authStore = useAuthStore();
const route = useRoute();
const handleLogout = async () => {


    (await useForm({})).post('logout', {
        onSuccess() {
            authStore.logout();
            return navigateTo({
                name: 'login',
                query: {
                    redirect: route.fullPath
                }
            })
        }
    })
}

// Add mobile menu state and sidebar state
const isMobileMenuOpen = ref(false)
const isSidebarCollapsed = ref(false)

const navigation = [
    {
        name: 'All Posts',
        to: '/admin/posts',
        icon: 'IconDocument'
    },
    {
        name: 'Create Post',
        to: '/admin/posts/create',
        icon: 'IconPlus'
    },
    {
        name: 'Categories',
        to: '/admin/categories',
        icon: 'IconCategory'
    }
]

// Add icon computed property for sidebar toggle
const sidebarToggleIcon = computed(() => {
    return isSidebarCollapsed.value ? 'IconChevronRight' : 'IconChevronLeft'
})

// Update toggle functions
const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const toggleSidebar = () => {
    isSidebarCollapsed.value = !isSidebarCollapsed.value
}
</script>
<template>
    <ClientOnly>
        <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
            <!-- Mobile Menu Button -->
            <div
                class="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-20 px-4 flex items-center">
                <button @click="toggleMobileMenu" class="text-gray-700 dark:text-gray-300">
                    <div class="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                            stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                        </svg>

                    </div>
                </button>
                <h1
                    class="ml-4 text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    <img src="/svg/logo.svg" alt="Events in Minutes" class="w-[4rem] h-[4rem]" />
                </h1>
            </div>

            <!-- Sidebar -->
            <aside :class="[
                'fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 shadow-sm transition-transform duration-300 lg:translate-x-0',
                isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full',
                isSidebarCollapsed ? 'lg:w-20' : 'lg:w-64'
            ]" class="z-30">
                <!-- Logo Area -->
                <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                    <h1
                        class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        <img src="/svg/logo.svg" alt="Events in Minutes" class="w-[4rem] h-[4rem]" />
                    </h1>
                </div>

                <!-- Navigation Menu -->
                <nav class="p-4">
                    <ul class="space-y-2">
                        <li v-for="item in navigation" :key="item.to">
                            <NuxtLink :to="item.to"
                                class="flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 rounded-lg transition-colors duration-150 hover:bg-gray-100 dark:hover:bg-gray-700"
                                :class="{ 'bg-black/5 dark:bg-black text-black dark:text-white font-medium shadow-sm': route.path === item.to }">
                                <component :is="item.icon" class="w-5 h-5"
                                    :class="{ 'text-black dark:text-white': route.path === item.to }" />
                                <span class="ml-3">{{ item.name }}</span>
                            </NuxtLink>
                        </li>
                    </ul>

                    <!-- Logout Section -->
                    <div class="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-gray-700">
                        <button @click="handleLogout"
                            class="flex items-center w-full px-4 py-3 text-gray-700 dark:text-gray-300 rounded-lg transition-all duration-150 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 hover:shadow-sm">
                            <span class="ml-3 font-medium">Logout</span>
                        </button>
                    </div>
                </nav>
            </aside>

            <!-- Mobile Menu Overlay -->
            <div v-if="isMobileMenuOpen" @click="toggleMobileMenu" class="fixed inset-0 bg-black/50 z-20 lg:hidden">
                <div class="flex items-center justify-center h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </div>

            <!-- Main Content -->
            <div :class="[
                'lg:transition-all lg:duration-300',
                isSidebarCollapsed ? 'lg:ml-20' : 'lg:ml-64'
            ]" class="pt-16 lg:pt-0">
                <!-- Header -->
                <header
                    class="sticky top-0 z-10 h-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
                    <div class="flex items-center justify-between px-6 h-full">
                        <!-- Update Sidebar Toggle -->
                        <button @click="toggleSidebar"
                            class="hidden lg:block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
                            <component :is="sidebarToggleIcon" class="w-6 h-6" />
                        </button>

                        <!-- Search Bar -->
                        <div class="flex-1 max-w-xl ml-4">
                            {{ route.path.split('/')[2]?.toUpperCase()?.replace('-', ' ') }}
                        </div>

                        <!-- Right Header Items -->
                        <div class="flex items-center space-x-4">
                            <!-- Profile -->
                            <div class="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                                <img src="https://ui-avatars.com/api/?name=Admin+User&background=3b82f6&color=fff"
                                    alt="Profile" class="w-8 h-8 rounded-full ring-2 ring-blue-500/20">
                                <span class="hidden sm:inline font-medium">
                                    Rezwan Hossain Sajib
                                </span>
                            </div>
                        </div>
                    </div>
                </header>

                <!-- Page Content -->
                <main class="p-6">
                    <slot />
                </main>
            </div>
        </div>
    </ClientOnly>
</template>
