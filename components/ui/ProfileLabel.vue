<template>
    <div class="flex justify-start">
        <label class="mb-3">
            <span class="w-13 text-sm text-black opacity-60 dark:text-white dark:opacity-70 font-semibold">
                {{ props.text }}
            </span>
        </label>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    text: String
})
</script>