<template>
    <MessageActionButton ref="actionButtonRef" :target="target"/>
    <MessageActionDropdown ref="actionDropdownRef" :target="target" />
</template>

<script setup lang="ts">
import MessageActionButton from './MessageActionButton.vue';
import MessageActionDropdown from './MessageActionDropdown.vue';

const props = defineProps({
    target: {
        type: Number,
        required: true
    }
})
</script>
