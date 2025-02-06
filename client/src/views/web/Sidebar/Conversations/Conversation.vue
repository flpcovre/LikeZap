<template>
    <ul>
        <li>
            <Go to="/" onclick="openChatMobile()">
                <div class="flex items-center hover:bg-gray-700 rounded-lg py-[15px] px-2 transition-all duration-200">
                    <div
                        class="relative flex-shrink-0 mr-3 flex items-center justify-center w-10 h-10 dark:bg-gray-600 rounded-full">
                        <Icon i="user-line" customClass="text-gray-500 dark:text-gray-300 text-lg"/>
                    </div>
                    <div class="flex-grow overflow-hidden">
                        <h5 class="mb-1 text-base truncate dark:text-gray-50">Patrick Hendricks</h5>
                        <p class="mb-0 text-gray-500 truncate dark:text-gray-300 text-14">Hey! there I'm
                            availableeeeeeeeeeeeeeeeeeeeeeeee</p>
                    </div>
                    <div class="text-gray-500 text-[12px] dark:text-gray-300 flex-shrink-0 self-start">
                        06:20</div>
                </div>
            </Go>
        </li>
    </ul>
</template>

<script setup lang="ts">
import Go from '@/components/ui/Go.vue';
import Icon from '@/components/ui/Icon.vue';
</script>