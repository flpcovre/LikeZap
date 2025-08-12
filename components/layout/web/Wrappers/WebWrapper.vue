<template>
    <div class="flex h-screen dark:bg-gray-800 dark:text-gray-300 scrollbar-hidden">
        <slot/>
    </div>
</template>

<style scoped>
.scrollbar-hidden {
    overflow-y: hidden;
    overflow-x: hidden;
}
</style>