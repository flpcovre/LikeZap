<template>
    <SidebarSection title="Mensagens">

        <ul v-if="conversations">
            <li v-for="(conversation, index) in conversations">
                <Go :to="`/chat/${conversation.id}`">
                    <div class="flex items-center dark:hover:bg-gray-700 rounded-lg py-[15px] px-2 transition-all duration-200">
                        <ConversationsAvatar/>

                        <ConversationsMessage :conversation="conversation"/>

                        <ConversationsMessageDate :conversation="conversation"/>
                    </div>
                </Go>
            </li>
        </ul>

        <ConversationSkeleton v-else/>

    </SidebarSection>
</template>

<script setup lang="ts">
import ConversationsAvatar from './ConversationsAvatar.vue';
import ConversationsMessage from './ConversationsMessage.vue';
import ConversationsMessageDate from './ConversationsMessageDate.vue';

import SidebarSection from '../SidebarSection.vue';
import Go from '~/components/ui/Go.vue';

import ConversationSkeleton from '~/components/ui/Skelenton/ConversationSkeleton.vue';
 
import { conversations as conversationsStorage } from '~/types/defaults';

import type { IConversation } from '~/types/types';

const conversations = ref<IConversation[] | null>(null);

const getConversations = async () => {
    await throwDelay(1000);

    conversations.value = conversationsStorage;
    return conversations;
}

onMounted(() => {
    getConversations();
})
</script>