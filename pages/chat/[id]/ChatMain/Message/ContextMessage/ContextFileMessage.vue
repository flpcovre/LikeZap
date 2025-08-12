<template>
    <div class="flex flex-row items-center gap-2">
        <Icon ri="file-text-line" customClass="text-indigo-300"/>
        <p class="whitespace-pre-wrap break-words">{{ content ?? fileName }}</p>
    </div>
</template>

<script setup lang="ts">
import Icon from '~/components/ui/Icon.vue';

const props = defineProps<{
    content?: String,
    fileName: String,
}>()
</script>