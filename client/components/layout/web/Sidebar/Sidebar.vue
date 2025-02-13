<template>
    <div class="flex flex-col overflow-hidden">
        <component :is="menuComponents[menu]"></component>
    </div>
</template>

<script setup lang="ts">
import Conversations from './Conversations.vue';
import Notifications from './Notifications.vue';
import UserProfile from './UserProfile.vue';
import Settings from './Settings.vue';
import { useMenu } from '@/composables/useMenu';

const menuComponents: Record<string, any> = {
    Conversations,
    Notifications,
    UserProfile,
    Settings,
};

const { menu } = useMenu();
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>