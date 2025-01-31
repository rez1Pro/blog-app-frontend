<script setup>
const form = useForm({
    name: ''
})

const emit = defineEmits(['refresh'])

const createCategory = () => {
    form.post('categories', {
        onSuccess: (response) => {
            emit('refresh')
            form.reset()
        }
    })
}
</script>
<template>
    <div class="mb-6 bg-white p-4 rounded-lg shadow">
        <form @submit.prevent="createCategory" class="flex flex-col">
            <div class="flex w-full gap-2">
                <BaseInput v-model="form.name" type="text" placeholder="Enter category name"
                    class="flex-1 p-2 border rounded" required />
                <BasePrimaryButton type="submit">
                    Add Category
                </BasePrimaryButton>
            </div>
            <div class="w-full">
                <BaseInputError :error="form.errors.name" />
            </div>
        </form>
    </div>
</template>