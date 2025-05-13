<template>
    <div role="status" class="max-w-md space-y-8 rounded-sm shadow-sm animate-pulse dark:divide-gray-700 md:p-4">
        <div class="flex items-center gap-x-6 p-2"
            v-for="(sklt, index) in 5"
        >
            <div class="bg-gray-300 dark:bg-gray-700 rounded-full w-8 h-8"></div>

            <div>
                <div class="w-24 h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 mb-3"></div>
                <div class="w-44 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>

            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700"></div>
        </div>
    </div>
</template>