<template>
    <ChatWrapper>
        <div v-for="(message, index) in messages">
            <Message :message="message"/>
        </div>
    </ChatWrapper>
</template>

<script setup lang="ts">
import ChatWrapper from './Wrappers/ChatWrapper.vue';
import Message from './Message/Message.vue';
import { messages as messageStore } from '~/types/defaults';

import type { IMessage } from '~/types/types';

const messages = ref<IMessage[]>(messageStore as IMessage[]);
</script>
