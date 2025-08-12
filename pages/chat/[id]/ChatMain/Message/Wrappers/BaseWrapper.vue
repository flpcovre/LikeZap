<template>
    <div ref="rootDiv"
         class="bg-gray-100 dark:bg-gray-700 p-3 shadow max-w-2xl text-sm"
         :class="[{'rounded-e-xl rounded-es-xl': sender.type=='customer', 'rounded-tl-xl rounded-bl-xl rounded-br-xl': sender.type=='user'}, customClass]"
    >
        <slot/>
    </div>
</template>

<script setup lang="ts">
import type { IContact } from '~/types/types';

const props = defineProps<{
    sender: IContact
    customClass?: string | Array<string>
}>();

const rootDiv = ref<HTMLDivElement | null>(null);

provide('rootDiv', rootDiv);
</script>