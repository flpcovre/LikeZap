<template>
    <div v-if="speaker" class="flex items-center relative">
        <CancelAudioButton/>
        <Timer/>
        <SendAudioButton/>
    </div>
</template>

<script setup lang="ts">
import CancelAudioButton from './CancelAudioButton.vue';
import SendAudioButton from './SendAudioButton.vue';
import Timer from './Timer.vue';

const { speaker } = useSpeaker();
</script>