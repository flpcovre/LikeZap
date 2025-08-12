export function useViewPort() {
  const isMobile = ref(false);
  const screenWidth = ref(0);

  const updateWidth = () => {
    if (typeof window !== 'undefined') {
      screenWidth.value = window.innerWidth;
      isMobile.value = window.innerWidth < 768;
    }
  };

  onMounted(() => {
    updateWidth();
    window.addEventListener('resize', updateWidth);
  });

  onUnmounted(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', updateWidth);
    }
  });

  return { isMobile, screenWidth };
}
