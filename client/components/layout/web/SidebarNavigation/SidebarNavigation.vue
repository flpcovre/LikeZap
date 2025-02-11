<template>
    <div class="flex flex-col justify-between border-r dark:border-gray-700">
        <HeaderIcon/>
        <NavigationItems/>
        <UserProfileIcon/>
    </div>
</template>

<script setup lang="ts">
import HeaderIcon from './HeaderIcon.vue';
import NavigationItems from './NavigationItems.vue';
import UserProfileIcon from './UserProfileIcon.vue';
</script>