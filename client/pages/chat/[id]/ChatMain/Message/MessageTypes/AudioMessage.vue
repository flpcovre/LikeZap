<template>
    <AudioWrapper :sender="sender">
        <div class="flex items-center space-x-4">
            <button
                class="w-9 h-9 bg-violet-500 rounded-[.75rem] flex items-center justify-center hover:bg-violet-400">
                <Icon ri="play-line" customClass="text-xl"/>
            </button>
            <div ref="wavesurferDiv" class="flex-1"></div>
            <span id="timeAudio" class="text-xs block mt-1 text-right">{{ audio.duration }}</span>
        </div>
        <!-- <span class="text-xs text-gray-400 block mt-1 text-right">{{ date }}</span> -->
    </AudioWrapper>
</template>

<script setup lang="ts">
import Icon from '~/components/ui/Icon.vue';
import AudioWrapper from '../../Wrappers/AudioWrapper.vue';

import WaveSurfer from 'wavesurfer.js';
import type { IAudio, IContact } from '~/types/types';

const props = defineProps<{
    date: string,
    audio: IAudio,
    sender: IContact
}>()

const wavesurfer = ref<WaveSurfer | null>(null);
const wavesurferDiv = ref<HTMLDivElement | null>(null);

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
})
</script>