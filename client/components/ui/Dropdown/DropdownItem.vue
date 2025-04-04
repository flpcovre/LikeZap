<template>
    <li>
        <a href="#" 
           class="w-full text-left block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-white text-base"
           :class="customClass"
           @click="handleClick"
        >
            <Icon v-if="icon" :ri="icon" customClass="text-indigo-500 mr-1 text-base"/> {{ text }}
        </a>
    </li>
</template>

<script setup lang="ts">
import Icon from '../Icon.vue';

const props = defineProps({
    icon: {
        type: String,
        default: ''
    },
    text: {
        type: String,
        required: true
    },
    customClass: {
        type: String,
        default: ''
    }
})
</script>