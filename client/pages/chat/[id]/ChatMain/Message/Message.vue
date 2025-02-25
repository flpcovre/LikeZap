<template>
    <div class="flex items-start space-x-3 group" :class="message.user_id?'justify-end':''">
        <MessageActionButton v-if="message.user_id"/>

        <TextMessage  
            v-if="message.type=='text'"
            :content="message.content"
            :date="message.date"
        />
        
        <MediaMessage v-if="message.type=='media'"/>

        <MessageActionButton v-if="message.customer_id"/>
    </div>
</template>

<script setup lang="ts">
import TextMessage from './MessageTypes/TextMessage.vue';
import MessageActionButton from '../MessageActions/MessageActionButton.vue';
import MediaMessage from './MessageTypes/MediaMessage.vue';
import AudioMessage from './MessageTypes/AudioMessage.vue';
import ContextMessage from './MessageTypes/ContextMessage.vue';

import type { IMessage } from '~/types/types';

const props = defineProps<{
    message: IMessage
}>();
</script>