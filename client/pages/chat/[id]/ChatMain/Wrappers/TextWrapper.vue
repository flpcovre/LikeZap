<template>
    <div class="bg-gray-100 dark:bg-gray-700 p-4 shadow max-w-2xl"
         :class="{'rounded-e-xl rounded-es-xl': sender.type=='customer', 'rounded-tl-xl rounded-bl-xl rounded-br-xl': sender.type=='user'}"
    >
        <slot/>
        
        <MessageDate :date="date"/>
    </div>
</template>

<script setup lang="ts">
import type { IContact } from '~/types/types';
import MessageDate from '../Message/MessageDate.vue';

const props = defineProps<{
    sender: IContact,
    date: string
}>()
</script>