<template>
    <ChatWrapper>
        <!-- <div 
            v-for="(message, index) in messages"
            :key="message.id"
            :ref="(el) => setMessageRef(message.id)(el as Element | null)"
        >
            <Message :message="message"/>
        </div> -->

         <div class="flex items-start space-x-3 animate-pulse dark:divide-gray-700 group">
            <div class="w-70 bg-gray-100 dark:bg-gray-700 p-3 shadow text-sm rounded-full"></div>
         </div>
    </ChatWrapper>
</template>

<script setup lang="ts">
import ChatWrapper from './ChatWrapper.vue';
import Message from './Message/Message.vue';

import { useContextArea } from '~/composables/useContextArea';

import { messages as messageStore } from '~/types/defaults';
import type { IMessage } from '~/types/types';

const messages = ref<IMessage[] | null>(null);
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

const getMessages = async (): Promise<Ref<IMessage[] | null>> => {
    await throwDelay(2000);

    messages.value = messageStore as IMessage[];
    
    return messages;
}

onMounted(async () => {
    await getMessages();
    contextArea.scrollToMessage.value = handleScrollToMessage; 
});
</script>