<template>
    <DropdownButton 
        ref="dropdownButtonRef"
        customClass="group flex justify-center items-center rounded-full outline-none focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-700 focus:bg-gray-50 dark:focus:bg-gray-600 transition-all duration-200 group w-9 h-9 mr-4">
        <slot name="button"/>
    </DropdownButton>

    <Dropdown 
        v-if="triggerElement" 
        :target="target" 
        :triggerElement="triggerElement"
    >
        <slot name="content"/>
    </Dropdown>
</template>

<script setup lang="ts">
import DropdownButton from './DropdownButton.vue';
import Dropdown from './Dropdown.vue';

const props = defineProps({
  target: {
    type: String,
    required: true
  }
});

const dropdownButtonRef = ref<InstanceType<typeof DropdownButton> | null>(null);
const triggerElement = ref<HTMLElement | null>(null);

onMounted(async () => {
  await nextTick();
  triggerElement.value = dropdownButtonRef.value?.buttonRef ?? null;
});
</script>