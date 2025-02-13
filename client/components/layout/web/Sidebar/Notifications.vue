<template>
    <SidebarSection title="Notificações">
        <div class="p-4 mb-4 text-indigo-800 border border-indigo-300 rounded-lg bg-indigo-50 dark:bg-gray-800 dark:text-indigo-400 dark:border-indigo-800"
            role="alert">
            <div class="flex items-center">
                <!-- <i class="ri-information-fill text-lg mr-3"></i> -->
                 <Icon ri="information-fill" customClass="text-lg mr-3"/>
                <h3 class="text-lg font-medium">Conversa nº 1</h3>
            </div>
            <div class="mt-2 mb-4 text-sm">
                <p>John Doe</p>
                <p class="text-gray-500">Hey there.</p>
            </div>
            <div class="flex">
                <button type="button"
                    class="w-full text-white bg-indigo-800 hover:bg-indigo-900 focus:ring-4 focus:outline-none font-medium rounded-lg text-xs py-1.5 me-2 text-center dark:hover:bg-indigo-700">
                    Começar a Conversar
                </button>
            </div>
        </div>
    </SidebarSection>
</template>

<script setup lang="ts">
import SidebarSection from './SidebarSection.vue';
import Icon from '~/components/ui/Icon.vue';
</script>