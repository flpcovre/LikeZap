<template>
    <button @click="activeSpeaker()"
        class="group flex justify-center items-center rounded-full outline-none focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-700 focus:bg-gray-50 dark:focus:bg-gray-600 transition-all duration-200 group w-9 h-9 md:mr-3 xs:mr-4 ml-3">
        <Icon ri="mic-line" customClass="text-[20px] opacity-75"/>
    </button>
</template>

<script setup lang="ts">
import Icon from '~/components/ui/Icon.vue';
const { activeSpeaker } = useSpeaker();
</script>