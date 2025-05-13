<template>
  <div class="p-4 flex flex-col space-y-4">

    <NavigationItem target="Conversations" icon="chat-3-fill" notice="10"/>
    <NavigationItem target="NewServices" icon="notification-3-fill" notice="5"/>
    <NavigationItem target="Settings" icon="settings-3-fill"/>

    <ToggleThemeBtn/>

  </div>
</template>
  
<script setup lang="ts">
import NavigationItem from "./NavigationItem.vue";
import ToggleThemeBtn from "./ToggleThemeBtn.vue";
</script>
  