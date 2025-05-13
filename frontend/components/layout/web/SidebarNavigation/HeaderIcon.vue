<template>
    <div class="p-4">
        <button class="p-1 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-125">
            <Go to="/">
                <Icon ri="chat-smile-3-line" customClass="text-2xl text-indigo-600"/>
            </Go>
        </button>
    </div>
</template>

<script setup lang="ts">
import Icon from '~/components/ui/Icon.vue';
import Go from '~/components/ui/Go.vue';
</script>