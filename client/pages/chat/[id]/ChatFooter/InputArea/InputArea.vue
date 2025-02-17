<template>
    <div class="flex items-center relative">
        <Attachment/>
        <TextArea/>
        <Emoji/>
        <Speaker/>
    </div>
</template>

<script setup lang="ts">
import Attachment from './Attachment/Attachment.vue';
import Emoji from './Emoji.vue';
import Speaker from './Speaker.vue';
import TextArea from './TextArea.vue';
</script>