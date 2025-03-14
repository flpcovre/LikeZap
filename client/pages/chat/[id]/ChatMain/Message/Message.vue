<template>
    <MessageWrapper :sender="message.sender">
        <component
            :is="messageComponent"
            v-bind="messageProps"
            v-if="messageComponent"
        />
    </MessageWrapper>
</template>

<script setup lang="ts">
import MessageWrapper from '../Wrappers/MessageWrapper.vue';
import MessageActionButton from '../MessageActions/MessageActionButton.vue';

import TextMessage from './MessageTypes/TextMessage.vue';
import AudioMessage from './MessageTypes/AudioMessage.vue';
import ImageMessage from './MessageTypes/ImageMessage.vue';

import type { IMessage, MessageType } from '~/types/types';

const props = defineProps<{ message: IMessage }>();

const messageComponent = computed<Component | null>(() => {
    if (props.message.type) {

        const components: Record<MessageType, Component> = {
            text: TextMessage,
            audio: AudioMessage,
            image: ImageMessage,
        };

        return components[props.message.type] || null;
    }
    return null;
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
        ...(type === 'image' ? { content, attachments } : {}),
        ...(type === 'audio' ? { audio } : {})
    };
});
</script>
