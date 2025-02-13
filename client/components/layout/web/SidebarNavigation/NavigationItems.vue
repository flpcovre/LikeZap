<template>
  <div class="p-4 flex flex-col space-y-4">
    <button
      class="p-2 rounded-lg relative cursor-pointer"
      :class="getButtonClass('Conversations')"
      title="Chat"
      @click="setMenu('Conversations')"
    >
        <Icon ri="chat-3-fill" :customClass="['text-xl', getIconClass('Conversations')]"/>
        <NotificationNotice text="10"/>
    </button>

    <button
      class="p-2 rounded-lg relative cursor-pointer"
      :class="getButtonClass('Notifications')"
      title="Notificações"
      @click="setMenu('Notifications')"
    >
      <Icon ri="notification-3-fill" :customClass="['text-xl', getIconClass('Notifications')]"/>
      <NotificationNotice text="5"/>
    </button>

    <button
      class="p-2 rounded-lg cursor-pointer"
      :class="getButtonClass('Settings')"
      title="Configurações"
      @click="setMenu('Settings')"
    >
      <Icon ri="settings-3-fill" :customClass="['text-xl', getIconClass('Settings')]"/>
    </button>

    <button
      class="p-2 rounded-lg cursor-pointer"
      title="Modo Escuro"
      @click="toggleTheme()"
    >
      <Icon ri="moon-fill" customClass="text-xl dark:text-gray-400"/>
    </button>
  </div>
</template>
  
<script setup lang="ts">
import NotificationNotice from "./NotificationNotice.vue";
import Icon from "~/components/ui/Icon.vue";

const { toggleTheme } = useTheme();
const { setMenu, getButtonClass, getIconClass } = useMenu();
</script>
  