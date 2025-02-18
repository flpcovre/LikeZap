<template>
    <textarea ref="textarea" @input="resizeTextArea"
        class="max-w-full w-full px-5 py-3 rounded-lg content-center outline-none text-sm text-opacity-90 placeholder:text-opacity-90 focus:outline-none dark:text-white border-opacity-0 dark:bg-gray-700 dark:bg-opacity-70 dark:border-opacity-70 dark:border-gray-700 max-h-[5rem] pr-[3.125rem] resize-none scrollbar-hidden"
        cols="30" rows="1" placeholder="Escreva sua mensagem aqui"></textarea>
</template>

<script setup lang="ts">
import eventBus from '~/utils/eventBus';

const textarea = ref<HTMLTextAreaElement | null>(null);

const addEmojiToTextArea = (emoji: { native: any; }) => {
    if (textarea.value) {
        textarea.value.value += emoji;
        textarea.value.focus();
    }
}

const resizeTextArea = () => {
    if (textarea.value) {
        textarea.value.style.height = 'auto';
        textarea.value.style.height =  textarea.value.scrollHeight + 'px';
    }
}

onMounted(() => {
    eventBus.on('addEmojiToTextArea', addEmojiToTextArea);
})

onUnmounted(() => {
    eventBus.off('addEmojiToTextArea', addEmojiToTextArea);
})
</script>

<style scoped>
.scrollbar-hidden {
    overflow-y: hidden;
}
</style>