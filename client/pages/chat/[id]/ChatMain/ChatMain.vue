<template>
    <ChatWrapper>
        <div 
            v-for="(message, index) in messages"
            :key="message.id"
            :ref="(el) => setMessageRef(message.id)(el as Element | null)"
        >
            <Message :message="message"/>
        </div>
    </ChatWrapper>
</template>

<script setup lang="ts">
import ChatWrapper from './ChatWrapper.vue';
import Message from './Message/Message.vue';

import { useContextArea } from '~/composables/useContextArea';

import { messages as messageStore } from '~/types/defaults';
import type { IMessage } from '~/types/types';

const messages = ref<IMessage[]>(messageStore as IMessage[]);
const messageRefs = ref<Record<string, Element>>({});
const contextArea = useContextArea();

function setMessageRef(id: string) {
    return (el: Element | null) => {
        if (el) messageRefs.value[id] = el;
    };
}

const handleScrollToMessage = (messageId: string) => {
    const chatEl = messageRefs.value[messageId];

    if (chatEl) {
        chatEl.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'nearest'
        });
    }
};

onMounted(() => {
    contextArea.scrollToMessage.value = handleScrollToMessage; 
});
</script>