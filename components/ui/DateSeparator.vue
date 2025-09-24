<template>
    <div class="date-separator-wrapper">
        <div class="date-separator">
            <span class="date-label">{{ dateLabel }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    dateLabel: string;
}

defineProps<Props>();
</script>
