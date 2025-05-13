<template>
    <button 
    class="p-1 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-125"
    :data-tooltip-target="`tooltip-${tooltip}`"
    data-tooltip-placement="bottom"
    @click="callback && callback()" >
        <Icon :ri="icon" customClass="text-xl"/>
    </button>

    <Tooltip :text="detail" :target="`tooltip-${tooltip}`"/>
</template>

<script setup lang="ts">
import Icon from '~/components/ui/Icon.vue';
import Tooltip from '~/components/ui/Tooltip.vue';

defineProps({
    icon: {
        type: String,
        required: true
    },
    detail: String,
    tooltip: String,
    callback: Function
})
</script>