<template>
  <i :class="[iconClass, customClass]" :style="styleColor"></i>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  i: {
    type: String,
    required: true
  },
  customClass: {
    type: String,
    default: ''
  },
  customColor: {
    type: String,
    default: ''
  }
});

const styleColor = computed(() => {
  return props.customColor ? { color: props.customColor } : {};
});

const iconClass = computed(() => `ri-${props.i}`);
</script>