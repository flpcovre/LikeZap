<template>
    <button 
        class="flex-1 text-white px-2 py-1 rounded text-sm"
        :class="[bgColor, bgColorHover]"
    >
        {{ text }}
    </button>
</template>

<script setup lang="ts">
const props = defineProps({
    text: String,
    bgColor: String,
    bgColorHover: String
})
</script>