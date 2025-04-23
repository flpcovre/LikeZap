<template>
    <div class="bg-gray-500 border-l-4 border-indigo-600 p-3 rounded-lg max-w-2xl mb-2 max-w-full w-full cursor-pointer">
        <div class="text-sm text-gray-400 mb-1">{{ message?.sender.firstName + ' ' + message?.sender.lastName }}</div>

        <component :is="contextMessage.template" v-bind="contextMessage.props"/>
    </div>
</template>

<script setup lang="ts">
import type { IMessage, MessageType, ContextMessage } from '~/types/types';

import ContextTextMessage from './ContextTextMessage.vue';
import ContextImageMessage from './ContextImageMessage.vue';
import ContextAudioMessage from './ContextAudioMessage.vue';
import ContextFileMessage from './ContextFileMessage.vue';

const props = defineProps<{
    message: IMessage | null;
}>();

const contextMessage = computed<ContextMessage>(() => {

    const components: Record<MessageType, ContextMessage> = {
        text: {
            template: ContextTextMessage,
            props: {
                content: props.message?.content
            }
        },
        image: {
            template: ContextImageMessage,
            props: {
                content: props.message?.content
            }
        },
        audio: {
            template: ContextAudioMessage
        },
        file: {
            template: ContextFileMessage,
            props: {
                content: props.message?.content,
                fileName: props.message?.attachments?.name,
            }
        }
    };

    return components[props.message?.type as MessageType] || null;
});
</script>