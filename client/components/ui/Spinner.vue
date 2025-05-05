<template>
    <div class="flex items-center justify-center">
      <div 
        class="animate-spin rounded-full"
        :class="[borderColor, borderTColor, borderSize, width, height]"
      ></div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    borderColor: String,
    borderTColor: String,
    borderSize: String,
    width: String,
    height: String,
})
</script>