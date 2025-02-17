<template>
    <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-base">
            <Icon :ri="icon" customClass="text-indigo-500 mr-1"/> {{ text }}
        </a>
    </li>
</template>

<script setup lang="ts">
import Icon from '~/components/ui/Icon.vue';

const props = defineProps({
    icon: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
})
</script>