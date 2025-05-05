<template>
    <span
        class="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold dark:text-white bg-indigo-300 rounded-full"
    >
        {{ props.text }}
    </span>
</template>

<script setup lang="ts">
const props = defineProps({
    text: String
})
</script>