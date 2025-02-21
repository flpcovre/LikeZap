<template>
    <!-- Customer Audio Message -->
    <div class="flex items-start space-x-3 group">
        <div class="w-[40vh] bg-gray-100 dark:bg-gray-700 p-4 rounded-e-xl rounded-es-xl shadow max-w-2xl">
            <div class="flex items-center space-x-4">
                <button onclick="toggleAudio(this)"
                    class="w-9 h-9 bg-violet-500 rounded-[.75rem] flex items-center justify-center hover:bg-violet-400">
                    <i class="ri-play-line text-xl"></i>
                </button>
                <div id="waveform" class="flex-1"></div>
                <span id="timeAudio" class="text-xs block mt-1 text-right">00:00</span>
            </div>
            <span class="text-xs text-gray-400 block mt-1 text-end">10:30 AM</span>
        </div>
        <a class="hidden group-hover:flex cursor-pointer">
            <i class="ri-arrow-down-s-line text-lg text-gray-400"></i>
        </a>
    </div>

    <!-- User Audio Message -->
    <div class="flex items-start space-x-3 justify-end group">
        <a class="hidden group-hover:flex cursor-pointer">
            <i class="ri-arrow-down-s-line text-lg text-gray-400"></i>
        </a>
        <div
            class="w-[40vh] bg-gray-100 dark:bg-gray-700 p-4 rounded-tl-xl rounded-bl-xl rounded-br-xl shadow max-w-2xl">
            <div class="flex items-center space-x-4">
                <button onclick="toggleAudio(this)"
                    class="w-9 h-9 bg-violet-500 rounded-[.75rem] flex items-center justify-center hover:bg-violet-400">
                    <i class="ri-play-line text-xl"></i>
                </button>
                <div id="waveform" class="flex-1"></div>
                <span id="timeAudio" class="text-xs block mt-1 text-right">00:00</span>
            </div>
            <span class="text-xs text-gray-400 block mt-1 text-right">10:30 AM</span>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>