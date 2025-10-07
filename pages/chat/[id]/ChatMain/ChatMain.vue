<template>
    <ChatWrapper v-if="groupedChatMessage">
        <div 
            v-for="group in groupedChatMessage"
            :key="group.id"
            class="message-group"
        >
            <DateSeparator :dateLabel="group.dateLabel" />
            
            <div 
                v-for="message in group.messages"
                :key="message.id"
                :ref="(el) => setMessageRef(message.id)(el as Element | null)"
                class="message-item"
            >
                <Message :message="message"/>
            </div>
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
import DateSeparator from '~/components/ui/DateSeparator.vue';

import { useContextArea } from '~/composables/useContextArea';

import { messages as messageStore } from '~/types/defaults';
import type { IMessage, IMessageGroup } from '~/types/types';

const messageRefs = ref<Record<string, Element>>({});
const contextArea = useContextArea();
const { setChatMessage, getGroupedChatMessage, groupedChatMessage, clearChatMessage } = useChatMessage();

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

const getMessages = async (): Promise<Ref<IMessageGroup[] | null>> => {

    await setChatMessage(messageStore as IMessage[]);

    const groupedMessages = await getGroupedChatMessage();
    
    return groupedMessages;
}

onMounted(async () => {
    clearChatMessage();
    await getMessages();
    contextArea.scrollToMessage.value = handleScrollToMessage;
});
</script>