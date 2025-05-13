<template>
    <button @click="stopSpeaker()" type="button"
        class="group flex justify-center items-center rounded-full outline-none focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-700 focus:bg-gray-50 dark:focus:bg-gray-600 transition-all duration-200 group w-9 h-9 mr-4">
        <Icon ri="delete-bin-line" customClass="text-red-400 text-[20px] opacity-75 transition-transform duration-300 hover:scale-110"/>
    </button>
</template>

<script setup lang="ts">
import Icon from '~/components/ui/Icon.vue';
const { stopSpeaker } = useSpeaker();
</script>