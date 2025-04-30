<template>
    <div class="flex-1 overflow-y-auto scrollbar-custom p-6 space-y-6 overflow-x-hidden"
        :class="{'pointer-events-none': isDropdownVisible}"
    >
        <div class="space-y-4">
            <slot/>
        </div>
    </div>
</template>

<script setup lang="ts">

const isDropdownVisible = ref<boolean>(false);

const toggleDropdownState = (): void => {
    isDropdownVisible.value = !isDropdownVisible.value;
}

provide('toggleDropdownState', toggleDropdownState);
</script>