<template>
    <div class="absolute bottom-[.45rem] right-12">
        <EmojiButton target="emojiDropdown"/>
    </div>
    <EmojiDropdown target="emojiDropdown"/>
</template>

<script setup lang="ts">
import { initFlowbite } from 'flowbite';
import EmojiButton from './EmojiButton.vue';
import EmojiDropdown from './EmojiDropdown.vue';
</script>