<template>
    <ChatWrapper>
        <div v-for="(message, index) in messages">
            <Message :message="message"/>
        </div>
    </ChatWrapper>
</template>

<script setup lang="ts">
import ChatWrapper from './ChatWrapper.vue';
import Message from './Message/Message.vue';
import type { IMessage } from '~/types/types';

const messages: Ref = computed<IMessage[]>(() => {
    return [
        {
            type: 'text',
            user_id: null,
            customer_id: 1,
            content: 'Teste Texto',
            date: '3 hours later'
        },
        {
            type: 'media',
            user_id: 1,
            customer_id: null,
            content: 'Teste Midia',
            date: '2 hours later'
        }
    ]
})
</script>
