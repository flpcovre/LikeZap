<template>
    <SidebarSection title="Perfil">
        <div class="flex items-center justify-center">
            <div class="w-32 h-32 rounded-full bg-gray-600 flex items-center justify-center mt-6 mb-6">
                <Icon ri="user-line" customClass="text-[32px]"/>
            </div>
        </div>

        <div class="w-full flex flex-col px-5" aria-hidden="false">
            <div>
                <ProfileLabel text="Primeiro Nome"/>
                <ProfileInput type="text" value="John"/>
            </div>
            <div>
                <ProfileLabel text="Segundo Nome"/>
                <ProfileInput type="text" value="Doe"/>
            </div>
            <div>
                <ProfileLabel text="Departamento"/>
                <ProfileInput type="text" value="Tecnologia"/>
            </div>
            <div>
                <ProfileLabel text="Função"/>
                <ProfileInput type="text" value="Administrador"/>
            </div>
            <div class="flex flex-col mb-7">
                <ProfileLabel text="Avatar"/>
                <DropArea/>
            </div>
            
            <button tabindex="0" class="flex justify-center items-center rounded-sm transition-all duration-200 ease-out outline-none bg-indigo-300 dark:bg-indigo-400 focus:outline-none focus:ring focus:ring-indigo-100 py-4">
                <p class="text-sm font-semibold text-white"> Save Settings </p>
            </button>
        </div>
    </SidebarSection>
</template>

<script setup lang="ts">
import ProfileLabel from '~/components/ui/ProfileLabel.vue';
import ProfileInput from '~/components/ui/ProfileInput.vue';
import SidebarSection from './SidebarSection.vue';
import DropArea from '~/components/ui/DropArea.vue';
import Icon from '~/components/ui/Icon.vue';
</script>