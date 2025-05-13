<template>
  <div class="flex flex-col overflow-hidden">
    <TransitionWrapper :val="menu">
      <component :is="menuComponents[menu]" class="h-full"></component>
    </TransitionWrapper>
  </div>
</template>

<script setup lang="ts">
import Conversations from './Conversations/Conversations.vue';
import NewServices from './NewServices/NewServices.vue';
import UserProfile from './UserProfile.vue';
import Settings from './Settings.vue';
import TransitionWrapper from '../Wrappers/TransitionWrapper.vue';
import { useMenu } from '@/composables/useMenu';

const { menu } = useMenu();

const menuComponents: Record<string, any> = {
  Conversations,
  NewServices,
  UserProfile,
  Settings,
};
</script>