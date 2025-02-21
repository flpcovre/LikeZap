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
import Attachment from './Attachment/Attachment.vue';
import Emoji from './Emoji/Emoji.vue';
import Speaker from './Speaker.vue';
import TextArea from './TextArea.vue';

onMounted(() => {
    useFlowbite(() => {
        initFlowbite();
    })
})
</script>