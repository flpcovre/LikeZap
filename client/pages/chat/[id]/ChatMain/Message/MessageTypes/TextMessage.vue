<template>
    <TextWrapper :sender="sender" :date="date">
        <p class="whitespace-pre-wrap break-words">{{ content }}</p>
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