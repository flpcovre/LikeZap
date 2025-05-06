<template>
    <div class="p-5 border-b dark:border-gray-700">
      <div class="flex items-center">
  
        <div class="w-9 h-9 rounded-full bg-gray-600 flex items-center justify-center">
          <Icon ri="user-line" customClass="text-gray-300" />
        </div>
  
        <h1 class="ml-3 font-semibold text-xl">John Doe</h1>
  
        <Actions />
      </div>
    </div>
</template>
  
<script setup lang="ts">
import Icon from '~/components/ui/Icon.vue'
import Actions from './Actions.vue'
</script>
  