<template>
    <div ref="emojiDropdown" :id="target" class="z-10 hidden"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { Picker } from 'emoji-mart'
import eventBus from '~/utils/eventBus';

const props = defineProps({
    target: {
        type: String,
        required: true
    }
})

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