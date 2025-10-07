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
import { format } from "date-fns";

const textarea = ref<HTMLTextAreaElement | null>(null);
const { addMessage } = useChatMessage();

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
        sendTextMessage();
    }
}

const sendTextMessage = async () => {
    if (!textarea.value) return;

    const text = textarea.value.value;

    if (text.trim() == '') return;

    await addMessage({
        id: generateTempId(),
        type: 'text',
        content: text.trim(),
        date: format(new Date(), "dd/MM/yyyy HH:mm:ss"),
        status: 'pending',
        sender: {
            id: 1,
            type: 'user',
            email: 'jdoe@gmail.com',
            firstName: 'John',
            lastName: 'Doe',
        }
    });

    textarea.value.value = '';
    resizeTextArea();
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