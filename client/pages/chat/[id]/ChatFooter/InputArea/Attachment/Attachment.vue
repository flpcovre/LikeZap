<template>
    <DropdownButton target="attachment-dropdown" customClass="group flex justify-center items-center rounded-full outline-none focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-700 focus:bg-gray-50 dark:focus:bg-gray-600 transition-all duration-200 group w-9 h-9 mr-4">
        <Icon ri="attachment-2" customClass="text-[25px] opacity-75"/>
    </DropdownButton>

    <Dropdown target="attachment-dropdown">
        <DropdownList>
            <DropdownItem icon="file-text-fill" text="Documentos"/>
            <DropdownItem icon="image-fill" text="Fotos"/>
        </DropdownList>
    </Dropdown>
</template>

<script setup lang="ts">
import DropdownButton from '~/components/ui/Dropdown/DropdownButton.vue';
import Dropdown from '~/components/ui/Dropdown/Dropdown.vue';
import DropdownList from '~/components/ui/Dropdown/DropdownList.vue';
import DropdownItem from '~/components/ui/Dropdown/DropdownItem.vue';
import Icon from '~/components/ui/Icon.vue';
</script>
