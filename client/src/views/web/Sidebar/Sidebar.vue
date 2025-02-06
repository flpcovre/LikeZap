<template>
    <aside
        class="w-full md:w-[425px] dark:bg-gray-800 border-r dark:border-gray-700 grid grid-cols-[auto,1fr] transition-all duration-300">

        <Navigation/>
        
        <div class="flex flex-col overflow-hidden">
            <Conversations/>
        </div>

    </aside>
</template>

<script setup lang="ts">
import Navigation from './Navigation/Navigation.vue';
import Conversations from './Conversations/Conversations.vue';
</script>