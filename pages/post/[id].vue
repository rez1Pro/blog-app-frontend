<script setup lang="ts">
import { useAsyncData } from '#app';
const { id } = useRoute().params
const config = useRuntimeConfig();

// Get the route params
const route = useRoute()

const { data: post } = await useAsyncData<Post>('post', () =>
    $fetch<Post>(`/posts/${route.params.id}`, {
        baseURL: config.public.apiBase,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
);

const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}
</script>

<template>
    <div class="mx-auto px-4 py-8">
        <article class="prose lg:prose-xl">
            <h1 class="text-4xl font-bold mb-4">{{ post?.title }}</h1>

            <div class="flex items-center space-x-4 mb-8 text-gray-600">
                <div class="flex items-center">
                    <img src="/svg/user.svg" alt="Events in Minutes" class="w-10 h-10 rounded-full mr-3">
                    <span>{{ post?.category?.name }}</span>
                </div>
                <span>•</span>
                <time>{{ formatDate(post?.published_at || '') }}</time>
            </div>

            <!-- Add short description if available -->
            <p v-if="post?.short_description" class="text-lg text-gray-600 mb-8">
                {{ post?.short_description }}
            </p>

            <div class="mb-8">
                <img v-if="post?.image_url" :src="post?.image_url" :alt="post?.title"
                    class="w-full h-64 object-cover rounded-lg">
            </div>

            <div v-html="post?.content" class="prose"></div>
        </article>
    </div>
</template>

<style>
    .prose {
        @apply max-w-none;
    }
</style>