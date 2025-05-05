<template>
    <div class="relative">
        <input :type="type"
            class="max-w-full w-full h-8 p-4 rounded-sm content-center opacity-50 dark:text-white dark:bg-gray-700 dark:bg-opacity-70 dark:border-opacity-70 dark:border-gray-700 mb-7"
            readonly :value="value">
        <div class="absolute top-0 right-0"></div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    type: String,
    value: String
})
</script>