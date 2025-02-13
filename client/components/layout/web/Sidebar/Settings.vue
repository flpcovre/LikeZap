<template>
    <SidebarSection title="Configurações">
        <div class="w-full h-full scroll-smooth">
            <div role="list" aria-label="Settings Accordion Control Group Buttons" class="h-full">
                <button role="listitem" aria-expanded="false"
                    class="w-full flex px-5 py-6 mb-3 rounded focus:outline-none"
                    aria-controls="appearance-settings-collapse">
                    <div class="grow text-start">
                        <p
                            class="outline-none text-sm text-black opacity-60 dark:text-white dark:opacity-70 font-semibold mb-4">
                            Aparência </p>
                        <p
                            class="outline-none text-sm text-black opacity-60 dark:text-white dark:opacity-70 font-normal">
                            Personalize a aparência </p>
                    </div>
                    <Icon ri="arrow-right-s-line" customClass="transition-all duration-300"/>
                </button>

                <button role="listitem" aria-expanded="false"
                    class="w-full flex px-5 py-6 mb-3 rounded focus:outline-none"
                    aria-controls="notifications-settings-collapse">
                    <div class="grow text-start">
                        <p
                            class="outline-none text-sm text-black opacity-60 dark:text-white dark:opacity-70 font-semibold mb-4">
                            Notificações </p>
                        <p
                            class="outline-none text-sm text-black opacity-60 dark:text-white dark:opacity-70 font-normal">
                            Customize as notificações </p>
                    </div>
                    <Icon ri="arrow-right-s-line" customClass="transition-all duration-300"/>
                </button>
            </div>
        </div>

    </SidebarSection>
</template>

<script setup lang="ts">
import SidebarSection from './SidebarSection.vue';
import Icon from '~/components/ui/Icon.vue';
</script>