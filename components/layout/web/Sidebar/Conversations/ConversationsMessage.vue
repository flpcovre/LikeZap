<template>
    <div class="flex-grow overflow-hidden">
        <h5 class="mb-1 text-base truncate dark:text-gray-50">{{ conversation.contacts[0].firstName + ' ' +
            conversation.contacts[0].lastName }}</h5>
        <p class="mb-0 text-gray-500 truncate dark:text-gray-300 text-14" v-html="getLastMessage(conversation.messages!)"></p>
    </div>
</template>

<script setup lang="ts">
import type { IConversation, IMessage, MessageType } from '~/types/types';

const props = defineProps<{ conversation: IConversation }>();

const getLastMessage = (messages: IMessage[]): string | null => {
    const lastMessage: IMessage = messages[messages.length - 1];
    
    const map: Record<MessageType, string> = {
        text:  lastMessage.content ?? '',
        audio: '<i class="ri-mic-line"></I> Audio',
        image: '<i class="ri-camera-line"></I>' + (lastMessage.content ?? ' Imagem'),
        file:  '<i class="ri-file-text-line"></I>' + (lastMessage.content ?? ' Documento')
    }
    
    return map[lastMessage.type];
};
</script>