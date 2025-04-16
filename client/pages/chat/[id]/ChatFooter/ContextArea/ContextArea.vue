<template>
    <div v-if="contextArea" class="flex items-center relative mb-2">
      <div class="w-9 h-9 mr-4"></div>

      <ContextMessage :message="contextMessage"/>

      <button 
        @click="closeContextArea"
        class="group flex justify-center items-center rounded-full outline-none focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-700 focus:bg-gray-50 dark:focus:bg-gray-600 transition-all duration-200 w-9 h-9 md:mr-3 xs:mr-4 ml-3">
        <Icon ri="close-line" customClass="text-[20px] opacity-75"/>
      </button>
    </div>
</template>

<script setup lang="ts">
import Icon from '~/components/ui/Icon.vue';
import ContextMessage from './ContextMessage/ContextMessage.vue';

const { contextArea, contextMessage, closeContextArea } = useContextArea();
</script>