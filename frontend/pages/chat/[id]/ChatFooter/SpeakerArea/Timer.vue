<template>
    <div class="max-w-full text-center w-full px-5 py-3 text-sm">
        <p>{{ time }}</p>
    </div>
</template>

<script setup lang="ts">
const { time } = useSpeaker();
</script>