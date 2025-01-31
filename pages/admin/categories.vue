<script setup lang="ts">
definePageMeta({
    layout: 'auth',
    middleware: ['auth']
})

const page = ref(1)
const search = ref('')

const { data: categories, refresh, processing } = await useApi(() => `categories?page=${page.value}&filter[name]=${search.value}`, {
    onTransform(data) {
        return data
    }
})

// Function to create new category
const createCategory = async () => {
    //
}

// Function to delete category
const deleteCategory = (id: any) => {
    (useForm({
        _method: 'DELETE'
    })).post(`categories/${id}`, {
        onSuccess: (response) => {
            refresh()
        }
    })
}

const columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'slug', label: 'Slug' },
    { key: 'actions', label: 'Actions' }
]
</script>

<template>
    <div class="p-4">
        <h1 class="text-2xl font-bold mb-4">Categories Management</h1>

        <!-- Add Category Form -->
        <CreateCategory @refresh="refresh" />

        <!-- Categories Table -->
        <BaseDataTable :columns="columns" :items="categories" :loading="processing" @page-change="page = $event">
            <!-- your code here -->
            <template #actions="{ item }" class="text-left">
                <BasePrimaryButton @click="deleteCategory(item.id)">Delete</BasePrimaryButton>
            </template>
        </BaseDataTable>
    </div>
</template>