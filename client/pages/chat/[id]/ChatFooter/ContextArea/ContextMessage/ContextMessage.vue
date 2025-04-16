<template>
    <div class="bg-gray-500 border-l-4 border-indigo-600 p-3 rounded-lg max-w-2xl mb-2 max-w-full w-full">
        <div class="text-sm text-gray-400 mb-1">{{ message?.sender.firstName + ' ' + message?.sender.lastName }}</div>

        <component :is="contextMessage" v-bind:content="message?.content"/>
    </div>
</template>

<script setup lang="ts">
import type { IMessage, MessageType } from '~/types/types';

import ContextTextMessage from './ContextTextMessage.vue';
import ContextImageMessage from './ContextImageMessage.vue';
import ContextAudioMessage from './ContextAudioMessage.vue';
import ContextFileMessage from './ContextFileMessage.vue';

const props = defineProps<{
    message: IMessage | null;
}>();

const contextMessage = computed<Component>(() => {

    const components: Record<MessageType, Component> = {
        text: ContextTextMessage,
        image: ContextImageMessage,
        audio: ContextAudioMessage,
        file: ContextFileMessage
    };

    return components[props.message?.type as MessageType] || null;
});
</script>