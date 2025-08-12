<template>
    <button
      class="p-2 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-110"
      @click="toggleTheme();"
      data-tooltip-target="tooltip-theme" 
      data-tooltip-placement="right"
    >
      <Icon :ri="theme == 'dark' ? 'moon-fill' : 'sun-line'" customClass="text-xl text-gray-400"/>
    </button>

    <Tooltip :text="theme == 'dark' ? 'Escuro' : 'Claro'" target="tooltip-theme"/>
</template>

<script setup lang="ts">
import Icon from "~/components/ui/Icon.vue";
import Tooltip from "~/components/ui/Tooltip.vue";

const { theme, toggleTheme } = useTheme();

useHead({
  script: [ {children: `if (localStorage.theme === "dark" || (!('theme' in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.toggle("dark", true);
  }`} ]
})
</script>