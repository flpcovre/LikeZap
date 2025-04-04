<template>
    <button
        :data-dropdown-toggle="target"
        :class="customClass"
    >
         <slot/>
    </button>
</template>

<script setup lang="ts">
const props = defineProps({
    target: {
        type: String,
        required: true
    },
    customClass: {
        type: [String, Array],
        default: ''
    }   
});
</script>