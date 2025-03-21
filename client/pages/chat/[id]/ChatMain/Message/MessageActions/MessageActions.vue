<template>
    <MessageActionButton :target="target"/>
    <MessageActionDropdown :target="target"/>
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
