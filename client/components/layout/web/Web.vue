<template>
    <WebWrapper>
        <SidebarWrapper>
            <SidebarNavigation/>
            <Sidebar/>
        </SidebarWrapper>

        <slot/>
    </WebWrapper>
</template>

<script setup lang="ts">
import WebWrapper from './WebWrapper.vue';
import SidebarWrapper from './SidebarWrapper.vue';
import SidebarNavigation from './SidebarNavigation/SidebarNavigation.vue';
import Sidebar from './Sidebar/Sidebar.vue';
</script>