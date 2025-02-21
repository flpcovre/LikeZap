<template>
    <div class="p-3 dark:bg-gray-800">
        <ContextArea/>
        <InputArea v-if="!speaker"/>
        <SpeakerArea/>
    </div>
</template>

<script setup lang="ts">
import ContextArea from './ContextArea/ContextArea.vue';
import InputArea from './InputArea/InputArea.vue';
import SpeakerArea from './SpeakerArea/SpeakerArea.vue';

const { speaker } = useSpeaker();
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
