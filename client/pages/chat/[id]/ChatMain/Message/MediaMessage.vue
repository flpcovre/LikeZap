<template>
    <!-- Customer Media Message -->
    <div class="flex items-start space-x-3 group">
        <div class="w-[45vh] bg-gray-100 dark:bg-gray-700 p-4 rounded-e-xl rounded-es-xl shadow max-w-2xl">
            <a href="#" class="block">
                <img src="/2.jpg" alt="Imagem" class="object-cover rounded-lg">
                <p class="whitespace-pre-wrap break-words mt-2">Hello World</p>
            </a>
            <span class="text-xs text-gray-400 block mt-1 text-right">10:30 AM</span>
        </div>
        <a class="hidden group-hover:flex cursor-pointer">
            <i class="ri-arrow-down-s-line text-lg text-gray-400"></i>
        </a>
    </div>

    <!-- User Media Message -->
    <div class="flex items-start space-x-3 justify-end group">
        <a class="hidden group-hover:flex cursor-pointer">
            <i class="ri-arrow-down-s-line text-lg text-gray-400"></i>
        </a>
        <div
            class="w-[45vh] bg-gray-100 dark:bg-gray-700 p-4 rounded-tl-xl rounded-bl-xl rounded-br-xl shadow max-w-2xl">
            <a href="#" class="block">
                <img src="/1.png" alt="Imagem" class="object-cover rounded-lg">
                <p class="whitespace-pre-wrap break-words mt-2">Hello World</p>
            </a>
            <span class="text-xs text-gray-400 block mt-1 text-right">10:30 AM</span>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>