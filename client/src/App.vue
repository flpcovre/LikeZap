<template>
  <RouterView />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import { RouterView } from 'vue-router';

onMounted(() => {
    initFlowbite();
})
</script>