<template>
    <div class="border-t dark:border-gray-700 p-4">
        <button class="flex items-center">
            <div class="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center" @click="setMenu('UserProfile')">
                <i class="ri-user-line dark:text-gray-600"></i>
            </div>
        </button>
    </div>
</template>

<script setup lang="ts">
const { setMenu } = useMenu();
</script>