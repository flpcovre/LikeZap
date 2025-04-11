<template>
    <div
        :id="target"
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
        type: String,
        required: true
    },
    triggerElement: {
        type: Object as () => HTMLElement | null,
        required: true
    },
    customClass: {
        type: [String, Array],
        default: ''
    }
})

const dropdownRef = ref<HTMLElement | null>(null);

onMounted(() => {
    const $targetEl: HTMLElement | null = dropdownRef.value;
    const $triggerEl: HTMLElement | null = props.triggerElement;

    const options: DropdownOptions = {
        placement: 'bottom',
        triggerType: 'click',
        offsetSkidding: 0,
        offsetDistance: 10,
        delay: 300,
        onHide: () => {
            console.log('dropdown has been hidden');
        },
        onShow: () => {
            console.log('dropdown has been shown');
        },
        onToggle: () => {
            console.log('dropdown has been toggled');
        },
    };

    const instanceOptions: InstanceOptions = {
        id: props.target,
        override: true
    };

    const dropdown: DropdownInterface = new Dropdown(
        $targetEl,
        $triggerEl,
        options,
        instanceOptions
    );

    dropdown.show();
})
</script>