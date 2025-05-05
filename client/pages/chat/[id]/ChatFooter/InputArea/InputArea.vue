<template>
    <div class="flex items-center relative">
        <Attachment/>
        <TextArea/>
        <Emoji/>
        <Speaker/>
    </div>
</template>

<script setup lang="ts">
import { initFlowbite } from 'flowbite';
import Emoji from './Emoji/Emoji.vue';
import Attachment from './Attachment.vue';
import Speaker from './Speaker.vue';
import TextArea from './TextArea.vue';

onMounted(() => {
    useFlowbite(() => {
        initFlowbite();
    })
})
</script>