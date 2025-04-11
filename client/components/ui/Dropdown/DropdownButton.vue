<template>
    <button
        ref="buttonRef"
        :class="customClass"
    >
         <slot/>
    </button>
</template>

<script setup lang="ts">
const props = defineProps({
    customClass: {
        type: [String, Array],
        default: ''
    }   
});

const buttonRef = ref<HTMLElement | null>(null);

defineExpose({
    buttonRef
});
</script>