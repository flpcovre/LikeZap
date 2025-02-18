<template>
    <button class="p-1 rounded-lg cursor-pointer">
        <i class="ri-phone-line text-xl"></i>
        <Icon :ri="icon" :customClass="detail"/>
    </button>
</template>

<script setup lang="ts">
import Icon from '~/components/ui/Icon.vue';

defineProps({
    icon: {
        type: String,
        required: true
    },
    detail: String
})
</script>