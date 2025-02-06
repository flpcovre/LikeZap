<template> 

    <Go to="/" customClass="p-2 rounded-lg cursor-pointer" title="Chat">
        <Icon i="chat-3-fill" customClass="text-xl text-indigo-400"/>
    </Go>

    <Go to="/" customClass="p-2 rounded-lg relative cursor-pointer" title="Notificações">
        <Icon i="notification-3-fill" customClass="text-xl dark:text-gray-400"/>
        <span
            class="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold dark:text-white bg-indigo-400 rounded-full">
            5
        </span>
    </Go>

    <Go to="/" customClass="p-2 rounded-lg cursor-pointer" title="Configurações">
        <Icon i="settings-3-fill" customClass="text-xl dark:text-gray-400"/>
    </Go>

    <a class="p-2 rounded-lg cursor-pointer" title="Modo Escuro">
        <i class="ri-moon-fill text-xl dark:text-gray-400"></i>
    </a>
</template>

<script setup lang="ts">
import Icon from '@/components/ui/Icon.vue';
import Go from '@/components/ui/Go.vue';
</script>