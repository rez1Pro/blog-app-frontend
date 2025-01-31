<script setup lang="ts">
import { useAsyncData } from '#app';
const config = useRuntimeConfig();
const nuxtApp = useNuxtApp();

useHead({
    title: `${config.public.APP_NAME} Ideas`,
    meta: [
        { name: 'description', content: 'Read the latest articles and updates on our blog.' },
    ],
});
const pageSize = ref(9);

const { data: posts, error: apiError, refresh } = await useAsyncData<{ data: Post[], total: number }>('posts', () =>
    $fetch<{ data: Post[], total: number }>(`/all-posts?per_page=${pageSize.value}`, {
        baseURL: config.public.apiBase,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
);

// Update computed to handle potential errors
const featuredArticle = computed(() => {
    if (apiError.value) return null
    return posts.value?.data?.length ? posts.value.data[0] : null
})

const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
    })
}

const goToAllPosts = () => {
    if (posts.value?.total && (posts.value?.total > pageSize.value)) {
        pageSize.value += 3;
        refresh();
    }
}
</script>
<template>
    <!-- Main Content -->
    <div>
        <h1 class="text-5xl font-bold text-gray-900 mt-16 mb-4 md:text-5xl">Events in Minutes Ideas</h1>
        <p class="text-xl text-gray-500 mb-12 md:text-lg">
            Welcome to our Ideas Hub, where we share tips.
            <br>
            trends and inspiration for unforgettable events.
        </p>

        <!-- Error State -->
        <div v-if="apiError" class="text-center py-12">
            <p class="text-xl text-red-600 mb-4">Unable to load articles</p>
            <button @click="refresh()" class="text-blue-600 hover:underline">
                Try again
            </button>
        </div>

        <!-- No Posts State -->
        <div v-else-if="!posts?.data?.length" class="text-center py-12">
            <p class="text-xl text-gray-600 mb-4">No articles found</p>
            <p class="text-gray-500">Check back later for new content</p>
        </div>

        <!-- Featured Article -->
        <article v-else-if="featuredArticle"
            class="grid lg:grid-cols-2 gap-12 lg:gap-8 mb-20 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <img :src="featuredArticle?.image_url" alt="Team Building" loading="lazy"
                class="w-full h-[380px] object-cover rounded-l-2xl shadow-sm" />
            <div class="flex flex-col justify-between h-full p-8">
                <div class="space-y-4">
                    <span class="text-sm text-gray-500">{{ formatDate(featuredArticle?.published_at) }}</span>
                    <h2 class="text-xl text-gray-800 leading-tight">{{ featuredArticle?.title }}</h2>
                    <p class="text-gray-500 text-base leading-relaxed">
                        {{ featuredArticle?.short_description }}
                    </p>
                </div>
                <div class="flex justify-between items-center pt-6">
                    <span class="font-medium text-gray-600 p-3 bg-gray-200 rounded-lg">{{
                        featuredArticle?.category?.name
                    }}</span>
                    <NuxtLink :to="{ name: 'post-id', params: { id: featuredArticle?.id } }"
                        class="text-gray-500 font-semibold hover:text-gray-700 transition-colors flex items-center gap-2">
                        Read <span class="text-lg leading-none">→</span>
                    </NuxtLink>
                </div>
            </div>
        </article>

        <!-- Popular Articles Section -->
        <section class="mb-20">
            <h2 class="text-xl font-semibold text-gray-700 mb-12">Popular Articles</h2>
            <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                <article v-for="article in posts?.data" :key="article?.id" class="rounded-2xl overflow-hidden bg-white">
                    <div class="relative h-[260px]">
                        <span
                            class="absolute top-5 text-white right-5 bg-gray-500/80 px-4 py-2 rounded-full text-[10px] font-medium uppercase">
                            {{ article?.category?.name }}
                        </span>
                        <img :src="article?.image_url" :alt="article?.title" loading="lazy"
                            class="w-full h-full object-cover rounded-2xl" />
                    </div>
                    <div class="mt-3">
                        <span class="text-xs text-gray-500">{{ formatDate(article?.published_at) }}</span>
                        <h3 class="text-lg text-gray-700 my-3 hover:text-gray-700 transition-colors">
                            <NuxtLink v-if="article?.id" :to="{ name: 'post-id', params: { id: article?.id } }">{{
                                article?.title }}
                            </NuxtLink>
                        </h3>
                        <p class="text-sm text-gray-500 leading-relaxed">
                            {{ article?.short_description }}
                        </p>
                    </div>
                </article>
            </div>

        </section>
        <div class="flex" v-if="posts?.total && posts?.total > pageSize">
            <button @click="goToAllPosts"
                class="text-gray-500 text-sm hover:text-gray-700 transition-colors flex items-center gap-2 border border-gray-500 rounded-full p-3 px-4">
                View More <span class="text-lg leading-none">→</span>
            </button>
        </div>
    </div>
</template>