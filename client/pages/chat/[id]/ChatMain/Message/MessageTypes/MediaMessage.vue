<template>
    <div class="w-[45vh] bg-gray-100 dark:bg-gray-700 p-4 rounded-e-xl rounded-es-xl shadow max-w-2xl">
        <a href="#" class="block">
            <img :src="url" alt="Imagem" class="object-cover rounded-lg">
            <p v-if="content" class="whitespace-pre-wrap break-words mt-2">{{ content }}</p>
        </a>
        <span class="text-xs text-gray-400 block mt-1 text-right">{{ date }}</span>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    content: String,
    url: String,
    date: String
})
</script>