<template>
    <div class="border-t dark:border-gray-700 p-2">
        <button class="flex items-center p-2" :class="getButtonClass('UserProfile')">
            <div class="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center"
                @click="setMenu('UserProfile')">
                <Icon ri="user-line" customClass="text-gray-600" />
            </div>
        </button>
    </div>
</template>

<script setup lang="ts">
import Icon from "~/components/ui/Icon.vue";

const { setMenu, getButtonClass } = useMenu();
</script>