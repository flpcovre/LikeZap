<template>
    <SidebarSection title="Configurações">
        <div class="w-full h-full scroll-smooth">
            <div role="list" aria-label="Settings Accordion Control Group Buttons" class="h-full">
                <button role="listitem" aria-expanded="false"
                    class="w-full flex px-5 py-6 mb-3 rounded focus:outline-none"
                    aria-controls="appearance-settings-collapse">
                    <div class="grow text-start">
                        <p
                            class="outline-none text-sm text-black opacity-60 dark:text-white dark:opacity-70 font-semibold leading-4 tracking-[.01rem] mb-4">
                            Aparência </p>
                        <p
                            class="outline-none text-sm text-black opacity-60 dark:text-white dark:opacity-70 font-normal leading-4 tracking-[.01rem]">
                            Personalize a aparência </p>
                    </div>
                    <i class="ri-arrow-right-s-line transition-all duration-300"></i>
                </button>

                <button role="listitem" aria-expanded="false"
                    class="w-full flex px-5 py-6 mb-3 rounded focus:outline-none"
                    aria-controls="notifications-settings-collapse">
                    <div class="grow text-start">
                        <p
                            class="outline-none text-sm text-black opacity-60 dark:text-white dark:opacity-70 font-semibold leading-4 tracking-[.01rem] mb-4">
                            Notificações </p>
                        <p
                            class="outline-none text-sm text-black opacity-60 dark:text-white dark:opacity-70 font-normal leading-4 tracking-[.01rem]">
                            Customize as notificações </p>
                    </div>
                    <i class="ri-arrow-right-s-line transition-all duration-300"></i>
                </button>
            </div>
        </div>

    </SidebarSection>
</template>

<script setup lang="ts">
import SidebarSection from './SidebarSection.vue';
</script>