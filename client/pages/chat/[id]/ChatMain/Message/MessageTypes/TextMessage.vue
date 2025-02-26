<template>
    <TextWrapper :sender="sender">
        <p class="whitespace-pre-wrap break-words">{{ content }}</p>
        <!-- <span class="text-xs text-gray-400 block mt-1 text-right text-end">{{ date }}</span> -->
    </TextWrapper>
</template>

<script setup lang="ts">
import type { IContact } from '~/types/types';
import TextWrapper from '../../Wrappers/TextWrapper.vue';

const props = defineProps<{
    content?: string,
    date: string
    sender: IContact
}>();
</script>