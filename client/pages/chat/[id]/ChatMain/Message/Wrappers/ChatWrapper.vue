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

onMounted(() => {
    eventBus.on('toggleBlockInChatWrapper', (dropdownState: boolean) => {
        isDropdownVisible.value = dropdownState;
    });
})
onUnmounted(() => {
    eventBus.off('toggleBlockInChatWrapper');
})
</script>