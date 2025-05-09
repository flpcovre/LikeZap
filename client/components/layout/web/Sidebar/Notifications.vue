<template>
    <SidebarSection title="Notificações">

        <div class="relative group w-full p-2">
            
            <div class="flex">
                
                <Icon ri="service-bell-line"/>
                    

                <div class="ms-3 text-sm font-normal">
                    <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Jese Leos</span>
                    <div class="mb-2 text-sm font-normal">Hi Neil, thanks for sharing your thoughts regarding Flowbite.</div> 
                </div>
            </div>

            <div class="overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-24">
                <div class="mt-2 flex justify-between gap-2">
                    <button class="flex-1 bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 text-sm">
                        Ver
                    </button>
                    <button class="flex-1 bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-600 text-sm">
                        Ignorar
                    </button>
                </div>
            </div>
        </div>


    </SidebarSection>
</template>

<script setup lang="ts">
import SidebarSection from './SidebarSection.vue';
import Icon from '~/components/ui/Icon.vue';
</script>