<template>
    <div class="flex items-start space-x-3 group" :class="{ 'justify-end': sender.type === 'user' }">
        <MessageActionButton v-if="sender.type === 'user'" />
            <slot />
        <MessageActionButton v-if="sender.type === 'customer'" />
    </div>
</template>

<script setup lang="ts">
import MessageActionButton from '../MessageActions/MessageActionButton.vue';

import type { IContact } from '~/types/types';

const props = defineProps<{
    sender: IContact 
}>();
</script>