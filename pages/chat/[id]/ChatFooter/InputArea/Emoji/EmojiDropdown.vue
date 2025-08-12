<template>
    <div ref="emojiDropdown" :id="target" class="z-10 hidden"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import eventBus from '~/utils/eventBus';

const props = defineProps({
    target: {
        type: String,
        required: true
    }
})

const { theme } = useTheme();

const EmojiMart = await import('emoji-mart');

const emojiDropdown = ref<HTMLDivElement | null>(null);

let PickerInstance: any = null;

const createPicker = () => {
    if (PickerInstance) {
        PickerInstance = null;

        if (emojiDropdown.value) {
            emojiDropdown.value.replaceChildren()
        }
    }

    PickerInstance = new EmojiMart.Picker({
      onEmojiSelect: (emoji: { native: any; }) => {
        addEmojiToTextArea(emoji.native)
      },
      locale: 'pt',
      previewPosition: 'none',
      theme: theme.value,
      parent: emojiDropdown.value,
    });

    setTimeout(() => {
        const shadowRoot = document.querySelector('em-emoji-picker')?.shadowRoot;
        if (shadowRoot && theme.value == 'dark') {
            const rootElement = shadowRoot.querySelector('#root') as HTMLElement || null;

            if (rootElement) {
                rootElement.style.setProperty('--em-rgb-background', '55, 65, 81');
                rootElement.style.setProperty('--em-rgb-color', '255, 255, 255');
                rootElement.style.setProperty('--em-rgb-accent', '34, 102, 237');
                rootElement.style.setProperty('--em-rgb-input', '55, 65, 81');
                rootElement.style.setProperty('--em-color-border-over', 'rgba(255, 255, 255, 0.8)');
            }
        }
    }, 250);
}

const addEmojiToTextArea = (emoji: { native: any; }) => {
    eventBus.emit('addEmojiToTextArea', emoji);
}

watch(() => theme.value, () => {
    createPicker();
});

onMounted(async () => {
    createPicker();
});
</script>