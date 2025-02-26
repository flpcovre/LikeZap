<template>
    <!-- <div class="w-[45vh] bg-gray-100 dark:bg-gray-700 p-4 rounded-e-xl rounded-es-xl shadow max-w-2xl"> -->
    <MediaWrapper :sender="sender">
        <a href="#" class="block">
            <img :src="attachments?.url" alt="Imagem" class="object-cover rounded-lg">
            <p v-if="content" class="whitespace-pre-wrap break-words mt-2">{{ content }}</p>
        </a>
        <!-- <span class="text-xs text-gray-400 block mt-1 text-right">{{ date }}</span> -->
    </MediaWrapper>    
    <!-- </div> -->
</template>

<script setup lang="ts">
import MediaWrapper from '../../Wrappers/MediaWrapper.vue';
import TextWrapper from '../../Wrappers/TextWrapper.vue';
import type { IAttachments, IContact } from '~/types/types';

const props = defineProps<{
    content?: string,
    date: string,
    attachments?: IAttachments,
    sender: IContact
}>();
</script>