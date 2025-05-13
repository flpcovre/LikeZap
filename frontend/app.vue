<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { initFlowbite } from 'flowbite';
import { useFlowbite } from '~/composables/useFlowbite';

onMounted(() => {
    useFlowbite(() => {
        initFlowbite();
    })
})
</script>

<style>
.scrollbar-custom::-webkit-scrollbar {
    width: 3px;
}

.scrollbar-custom::-webkit-scrollbar-track {
    @apply bg-gray-200 dark:bg-gray-800;
    border-radius: 6px;
}

.scrollbar-custom::-webkit-scrollbar-thumb {
    @apply bg-gray-400 dark:bg-gray-600;
    border-radius: 6px;
}

.scrollbar-custom::-webkit-scrollbar-thumb:hover {
    @apply bg-gray-500 dark:bg-gray-700;
    background: #888;
}
</style>