<template>
    <div class="flex items-start space-x-3 group" :class="{ 'justify-end': sender.type === 'user' }">
        <slot />
    </div>
</template>

<script setup lang="ts">
import type { IContact } from '~/types/types';

const props = defineProps<{
    sender: IContact 
}>();
</script>