<template>
    <!-- Context Input Area -->
    <div id="contextInputArea" class="flex items-center relative mb-2 hidden">
        <div class="w-9 h-9 mr-4"></div>

        <div class="bg-gray-500 border-l-4 border-indigo-600 p-3 rounded-lg max-w-2xl mb-2 max-w-full w-full">
            <div class="text-sm text-gray-400 mb-1">John Doe</div>
            <p class="whitespace-pre-wrap break-words">Hey there.</p>
        </div>

        <button onclick="closeContextInputArea()"
            class="group flex justify-center items-center rounded-full outline-none focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-700 focus:bg-gray-50 dark:focus:bg-gray-600 transition-all duration-200 group w-9 h-9 md:mr-3 xs:mr-4 ml-3">
            <i class="ri-close-line text-[20px] opacity-75"></i>
        </button>
    </div>
</template>