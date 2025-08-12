<template>
    <button
        :class="['cursor-pointer', (isIconVisible ? 'flex' : 'hidden'), 'group-hover:flex']"
        ref="button"
    >
        <Icon ri="arrow-down-s-line" customClass="text-lg text-gray-400"/>
    </button>

    <Dropdown 
        :triggerElement="button"
        @hide="toggleIconState"
        @show="toggleIconState"
        customClass="pointer-events-auto"
    >   
        <DropdownList>
            <DropdownItem text="Responder" @click="openContextArea(message)"/>
            <DropdownItem text="Copiar"/>
        </DropdownList>
    </Dropdown>
</template>

<script setup lang="ts">
import Dropdown from '~/components/ui/Dropdown/Dropdown.vue';
import DropdownList from '~/components/ui/Dropdown/DropdownList.vue';
import DropdownItem from '~/components/ui/Dropdown/DropdownItem.vue';
import Icon from '~/components/ui/Icon.vue';

import type { IMessage } from '~/types/types';

const props = defineProps<{message: IMessage}>()

const button = ref<HTMLElement | null>(null);
const isIconVisible = ref<boolean>(false);

const toggleDropdownState = inject('toggleDropdownState') as () => void;
const { openContextArea } = useContextArea();

const toggleIconState = (): void => {
    isIconVisible.value = !isIconVisible.value;
    toggleDropdownState();
}
</script>
