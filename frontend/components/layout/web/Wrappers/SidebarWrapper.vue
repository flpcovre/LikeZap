<template>
  <aside
    class="w-full md:w-[425px] dark:bg-gray-800 border-r dark:border-gray-700 grid grid-cols-[auto,1fr] transition-all duration-300 max-md:hidden"
    ref="aside"
    >
    <slot />
  </aside>
</template>

<script setup lang="ts">

const aside = ref<HTMLElement | null>(null);

onMounted(() => {
  aside.value?.classList.remove('max-md:hidden');
})
</script>