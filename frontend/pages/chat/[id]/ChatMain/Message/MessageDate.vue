<template>
    <span class="text-[10px] text-gray-400 block text-right">{{ date }}</span>
</template>

<script setup lang="ts">
const props = defineProps({
    date: String
})
</script>