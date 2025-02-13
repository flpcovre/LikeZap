<template>
    <SidebarSection title="Perfil">
        <div class="flex items-center justify-center">
            <div class="w-32 h-32 rounded-full bg-gray-600 flex items-center justify-center mt-6 mb-6">
                <i class="ri-user-line text-[32px]"></i>
            </div>
        </div>

        <div class="w-full flex flex-col px-5" aria-hidden="false">
            <div>
                <div class="flex justify-start">
                    <label class="mb-3">
                        <span
                            class="w-13 text-sm text-black opacity-60 dark:text-white dark:opacity-70 font-semibold leading-4 tracking-[.01rem]">
                            Primeiro Nome
                        </span>
                    </label>
                </div>
                <div class="relative">
                    <input type="text"
                        class="max-w-full w-full h-8 p-4 rounded-sm content-center opacity-50 transition duration-200 ease-out dark:text-white dark:bg-gray-700 dark:bg-opacity-70 dark:border-opacity-70 dark:border-gray-700 mb-7"
                        readonly value="John">
                    <div class="absolute top-0 right-0"></div>
                </div>
            </div>
            <div>
                <div class="flex justify-start">
                    <label class="mb-3">
                        <span
                            class="w-13 text-sm text-black opacity-60 dark:text-white dark:opacity-70 font-semibold leading-4 tracking-[.01rem]">
                            Segundo Nome
                        </span>
                    </label>
                </div>
                <div class="relative">
                    <input type="text"
                        class="max-w-full w-full h-8 p-4 rounded-sm content-center opacity-50 transition duration-200 ease-out dark:text-white dark:bg-gray-700 dark:bg-opacity-70 dark:border-opacity-70 dark:border-gray-700 mb-7"
                        readonly value="Doe">
                    <div class="absolute top-0 right-0"></div>
                </div>
            </div>
            <div>
                <div class="flex justify-start">
                    <label class="mb-3">
                        <span
                            class="w-13 text-sm text-black opacity-60 dark:text-white dark:opacity-70 font-semibold leading-4 tracking-[.01rem]">
                            Departamento
                        </span>
                    </label>
                </div>
                <div class="relative">
                    <input type="text"
                        class="max-w-full w-full h-8 p-4 rounded-sm content-center opacity-50 transition duration-200 ease-out dark:text-white dark:bg-gray-700 dark:bg-opacity-70 dark:border-opacity-70 dark:border-gray-700 mb-7"
                        readonly value="Tecnologia">
                    <div class="absolute top-0 right-0"></div>
                </div>
            </div>
            <div>
                <div class="flex justify-start">
                    <label class="mb-3">
                        <span
                            class="w-13 text-sm text-black opacity-60 dark:text-white dark:opacity-70 font-semibold leading-4 tracking-[.01rem]">
                            Função
                        </span>
                    </label>
                </div>
                <div class="relative">
                    <input type="text"
                        class="max-w-full w-full h-8 p-4 rounded-sm content-center opacity-50 transition duration-200 ease-out dark:text-white dark:bg-gray-700 dark:bg-opacity-70 dark:border-opacity-70 dark:border-gray-700 mb-7"
                        readonly value="Administrador">
                    <div class="absolute top-0 right-0"></div>
                </div>
            </div>
            <div class="flex flex-col mb-7">
                <div class="flex justify-start">
                    <label class="mb-3">
                        <span
                            class="w-13 text-black text-opacity-60 dark:text-white dark:text-opacity-70 text-sm font-semibold leading-4 tracking-[.01rem]">
                            Avatar
                        </span>
                    </label>
                </div>
                <label tabindex="0"
                    class="cursor-pointer w-full h-[6.25rem] border border-dashed rounded-sm p-5 border-gray-200 dark:border-gray-500 flex justify-center items-center hover:bg-opacity-0 active:bg-opacity-0 focus:bg-opacity-0 outline-none focus:outline-none duration-500 transition-all bg-gray-50 dark:bg-opacity-70 dark:bg-gray-700 dark:hover:bg-opacity-0 dark:focus:bg-opacity-0">
                    <input type="file" hidden="" name="files[]" accept="image/*">
                    <div class="">
                        <p
                            class="outline-none text-sm font-normal leading-4 tracking-[.01rem] text-black text-opacity-40 dark:text-white dark:text-opacity-70">
                            Choose a file
                            <br> or drop it here.
                        </p>
                    </div>
                </label>
            </div>
            <button tabindex="0"
                class="group p-3 flex justify-center items-center rounded-sm transition-all duration-200 ease-out outline-none bg-indigo-300 dark:bg-indigo-400 active:ring active:ring-indigo-200', focus:outline-none focus:ring focus:ring-indigo-100 w-full py-4">
                <p class="text-sm font-semibold text-white leading-4 tracking-[.01rem]"> Save Settings </p>
            </button>
        </div>
    </SidebarSection>
</template>

<script setup lang="ts">
import Icon from '~/components/ui/Icon.vue';
import SidebarSection from './SidebarSection.vue';
</script>