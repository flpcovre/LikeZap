<template>
    <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-white">{{ text }}</a>
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