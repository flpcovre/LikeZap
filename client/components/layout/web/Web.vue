<template>
    <WebWrapper>
      <SidebarWrapper v-if="showSidebar">
        <SidebarNavigation />
        <Sidebar />
      </SidebarWrapper>

      <ClientOnly>
          <MainWrapper v-if="showMainContent">
            <slot />
          </MainWrapper>
      </ClientOnly>
    </WebWrapper>
  </template>

<script setup lang="ts">
import WebWrapper from './Wrappers/WebWrapper.vue';
import SidebarWrapper from './Wrappers/SidebarWrapper.vue';
import MainWrapper from './Wrappers/MainWrapper.vue';
import SidebarNavigation from './SidebarNavigation/SidebarNavigation.vue';
import Sidebar from './Sidebar/Sidebar.vue';

import { useViewPort } from '~/composables/useViewPort';

const route = useRoute();

const { isMobile } = useViewPort();

const showSidebar = computed(() => {
  if (isMobile.value) {
    return (route.path === '/' || route.path === '/chat') && !route.params.id;
  }
  return true;
});

const showMainContent = computed(() => {
  if (isMobile.value) {
    return route.path.startsWith('/chat/') && route.params.id;
  }
  return true;
});
</script>