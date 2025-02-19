<template>
    <button
      class="p-2 rounded-lg relative cursor-pointer transition-transform duration-300 hover:scale-110"
      :class="getButtonClass(target)"
      @click="setMenu(target)"
      :data-tooltip-target="`tooltip-${target}`" 
      data-tooltip-placement="right"
    >
        <Icon :ri="icon" :customClass="['text-xl', getIconClass(target)]"/>
        <NotificationNotice v-if="notice" :text="notice"/>
    </button>

    <Tooltip text="Conversas" :target="`tooltip-${target}`"/>
</template>

<script setup lang="ts">
import NotificationNotice from "~/components/ui/NotificationNotice.vue";
import Icon from "~/components/ui/Icon.vue";
import Tooltip from "~/components/ui/Tooltip.vue";

const { setMenu, getButtonClass, getIconClass } = useMenu();

const props = defineProps({
    target: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    notice: String
})
</script>