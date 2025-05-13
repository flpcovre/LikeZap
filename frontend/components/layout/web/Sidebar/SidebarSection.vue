<template>
    <div class="p-4 border-b dark:border-gray-700">
        <h1 class="p-2 ml-3 font-semibold text-xl">{{ props.title }}</h1>
    </div>

    <nav class="flex-1 overflow-y-auto overflow-x-hidden scrollbar-custom p-4">
        <slot/>
    </nav>
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
    title: String,
})
</script>