<template>
    <button type="button" 
        :data-dropdown-toggle="target" 
        data-dropdown-placement="top"
        class="group flex justify-center items-center rounded-full outline-none focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-700 focus:bg-gray-50 dark:focus:bg-gray-600 transition-all duration-200 toggle-picker-button group w-7 h-7 md:mr-5 xs:mr-4">
        <Icon ri="emoji-sticker-line" customClass="text-[20px] opacity-75"/>
    </button>
</template>

<script setup lang="ts">
import Icon from '~/components/ui/Icon.vue';

const props = defineProps({
    target: {
        type: String,
        required: true
    }
})
</script>