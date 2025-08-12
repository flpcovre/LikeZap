<template>
    <div class="flex">
        <div class="flex justify-center items-center bg-gray-100 dark:bg-gray-600 rounded-full w-7 h-7">
            <Icon ri="question-line"/>
        </div>

        <div class="ms-3 text-sm font-normal">
            <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">{{ getCustomerName(service.contacts) }}</span>
            <div class="mb-2 text-sm font-normal">{{ service.subject }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Icon from '~/components/ui/Icon.vue';

import type { IContact, IConversation } from '~/types/types';

const props = defineProps<{
    service: IConversation
}>();

const getCustomerName = (contacts: IContact[]): string | null => {
    const customer = contacts.find(contact => contact.type == 'customer');

    if (customer) {
        return customer.firstName + ' ' + customer.lastName;
    }

    return null;
}
</script>