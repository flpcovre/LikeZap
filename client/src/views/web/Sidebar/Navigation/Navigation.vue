<template>

    <div class="flex flex-col justify-between border-r dark:border-gray-700">

        <div class="p-4">
            <div class="p-1 rounded-lg">
                 <Icon i="chat-smile-3-line" customClass="text-2xl text-indigo-500"/>
            </div>
        </div>

        <div class="p-4 flex flex-col space-y-4">
            <NavigationItems/>
        </div>

        <div class="border-t dark:border-gray-700 p-4">
            <UserProfile/>
        </div>

    </div>
</template>

<script setup lang="ts">
import UserProfile from './UserProfile.vue';
import NavigationItems from './NavigationItems.vue';

import Icon from '@/components/ui/Icon.vue';
</script>