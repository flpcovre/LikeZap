<template>
    <li>
        <button class="w-full text-left block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-white">
            {{ text }}
        </button>
    </li>
</template>

<script setup lang="ts">
const props = defineProps({
    text: {
        type: String,
        required: true
    }
});
</script>