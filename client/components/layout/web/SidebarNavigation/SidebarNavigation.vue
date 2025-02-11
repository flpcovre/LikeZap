<template>
    <div class="flex flex-col justify-between border-r dark:border-gray-700">
        <!-- Menu Hamburguer -->
        <div class="p-4">
            <button class="p-2 rounded-lg cursor-pointer">
                <i class="ri-menu-line text-xl"></i>
            </button>
        </div>

        <!-- Icônes abaixo do menu hamburguer -->
        <div class="p-4 flex flex-col space-y-4">
            <a class="p-2 rounded-lg cursor-pointer" title="Chat">
                <i class="ri-chat-3-fill text-xl text-indigo-400"></i>
            </a>
            <a class="p-2 rounded-lg relative cursor-pointer" title="Notificações">
                <i class="ri-notification-3-fill text-xl dark:text-gray-400"></i>
                <span
                    class="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold dark:text-white bg-indigo-400 rounded-full">
                    5
                </span>
            </a>
            <a class="p-2 rounded-lg cursor-pointer" title="Configurações">
                <i class="ri-settings-3-fill text-xl dark:text-gray-400"></i>
            </a>
            <a class="p-2 rounded-lg cursor-pointer" title="Modo Escuro">
                <i class="ri-moon-fill text-xl dark:text-gray-400"></i>
            </a>
        </div>

        <!-- User Profile -->
        <div class="border-t dark:border-gray-700 p-4">
            <div class="flex items-center">
                <div class="w-8 h-8 rounded-full dark:bg-gray-300 flex items-center justify-center">
                    <i class="ri-user-line dark:text-gray-600"></i>
                </div>
            </div>
        </div>
    </div>
</template>