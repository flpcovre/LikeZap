<template>
    <div class="flex flex-col overflow-hidden">
        <component :is="menuComponents[menu]" />
    </div>
</template>

<script setup lang="ts">
import Conversations from './Conversations.vue';
import Notifications from './Notifications.vue';
import UserProfile from './UserProfile.vue';
import Settings from './Settings.vue';

const menuComponents: Record<string, any> = {
    Conversations,
    Notifications,
    UserProfile,
    Settings
};

const { menu } = useMenu();
</script>