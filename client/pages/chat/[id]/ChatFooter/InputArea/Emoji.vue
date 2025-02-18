<template>
    <div class="absolute bottom-[.45rem] right-12">
        <button type="button" data-dropdown-toggle="emojiDropdown" data-dropdown-placement="top"
            class="group flex justify-center items-center rounded-full outline-none focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-700 focus:bg-gray-50 dark:focus:bg-gray-600 transition-all duration-200 toggle-picker-button group w-7 h-7 md:mr-5 xs:mr-4">
            <i class="ri-emoji-sticker-line text-[20px] opacity-75"></i>
        </button>
    </div>

    <div ref="emojiDropdown" id="emojiDropdown" class="z-10 hidden">
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { Picker } from 'emoji-mart'
import eventBus from '~/utils/eventBus';

const { theme } = useTheme();

const emojiDropdown = ref<HTMLDivElement | null>(null);
let PickerInstance: Picker | null = null

const createPicker = () => {
    if (PickerInstance) {
        PickerInstance = null;

        if (emojiDropdown.value) {
            emojiDropdown.value.replaceChildren()
        }
    }

    PickerInstance = new Picker({
      onEmojiSelect: (emoji: { native: any; }) => {
        addEmojiToTextArea(emoji.native)
      },
      locale: 'pt',
      previewPosition: 'none',
      theme: theme.value,
      parent: emojiDropdown.value,
    })
}

const addEmojiToTextArea = (emoji: { native: any; }) => {
    eventBus.emit('addEmojiToTextArea', emoji);
}

watch(() => theme.value, () => {
    createPicker();
});

onMounted(() => {
    createPicker();
});
</script>
