<template>
    <div id="attachmentsDropdown"
        class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownTopButton">
            <AttachmentItem icon="file-text-fill" text="Documentos"/>
            <AttachmentItem icon="image-fill" text="Fotos"/>
        </ul>
    </div>
</template>

<script setup lang="ts">
import AttachmentItem from './AttachmentItem.vue';
</script>
