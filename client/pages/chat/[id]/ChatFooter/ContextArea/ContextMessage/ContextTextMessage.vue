<template>
    <p class="whitespace-pre-wrap break-words">{{ content }}</p>
</template>

<script setup lang="ts">
const props = defineProps({
    content: String
})
</script>