<template>
    <div class="text-gray-500 text-[12px] dark:text-gray-300 flex-shrink-0 self-start">
        {{ conversation.messages![conversation.messages!.length - 1].date }}
    </div>
</template>

<script setup lang="ts">
import type { IConversation } from '~/types/types';

const props = defineProps<{conversation: IConversation}>();
</script>