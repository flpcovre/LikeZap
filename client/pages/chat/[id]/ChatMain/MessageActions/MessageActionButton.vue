<template>
    <a :data-dropdown-toggle="`actions-${target}`" class="hidden group-hover:flex cursor-pointer">
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
</script>