<script setup>
const page = ref(1)
const search = ref("")

const { data: posts, refresh, processing } = await useApi(() => `all-posts?page=${page.value}&filter[title]=${search.value}`, {
    server: true
    // onTransform(data) {
    //     console.log(data
    //     return data
    // }    
})


console.log(posts.value?.data)

const featuredArticle = computed(() => posts.value?.data[0])

const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
    })
}
</script>
<template>
    <!-- Main Content -->
    <div>
        <h1 class="text-5xl font-bold text-gray-900 mt-16 mb-4 md:text-4xl">Events in Minutes Ideas</h1>
        <p class="text-xl text-gray-500 mb-12 md:text-lg">
            Welcome to our Ideas Hub, where we share tips, trends and inspiration for unforgettable events.
        </p>

        <!-- Featured Article -->
        <article
            class="grid lg:grid-cols-2 gap-12 lg:gap-8 mb-20 bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition-shadow">
            <img :src="featuredArticle?.image_url" alt="Team Building"
                class="w-full h-[380px] object-cover rounded-l-2xl shadow-sm" />
            <div class="flex flex-col justify-between h-full">
                <div class="space-y-4">
                    <span class="text-sm text-gray-600">{{ formatDate(featuredArticle?.published_at) }}</span>
                    <h2 class="text-2xl font-bold text-gray-900 leading-tight">{{ featuredArticle?.title }}</h2>
                    <p class="text-gray-600 text-base leading-relaxed">
                        {{ featuredArticle?.content }}
                    </p>
                </div>
                <div class="flex justify-between items-center pt-6">
                    <span class="text-sm font-medium text-gray-600">{{ featuredArticle?.category.name }}</span>
                    <NuxtLink :to="{ name: 'post-id', params: { id: featuredArticle.id } }"
                        class="text-gray-900 font-semibold hover:text-gray-700 transition-colors flex items-center gap-2">
                        Read <span class="text-lg leading-none">→</span>
                    </NuxtLink>
                </div>
            </div>
        </article>

        <!-- Popular Articles Section -->
        <section class="mb-20">
            <h2 class="text-[32px] font-bold text-gray-900 mb-12">Popular Articles</h2>
            <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                <article v-for="article in posts?.data" :key="article.id"
                    class="rounded-2xl overflow-hidden bg-white shadow-sm">
                    <div class="relative h-[260px]">
                        <span
                            class="absolute top-6 right-6 bg-white/90 px-4 py-2 rounded-full text-sm font-medium uppercase">
                            {{ article.category.name }}
                        </span>
                        <img :src="article.image_url" :alt="article.title" loading="lazy"
                            class="w-full h-full object-cover" />
                    </div>
                    <div class="p-8">
                        <span class="text-sm text-gray-600">{{ formatDate(article.published_at) }}</span>
                        <h3 class="text-2xl font-bold text-gray-900 mt-4 mb-6 hover:text-gray-700 transition-colors">
                            <NuxtLink :to="{ name: 'post-id', params: { id: article.id } }">{{ article.title }}
                            </NuxtLink>
                        </h3>
                        <p class="text-base text-gray-600 leading-relaxed">
                            {{ article.content }}
                        </p>
                    </div>
                </article>
            </div>
        </section>
    </div>
</template>