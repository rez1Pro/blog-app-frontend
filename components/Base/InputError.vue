<script setup lang="ts">
defineProps<{
    error?: string
}>()
</script>

<template>
    <div v-if="error" class="mt-2">
        <p class="text-sm text-red-600">
            {{ error }}
        </p>
    </div>
</template>
