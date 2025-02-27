<template>
    <span class="text-xs text-gray-400 block mt-1 text-right">{{ date }}</span>
</template>

<script setup lang="ts">
const props = defineProps({
    date: String
})
</script>