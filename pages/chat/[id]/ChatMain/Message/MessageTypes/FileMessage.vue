<template>
    <a :href="attachments.url" download>
        <div class="flex items-center gap-2 mb-2 bg-gray-200 dark:bg-gray-600 p-3 rounded-lg cursor-pointer">
            <Icon ri="file-text-line" class="text-3xl text-indigo-400" />
            <div class="flex flex-col">
                    <p class="whitespace-pre-wrap break-words">{{ attachments.name }}</p>
                    <span class="text-gray-400 text-xs">{{ attachments.size }}</span>
            </div>
        </div>
    </a>
    <p class="whitespace-pre-wrap break-words">{{ content }}</p>
</template>

<script setup lang="ts">
import Icon from '~/components/ui/Icon.vue';
import type { IAttachments } from '~/types/types';

const props = defineProps<{
    content?: string,
    attachments: IAttachments,
}>();
</script>