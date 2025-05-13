<template>
    <div class="relative group">
        <div
            :id="target"
            role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip bg-gray-700"
        >
            {{ text }}
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { initFlowbite } from "flowbite";

const props = defineProps({
    text: String,
    target: String
});

onMounted(() => {
    useFlowbite(() => {
        initFlowbite()
    })
})
</script>
