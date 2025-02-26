<template>
    <div class="flex items-start space-x-3 group" :class="{ 'justify-end': message.sender.type === 'user' }">
        <MessageActionButton v-if="message.sender.type === 'user'" />

        <component
            :is="messageComponent"
            v-bind="messageProps"
            v-if="messageComponent"
        />

        <MessageActionButton v-if="message.sender.type === 'customer'" />
    </div>
</template>

<script setup lang="ts">
import MessageActionButton from '../MessageActions/MessageActionButton.vue';
import TextMessage from './MessageTypes/TextMessage.vue';
import MediaMessage from './MessageTypes/MediaMessage.vue';
import AudioMessage from './MessageTypes/AudioMessage.vue';

import type { IMessage } from '~/types/types';

const props = defineProps<{ message: IMessage }>();

const messageComponent = computed((): any => {
    if (props.message.type) {
        const componentMap: Record<string, any> = {
            text: TextMessage,
            media: MediaMessage,
            audio: AudioMessage
        };
        return componentMap[props.message.type] || null;
    }
});

const messageProps = computed(() => {
    const { 
        type, 
        content, 
        date, 
        sender, 
        attachments, 
        audio 
    } = props.message;

    return {
        date,
        sender,
        ...(type === 'text' ? { content } : {}),
        ...(type === 'media' ? { content, attachments } : {}),
        ...(type === 'audio' ? { audio } : {})
    };
});
</script>
