<template>
    <div v-if="speaker" class="flex items-center relative">
        <button @click="cancelSpeaker()" type="button"
            class="group flex justify-center items-center rounded-full outline-none focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-700 focus:bg-gray-50 dark:focus:bg-gray-600 transition-all duration-200 group w-9 h-9 mr-4">
            <i class="ri-delete-bin-line text-red-400 text-[25px] opacity-75"></i>
        </button>

        <div class="max-w-full text-center w-full px-10 py-2 text-lg">
            <p>00:00</p>
        </div>

        <button @click="cancelSpeaker()"
            class="group flex justify-center items-center rounded-full outline-none focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-700 focus:bg-gray-50 dark:focus:bg-gray-600 transition-all duration-200 group w-9 h-9 md:mr-3 xs:mr-4 ml-3">
            <i class="ri-send-plane-2-line text-[25px] opacity-75"></i>
        </button>
    </div>
</template>

<script setup lang="ts">
const { speaker, cancelSpeaker } = useSpeaker();
</script>