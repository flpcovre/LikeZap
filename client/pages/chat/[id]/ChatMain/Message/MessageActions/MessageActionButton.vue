<template>
    <a 
        :data-dropdown-toggle="`actions-${target}`" 
        @click="toggleIconState"
        :class="['cursor-pointer', (isIconVisible ? 'flex' : 'hidden'), 'group-hover:flex']"
    >
        <Icon ri="arrow-down-s-line" customClass="text-lg text-gray-400"/>
    </a>
</template>

<script setup lang="ts">
import Icon from '~/components/ui/Icon.vue';

const props = defineProps({
    target: {
        type: Number,
        required: true
    }
})

const isIconVisible = ref<boolean>(false);

const toggleIconState = (): void => {
    isIconVisible.value = !isIconVisible.value;
    eventBus.emit('toggleBlockInChatWrapper', isIconVisible.value);
}

onMounted(() => {
    const dropdown = document.getElementById(`actions-${props.target}`);

    if (dropdown) {
        const observer = new MutationObserver((mutations: MutationRecord[]) => {
            for (const mutation of mutations) {
                if (mutation.type === 'attributes' && dropdown.classList.contains('hidden')) {
                    isIconVisible.value = false;
                    eventBus.emit('toggleBlockInChatWrapper', false);
                }
            }
        });

        observer.observe(dropdown, { attributes: true, attributeFilter: ['class'] });

        onBeforeUnmount(() => {
            observer.disconnect();
        });
    }
});
</script>