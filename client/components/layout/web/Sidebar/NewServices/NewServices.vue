<template>
    <SidebarSection title="Novos Atendimentos">
        <div class="relative group w-full p-2"
            v-if="newServices"
            v-for="(service, index) in newServices"
        >
           
            <NewServicesCustomer :service="service"/>
            
            <NewServicesActions>
                <NewServicesButton text="Aceitar" bgColor="bg-indigo-500" bgColorHover="hover:bg-indigo-600"/>
                <NewServicesButton text="Transferir" bgColor="bg-gray-500" bgColorHover="hover:bg-gray-600"/>
            </NewServicesActions>

        </div>

        <ConversationSkeleton v-else/>

    </SidebarSection>
</template>

<script setup lang="ts">
import SidebarSection from '../SidebarSection.vue';

import NewServicesCustomer from './NewServicesCustomer.vue';
import NewServicesActions from './NewServicesActions.vue';
import NewServicesButton from './NewServicesButton.vue';

import ConversationSkeleton from '~/components/ui/Skelenton/ConversationSkeleton.vue';

import type { IConversation } from '~/types/types';
import { newServices as newServicesStorage } from '~/types/defaults'

const newServices = ref<IConversation[] | null>(null);

const getNewServices = async (): Promise<void> => {
    await throwDelay(2000);

    newServices.value = newServicesStorage as IConversation[];
}

onMounted(async () => {
    await getNewServices();
})
</script>