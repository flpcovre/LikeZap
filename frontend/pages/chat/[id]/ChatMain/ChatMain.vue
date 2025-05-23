<template>
    <ChatWrapper v-if="messages">
        <div 
            v-for="(message, index) in messages"
            :key="message.id"
            :ref="(el) => setMessageRef(message.id)(el as Element | null)"
        >
            <Message :message="message"/>
        </div>
        
        
    </ChatWrapper>
    
    <Spinner
        borderColor="dark:border-gray-700"
        borderTColor="border-t-indigo-600 dark:border-t-indigo-600"
        borderSize="border-4"
        width="w-10"
        height="h-10"
        customClass="h-screen"
        v-else
    />
</template>

<script setup lang="ts">
import ChatWrapper from './ChatWrapper.vue';
import Message from './Message/Message.vue';
import Spinner from '~/components/ui/Spinner.vue';

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