<template>
    <SidebarSection title="Notificações">
        <div class="w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:text-gray-400"
            role="alert">
            <div class="flex">
                <div
                    class="inline-flex items-center justify-center shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-full text-gray-300 bg-gray-600">
                    <Icon ri="user-line" />
                </div>
                <div class="ms-3 text-sm font-normal overflow-hidden flex-1">
                    <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white truncate block">
                        John Doe
                    </span>
                    <div class="mb-2 text-sm font-normal truncate" title="Hey There, Im Using WhatsApp">
                        Hey There, Im Using WhatsApp
                    </div>

                    <div class="grid grid-cols-2 gap-2">
                        <div>
                            <a href="#"
                                class="inline-flex justify-center items-center w-full px-2 py-1.5 text-xs font-medium text-center text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-indigo-800"
                                style="min-width: 80px">
                                Aceitar
                            </a>
                        </div>
                        <div>
                            <a href="#"
                                class="inline-flex justify-center items-center w-full px-2 py-1.5 text-xs font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                                style="min-width: 80px">
                                Transferir
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </SidebarSection>
</template>

<script setup lang="ts">
import SidebarSection from './SidebarSection.vue';
import Icon from '~/components/ui/Icon.vue';
</script>