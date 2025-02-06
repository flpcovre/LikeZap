<template>
    <main class="dark:bg-gray-800 dark:text-gray-300">
        <div class="flex h-screen">
            <Sidebar/>
            <RouterView/>
        </div>
    </main>
</template>

<script setup lang="ts">
import Sidebar from '@/views/web/Sidebar/Sidebar.vue';
</script>