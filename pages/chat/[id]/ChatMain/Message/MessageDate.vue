<template>
    <span class="message-time">{{ timeOnly }}</span>
</template>

<script setup lang="ts">
const props = defineProps({
    date: String
})

const timeOnly = computed(() => {
    if (!props.date) return '';
    
    const timePart = props.date.split(' ')[1];
    if (timePart) {
        return timePart.split(':').slice(0, 2).join(':');
    }
    
    return '';
});
</script>