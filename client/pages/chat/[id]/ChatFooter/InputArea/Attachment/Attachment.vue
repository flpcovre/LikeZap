<template>
    <DropdownRoot target="attachment-dropdown">
        <template #button>
            <Icon ri="attachment-2" customClass="text-[25px] opacity-75"/>
        </template>

        <template #content>
            <DropdownList>
                <DropdownItem icon="file-text-fill" text="Documentos"/>
                <DropdownItem icon="image-fill" text="Fotos"/>
            </DropdownList>
        </template>
    </DropdownRoot>
</template>

<script setup lang="ts">
import DropdownRoot from '~/components/ui/Dropdown/DropdownRoot.vue';
import DropdownList from '~/components/ui/Dropdown/DropdownList.vue';
import DropdownItem from '~/components/ui/Dropdown/DropdownItem.vue';
import Icon from '~/components/ui/Icon.vue';
</script>