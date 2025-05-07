<template>
    <SidebarSection title="Mensagens">

        <ul v-if="conversations">
            <li v-for="(conversation, index) in conversations">
                <Go :to="`/chat/${conversation.id}`">
                    <div
                        class="flex items-center dark:hover:bg-gray-700 rounded-lg py-[15px] px-2 transition-all duration-200">
                        <div
                            class="relative flex-shrink-0 mr-3 ltr:mr-3 rtl:ml-3 flex items-center justify-center w-10 h-10 bg-gray-600 rounded-full">
                            <Icon ri="user-line" customClass="text-gray-300 text-lg"/>
                        </div>
                        <div class="flex-grow overflow-hidden">
                            <h5 class="mb-1 text-base truncate dark:text-gray-50">{{ conversation.contacts[0].firstName + ' ' + conversation.contacts[0].lastName }}</h5>
                            <p class="mb-0 text-gray-500 truncate dark:text-gray-300 text-14">{{ getLastMessage(conversation.messages!) }}</p>
                        </div>
                        <div class="text-gray-500 text-[12px] dark:text-gray-300 flex-shrink-0 self-start">
                            {{ conversation.messages![conversation.messages!.length -1].date }}</div>
                    </div>
                </Go>
            </li>
        </ul>

        <ConversationSkeleton v-else/>

    </SidebarSection>
</template>

<script setup lang="ts">
import SidebarSection from './SidebarSection.vue';
import Icon from '~/components/ui/Icon.vue';
import Go from '~/components/ui/Go.vue';

import ConversationSkeleton from '~/components/ui/Skelenton/ConversationSkeleton.vue';
 
import { conversations as conversationsStorage } from '~/types/defaults';

import type { IConversation, IMessage, MessageType } from '~/types/types';

const conversations = ref<IConversation[] | null>(null);

const getLastMessage = (messages: IMessage[]): string | null => {
    const lastMessage: IMessage = messages[messages.length - 1];
    
    const map: Record<MessageType, string> = {
        text: lastMessage.content ?? '',
        audio: 'Audio',
        image: lastMessage.content ?? 'Imagem',
        file: lastMessage.content ?? 'Documento'
    }
    
    return map[lastMessage.type];
};

const getConversations = async () => {
    await throwDelay(1000);

    conversations.value = conversationsStorage;
    return conversations;
}

onMounted(() => {
    getConversations();
})
</script>