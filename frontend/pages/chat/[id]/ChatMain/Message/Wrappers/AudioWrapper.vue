<template>
    <BaseWrapper :sender="sender" customClass="w-[40vh]">
        <slot/>
    </BaseWrapper>
</template>

<script setup lang="ts">
import BaseWrapper from './BaseWrapper.vue';

import type { IContact } from '~/types/types';

const props = defineProps<{
    sender: IContact
}>()
</script>