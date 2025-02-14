<template>
  <div class="p-4 flex flex-col space-y-4">
    <button
      class="p-2 rounded-lg relative cursor-pointer"
      :class="getButtonClass('Conversations')"
      @click="setMenu('Conversations')"
      data-tooltip-target="tooltip-conversations" 
      data-tooltip-placement="right"
    >
        <Icon ri="chat-3-fill" :customClass="['text-xl', getIconClass('Conversations')]"/>
        <NotificationNotice text="10"/>
    </button>

    <Tooltip text="Conversas" target="tooltip-conversations"/>

    <button
      class="p-2 rounded-lg relative cursor-pointer"
      :class="getButtonClass('Notifications')"
      @click="setMenu('Notifications')"
      data-tooltip-target="tooltip-notifications" 
      data-tooltip-placement="right"
    >
      <Icon ri="notification-3-fill" :customClass="['text-xl', getIconClass('Notifications')]"/>
      <NotificationNotice text="5"/>
    </button>

    <Tooltip text="Notificações" target="tooltip-notifications"/>

    <button
      class="p-2 rounded-lg cursor-pointer"
      :class="getButtonClass('Settings')"
      @click="setMenu('Settings')"
      data-tooltip-target="tooltip-settings" 
      data-tooltip-placement="right"
    >
      <Icon ri="settings-3-fill" :customClass="['text-xl', getIconClass('Settings'), '']"/>
    </button>

    <Tooltip text="Configurações" target="tooltip-settings"/>

    <button
      class="p-2 rounded-lg cursor-pointer"
      @click="toggleTheme();"
      data-tooltip-target="tooltip-theme" 
      data-tooltip-placement="right"
    >
      <Icon :ri="theme == 'dark' ? 'moon-fill' : 'sun-line'" customClass="text-xl text-gray-400"/>
    </button>

    <Tooltip :text="theme == 'dark' ? 'Escuro' : 'Claro'" target="tooltip-theme"/>

  </div>
</template>
  
<script setup lang="ts">
import NotificationNotice from "~/components/ui/NotificationNotice.vue";
import Icon from "~/components/ui/Icon.vue";
import Tooltip from "~/components/ui/Tooltip.vue";

const { theme, toggleTheme } = useTheme();
const { setMenu, getButtonClass, getIconClass } = useMenu();

useHead({
  script: [ {children: `if (localStorage.theme === "dark" || (!('theme' in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.toggle("dark", true);
  }`} ]
})
</script>
  