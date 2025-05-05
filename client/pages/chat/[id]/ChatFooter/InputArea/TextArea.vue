<template>
    <textarea 
        ref="textarea" 
        @input="resizeTextArea"
        @keydown.enter.prevent="handleEnter"
        class="max-w-full w-full px-5 py-3 rounded-lg content-center outline-none text-sm placeholder:text-black placeholder:opacity-40 text-opacity-70 dark:placeholder:text-white dark:placeholder:opacity-70 focus:outline-none transition duration-200 ease-out text-black bg-gray-50 dark:text-white border-opacity-0 dark:bg-gray-700 dark:bg-opacity-70 dark:border-opacity-70 dark:border-gray-700 max-h-[5rem] pr-[3.125rem] resize-none scrollbar-hidden"
        cols="30" rows="1" placeholder="Escreva sua mensagem aqui"></textarea>
</template>

<script setup lang="ts">
import eventBus from '~/utils/eventBus';

const textarea = ref<HTMLTextAreaElement | null>(null);

const addEmojiToTextArea = (emoji: { native: any; }) => {
    if (textarea.value) {
        textarea.value.value += emoji;
        textarea.value.focus();
        resizeTextArea();
    }
}

const resizeTextArea = () => {
    if (textarea.value) {
        textarea.value.style.height = 'auto';
        textarea.value.style.height =  textarea.value.scrollHeight + 'px';
    }
}

const handleEnter = (event: any) => {
    if (event.shiftKey) {
        if (textarea.value) {
            textarea.value.value += '\n';
            resizeTextArea();
        }
    } else {
        event.preventDefault();
    }
}

onMounted(() => {
    textarea.value?.focus();
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