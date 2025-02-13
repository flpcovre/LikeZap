<template>
    <i :class="[iconClass, customClass]" :style="iconColor"></i>
</template>

<script setup lang="ts">
const props = defineProps({
    ri: {
        type: String,
        required: true,
    },
    customClass: {
        type: [String, Array],
        default: "",
    },
    customColor: {
        type: String,
        default: "",
    },
});

const iconClass = computed(() => {
    return `ri-${props.ri}`;
});

const iconColor = computed(() => {
    return props.customColor ? { color: props.customColor } : undefined;
});
</script>
