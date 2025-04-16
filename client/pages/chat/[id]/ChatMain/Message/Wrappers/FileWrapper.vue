<template>
    <!-- <div class="bg-gray-100 dark:bg-gray-700 p-4 shadow max-w-2xl"
         :class="{'rounded-e-xl rounded-es-xl': sender.type=='customer', 'rounded-tl-xl rounded-bl-xl rounded-br-xl': sender.type=='user'}"
    > -->
    <BaseWrapper :sender="sender">
        <slot/>
    </BaseWrapper>
    <!-- </div> -->
</template>

<script setup lang="ts">
import BaseWrapper from './BaseWrapper.vue';

import type { IContact } from '~/types/types';

const props = defineProps<{
    sender: IContact,
}>()
</script>