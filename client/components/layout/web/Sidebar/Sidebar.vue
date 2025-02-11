<template>
    <div class="flex flex-col overflow-hidden">
        <!-- Menu Hamburguer -->
        <div class="p-4 border-b dark:border-gray-700">
            <h1 class="p-2 ml-3 font-semibold text-xl">Mensagens</h1>
        </div>
        <!-- Navegação -->
        <nav class="flex-1 overflow-y-auto overflow-x-hidden scrollbar-custom p-4">
            <ul>
                <li>
                    <a href="#" onclick="openChatMobile()">
                        <div
                            class="flex items-center hover:dark:bg-gray-700 rounded-lg py-[15px] px-2 transition-all duration-200">
                            <div
                                class="relative flex-shrink-0 mr-3 ltr:mr-3 rtl:ml-3 flex items-center justify-center w-10 h-10 dark:bg-gray-600 rounded-full">
                                <i class="ri-user-line text-gray-500 dark:text-gray-300 text-lg"></i>
                            </div>
                            <div class="flex-grow overflow-hidden">
                                <h5 class="mb-1 text-base truncate dark:text-gray-50">Patrick Hendricks</h5>
                                <p class="mb-0 text-gray-500 truncate dark:text-gray-300 text-14">Hey! there I'm
                                    availableeeeeeeeeeeeeeeeeeeeeeeee</p>
                            </div>
                            <div class="text-gray-500 text-[12px] dark:text-gray-300 flex-shrink-0 self-start">
                                06:20</div>
                        </div>
                    </a>
                </li>

                <li>
                    <a href="#" onclick="openChatMobile()">
                        <div
                            class="flex items-center hover:dark:bg-gray-700 rounded-lg py-[15px] px-2 transition-all duration-200">
                            <div
                                class="relative flex-shrink-0 mr-3 ltr:mr-3 rtl:ml-3 flex items-center justify-center w-10 h-10 dark:bg-gray-600 rounded-full">
                                <i class="ri-user-line text-gray-500 dark:text-gray-300 text-lg"></i>
                            </div>
                            <div class="flex-grow overflow-hidden">
                                <h5 class="mb-1 text-base truncate dark:text-gray-50">Patrick Hendricks</h5>
                                <p class="mb-0 text-gray-500 truncate dark:text-gray-300 text-14">Hey! there I'm
                                    availableeeeeeeeeeeeeeeeeeeeeeeee</p>
                            </div>
                            <div class="text-gray-500 text-[12px] dark:text-gray-300 flex-shrink-0 self-start">
                                06:20</div>
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>