<template>
    <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-e-xl rounded-es-xl shadow max-w-2xl">
        <p class="whitespace-pre-wrap break-words">{{ content }}</p>
        <span class="text-xs text-gray-400 block mt-1 text-right text-end">{{ date }}</span>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    content: String,
    date: String
})
</script>