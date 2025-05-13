<template>
    <div class="flex items-center space-x-4">
        <button 
            class="w-9 h-9 bg-violet-500 rounded-[.75rem] flex items-center justify-center hover:bg-violet-400"
            @click="toggleAudioState"
        >
            <Icon 
                v-if="isReady && !audioPlaying"
                ri="play-line" 
                customClass="text-xl text-white"
            />
            <Icon 
                v-if="audioPlaying"
                ri="pause-mini-line" 
                customClass="text-xl text-white"
            />

            <Spinner
                v-if="!isReady"
                borderColor="border-violet-500"
                borderTColor="border-t-violet-600"
                borderSize="border-4"
                width="w-6"
                height="h-6"
            />
        </button>
        <div ref="wavesurferDiv" class="flex-1"></div>
        <span class="text-xs block mt-1 text-right">{{ durationRemaining }}</span>
    </div>
</template>

<script setup lang="ts">
import Icon from '~/components/ui/Icon.vue';
import Spinner from '~/components/ui/Spinner.vue';

import WaveSurfer from 'wavesurfer.js';
import type { IAudio } from '~/types/types';

const props = defineProps<{
    audio: IAudio,
}>()

const wavesurfer = ref<WaveSurfer | null>(null);
const wavesurferDiv = ref<HTMLDivElement | null>(null);
const duration = ref<number | null>(null);
const currentTime = ref<number>(0);
const isReady = ref<boolean>(false);
const audioPlaying = ref<boolean>(false);

const toggleAudioState = () => {
    if (wavesurfer.value) {
        audioPlaying.value = !audioPlaying.value;
        wavesurfer.value.playPause();
    }
}

const durationRemaining = computed(() => {
    if (duration.value === null) return '00:00';
    const remaining = Math.max(0, duration.value - currentTime.value);
    return secodsToHis(remaining);
});

onMounted(async() => {
    if (!wavesurferDiv.value) return;

    wavesurfer.value = WaveSurfer.create({
        container: wavesurferDiv.value,
        waveColor: '#4F4A85',
        progressColor: '#383351',
        barWidth: 3,
        height: 50,
        barRadius: 4
    });  

    wavesurfer.value.load(props.audio.src);  

    wavesurfer.value.on('ready', () => {
        if (wavesurfer.value) {
            duration.value = wavesurfer.value.getDuration();
        }
        isReady.value = true;
    });

    wavesurfer.value.on('audioprocess', () => {
        if (wavesurfer.value) {
            currentTime.value = wavesurfer.value.getCurrentTime();
        }
    });

    wavesurfer.value.on('finish', () => {
        if (wavesurfer.value) {
            audioPlaying.value = false;
            wavesurfer.value.seekTo(0);
        }
    })
})
</script>