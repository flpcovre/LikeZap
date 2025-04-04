<template>
    <div
        :id="target"
        class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-600"
        :class="customClass"
    >
        <slot/>
    </div>
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
})
</script>