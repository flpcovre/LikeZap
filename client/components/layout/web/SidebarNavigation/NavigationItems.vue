<template>
    <div class="p-4 flex flex-col space-y-4">
        <button class="p-2 rounded-lg cursor-pointer" title="Chat" @click="setMenu('Conversations')">
            <i class="ri-chat-3-fill text-xl" 
               :class="menu == 'Conversations' ? 'text-indigo-400' : 'dark:text-gray-400'">
            </i>
        </button>

        <button class="p-2 rounded-lg relative cursor-pointer" title="Notificações" @click="setMenu('Notifications')">
            <i class="ri-notification-3-fill text-xl"
            :class="menu == 'Notifications' ? 'text-indigo-400' : 'dark:text-gray-400'">
            </i>
            <span
                class="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold dark:text-white bg-indigo-400 rounded-full">
                5
            </span>
        </button>

        <button class="p-2 rounded-lg cursor-pointer" title="Configurações" @click="setMenu('Settings')">
            <i class="ri-settings-3-fill text-xl" 
              :class="menu == 'Settings' ? 'text-indigo-400' : 'dark:text-gray-400'">
            </i>
        </button>

        <button class="p-2 rounded-lg cursor-pointer" title="Modo Escuro" @click="toggleTheme()">
            <i class="ri-moon-fill text-xl dark:text-gray-400"></i>
        </button>
    </div>
</template>

<script setup lang="ts">
import { useTheme } from "~/composables/useTheme";

const { toggleTheme } = useTheme();
const { menu, setMenu } = useMenu();
</script>