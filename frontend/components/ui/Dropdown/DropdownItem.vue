<template>
    <li>
        <button 
           class="w-full text-left block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-500 dark:hover:text-white text-base"
           :class="customClass"
           @click="handleClick"
        >
            <Icon v-if="icon" :ri="icon" customClass="text-indigo-500 mr-1 text-base"/> 
            {{ text }}
        </button>
    </li>
</template>

<script setup lang="ts">
import Icon from '../Icon.vue';
import type { DropdownInterface } from 'flowbite';

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

const dropdown = inject<Ref<DropdownInterface | null>>('dropdown');

const handleClick = (event: Event) => {
    const target: HTMLElement = event.target as HTMLElement;
    target.blur();

    if (dropdown?.value) {
        dropdown.value.hide();
    }
}
</script>