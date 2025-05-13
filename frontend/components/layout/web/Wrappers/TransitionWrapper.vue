<template>
    <Transition name="fade" mode="out-in">
        <div :key="val" class="transition-wrapper flex-1 overflow-hidden">
            <slot/>
        </div>
    </Transition>
</template>

<script setup lang="ts">
const props = defineProps({
    val: String
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.transition-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
