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
    background: #333;
    border-radius: 6px;
}

.scrollbar-custom::-webkit-scrollbar-thumb {
    background: #555;
    border-radius: 6px;
}

.scrollbar-custom::-webkit-scrollbar-thumb:hover {
    background: #888;
}
</style>