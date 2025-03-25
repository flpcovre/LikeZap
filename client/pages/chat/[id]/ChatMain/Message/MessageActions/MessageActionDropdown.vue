<template>
    <div
        ref="dropdownMenu"
        :id="`actions-${target}`"
        class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-600 pointer-events-auto"
    >
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
            <MessageAction text="Responder" :dropdown="dropdownMenu"/>
            <MessageAction text="Copiar"    :dropdown="dropdownMenu"/>
        </ul>
    </div>
</template>

<script setup lang="ts">
import MessageAction from './MessageAction.vue';

const props = defineProps({
    target: {
        type: Number,
        required: true
    }
})

const dropdownMenu = ref<HTMLElement | null>(null);
</script>