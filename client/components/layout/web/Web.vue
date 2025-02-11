<template>
    <WebWrapper>
        <SidebarWrapper>
            <SidebarNavigation/>
            <Sidebar/>
        </SidebarWrapper>

        <MainWrapper>
            <slot/>
        </MainWrapper>
    </WebWrapper>
</template>

<script setup lang="ts">
import WebWrapper from './Wrappers/WebWrapper.vue';
import SidebarWrapper from './Wrappers/SidebarWrapper.vue';
import MainWrapper from './Wrappers/MainWrapper.vue';
import SidebarNavigation from './SidebarNavigation/SidebarNavigation.vue';
import Sidebar from './Sidebar/Sidebar.vue';
</script>