<template>
  <aside
    class="w-full md:w-[425px] dark:bg-gray-800 border-r dark:border-gray-700 grid grid-cols-[auto,1fr] transition-all duration-300 mobile"
    ref="aside"
    >
    <slot />
  </aside>
</template>

<script setup lang="ts">

const aside = ref<HTMLElement | null>(null);

onMounted(() => {
  const checkMobile = () => {
    if (window.innerWidth <= 768) {
        aside.value?.classList.add('mobile');
    } else {
      aside.value?.classList.remove('mobile');
    }
  };

  checkMobile();
  window.addEventListener('resize', checkMobile);
})
</script>

<style scoped>
@media (max-width: 768px) {
  .mobile {
    display: none !important;
  }
}
</style>