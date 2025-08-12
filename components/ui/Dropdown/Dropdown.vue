<template>
    <div
        ref="dropdownRef"
        class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-600"
        :class="customClass"
    >
        <slot/>
    </div>
</template>

<script setup lang="ts">
import { Dropdown } from 'flowbite';
import type { DropdownOptions, DropdownInterface } from 'flowbite';
import type { InstanceOptions } from 'flowbite';

const props = defineProps({
    target: {
        type: String
    },
    triggerElement: {
        type: Object as PropType<HTMLElement | null>,
        default: null
    },
    customClass: {
        type: [String, Array],
        default: ''
    }
})

const dropdownRef = ref<HTMLElement | null>(null);
const dropdownInstance = ref<DropdownInterface | null>(null);
const emit = defineEmits(['show', 'hide']);

provide('dropdown', dropdownInstance);

onMounted(() => {
    const stop = watch(
        () => props.triggerElement,
        (trigger) => {
            if (trigger && dropdownRef.value) {
                const options: DropdownOptions = {
                    placement: 'bottom',
                    triggerType: 'click',
                    offsetSkidding: 0,
                    offsetDistance: 10,
                    delay: 300,
                    onHide: () => {
                        emit('hide');
                    },
                    onShow: () => {
                        emit('show');
                    },
                };

                const instanceOptions: InstanceOptions = {
                    override: true
                };

                const dropdown: DropdownInterface = new Dropdown(
                    dropdownRef.value,
                    trigger,
                    options,
                    instanceOptions
                );

                dropdownInstance.value = dropdown;

                stop();
            }
        },
        { immediate: true });
});
</script>