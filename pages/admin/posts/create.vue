<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

definePageMeta({
    layout: 'auth',
    middleware: ['auth']
})

const { data: categories } = await useApi('categories?per_page=-1', {
    onTransform: (data) => data
})

const form = useForm({
    title: '',
    slug: '',
    content: '',
    category_id: null,
    imageFile: null as unknown as File | null
})

watch(() => form.title, (newTitle) => {
    form.slug = useSlugify(newTitle)
})

const imagePreview = ref<string | null>(null)

const handleImageUpload = (event: Event) => {
    const input = event.target as HTMLInputElement
    if (input.files && input.files[0]) {
        const file = input.files[0]
        form.imageFile = file
        imagePreview.value = URL.createObjectURL(file)
    }
}

const handleSubmit = () => {
    form.post('posts', {
        onSuccess: async (response) => {
            await navigateTo({ name: 'admin-posts' })
        }
    })
}

// Add smooth scroll behavior
onMounted(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
})
</script>

<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <!-- Main Content -->
        <main class="max-w-7xl mx-auto">
            <!-- Header - Made full-width with modern styling -->
            <div class="mb-6">
                <h1 class="text-4xl font-bold text-gray-900 mb-4">Create New Post</h1>
                <p class="text-lg text-gray-600">Share your thoughts with the world</p>
            </div>

            <!-- Form Card - Updated with more white space and modern styling -->
            <div class="bg-white rounded-xl shadow-lg border border-gray-100">
                <div class="p-8">
                    <form @submit.prevent="handleSubmit">
                        <!-- Image Upload - Modernized -->
                        <div class="mb-8">
                            <label class="block text-lg font-medium text-gray-700 mb-3">
                                Thumbnail Image
                            </label>
                            <div class="mt-2 flex items-center space-x-6">
                                <div v-if="imagePreview"
                                    class="w-40 h-40 relative rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105">
                                    <img :src="imagePreview" class="w-full h-full object-cover" />
                                    <button type="button" @click="imagePreview = null; form.image = null"
                                        class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20"
                                            fill="currentColor">
                                            <path fill-rule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                                <div v-else
                                    class="flex items-center justify-center w-40 h-40 border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
                                    <div class="text-center">
                                        <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none"
                                            viewBox="0 0 48 48">
                                            <path
                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                                <input type="file" @change="handleImageUpload" accept="image/*"
                                    class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                            </div>
                            <p class="mt-2 text-sm text-gray-500">PNG, JPG, GIF up to 10MB</p>
                            <BaseInputError :error="form.errors.imageFile" />
                        </div>

                        <!-- Status and Category -->
                        <div class=" gap-6 mb-6">
                            <!-- Category -->
                            <div>
                                <label for="category" class="block text-lg font-medium text-gray-700 mb-3">
                                    Category
                                </label>
                                <select id="category" v-model="form.category_id"
                                    class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                                    <option :value="null">Select Category</option>
                                    <option v-for="category in categories" :value="category.id">
                                        {{ category.name }}
                                    </option>
                                </select>
                                <BaseInputError :error="form.errors.category_id" />
                            </div>
                        </div>
                        <!-- Other form fields - Updated styling -->
                        <div class="space-y-8">
                            <!-- Title Input -->
                            <div>
                                <label for="title" class="block text-lg font-medium text-gray-700 mb-3">
                                    Post Title
                                </label>
                                <input id="title" v-model="form.title" type="text"
                                    class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                    placeholder="Enter post title" />
                                <BaseInputError :error="form.errors.title" />
                            </div>

                            <!-- Slug Input -->
                            <div>
                                <label for="slug" class="block text-lg font-medium text-gray-700 mb-3">
                                    Slug
                                </label>
                                <input id="slug" v-model="form.slug" type="text" readonly disabled
                                    class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                    placeholder="post-url-slug" />
                                <BaseInputError :error="form.errors.slug" />
                            </div>

                            <!-- Content Editor -->
                            <div>
                                <label for="content" class="block text-lg font-medium text-gray-700 mb-3">
                                    Content
                                </label>
                                <textarea id="content" v-model="form.content" rows="8"
                                    class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                    placeholder="Write your post content here..."></textarea>
                                <BaseInputError :error="form.errors.content" />
                            </div>

                            <!-- Action Buttons - Modernized -->
                            <div class="flex justify-end space-x-4 pt-4">
                                <button type="button"
                                    class="px-6 py-3 text-sm font-medium text-gray-700 bg-gray-50 border border-gray-200 rounded-xl hover:bg-gray-100 transition-colors">
                                    Cancel
                                </button>
                                <BasePrimaryButton type="submit" :disabled="form.processing"
                                    class="px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-colors">
                                    Create Post
                                </BasePrimaryButton>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    </div>
</template>