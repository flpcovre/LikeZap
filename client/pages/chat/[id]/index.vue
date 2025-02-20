<template>
    <ChatHeader/>

    <!-- Chat Messages -->
    <div class="flex-1 overflow-y-auto scrollbar-custom p-6 space-y-6 overflow-x-hidden">
        <div class="space-y-4">
            <!-- Customer Message -->
            <div class="flex items-start space-x-3 group">
                <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-e-xl rounded-es-xl shadow max-w-2xl">
                    <p class="whitespace-pre-wrap break-words">Hey there.</p>
                    <span class="text-xs text-gray-400 block mt-1 text-right text-end">10:30 AM</span>
                </div>
                <a class="hidden group-hover:flex cursor-pointer" data-dropdown-toggle="chat-dropdown">
                    <i class="ri-arrow-down-s-line text-lg text-gray-400"></i>
                </a>
            </div>

            <!-- User Message -->
            <div class="flex items-start space-x-3 justify-end group">
                <a class="hidden group-hover:flex cursor-pointer">
                    <i class="ri-arrow-down-s-line text-lg text-gray-400"></i>
                </a>
                <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-tl-xl rounded-bl-xl rounded-br-xl shadow max-w-2xl">
                    <p class="whitespace-pre-wrap break-words">Hi! Nice to meet you.</p>
                    <span class="text-xs text-gray-400 block mt-1 text-right">10:30 AM</span>
                </div>
            </div>

            <!-- Customer Audio Message -->
            <div class="flex items-start space-x-3 group">
                <div class="w-[40vh] bg-gray-100 dark:bg-gray-700 p-4 rounded-e-xl rounded-es-xl shadow max-w-2xl">
                    <div class="flex items-center space-x-4">
                        <button onclick="toggleAudio(this)"
                            class="w-9 h-9 bg-violet-500 rounded-[.75rem] flex items-center justify-center hover:bg-violet-400">
                            <i class="ri-play-line text-xl"></i>
                        </button>
                        <div id="waveform" class="flex-1"></div>
                        <span id="timeAudio" class="text-xs block mt-1 text-right">00:00</span>
                    </div>
                    <span class="text-xs text-gray-400 block mt-1 text-end">10:30 AM</span>
                </div>
                <a class="hidden group-hover:flex cursor-pointer">
                    <i class="ri-arrow-down-s-line text-lg text-gray-400"></i>
                </a>
            </div>

            <!-- User Audio Message -->
            <div class="flex items-start space-x-3 justify-end group">
                <a class="hidden group-hover:flex cursor-pointer">
                    <i class="ri-arrow-down-s-line text-lg text-gray-400"></i>
                </a>
                <div class="w-[40vh] bg-gray-100 dark:bg-gray-700 p-4 rounded-tl-xl rounded-bl-xl rounded-br-xl shadow max-w-2xl">
                    <div class="flex items-center space-x-4">
                        <button onclick="toggleAudio(this)"
                            class="w-9 h-9 bg-violet-500 rounded-[.75rem] flex items-center justify-center hover:bg-violet-400">
                            <i class="ri-play-line text-xl"></i>
                        </button>
                        <div id="waveform" class="flex-1"></div>
                        <span id="timeAudio" class="text-xs block mt-1 text-right">00:00</span>
                    </div>
                    <span class="text-xs text-gray-400 block mt-1 text-right">10:30 AM</span>
                </div>
            </div>

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
                <div class="w-[45vh] bg-gray-100 dark:bg-gray-700 p-4 rounded-tl-xl rounded-bl-xl rounded-br-xl shadow max-w-2xl">
                    <a href="#" class="block">
                        <img src="/1.png" alt="Imagem" class="object-cover rounded-lg">
                        <p class="whitespace-pre-wrap break-words mt-2">Hello World</p>
                    </a>
                    <span class="text-xs text-gray-400 block mt-1 text-right">10:30 AM</span>
                </div>
            </div>

            <!-- Customer Context Message -->
            <div class="flex items-start space-x-3 group">
                <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-e-xl rounded-es-xl shadow max-w-2xl">

                    <div class="bg-gray-200 dark:bg-gray-500 border-l-4 border-indigo-600 p-3 rounded-lg max-w-2xl mb-2">
                        <div class="text-sm text-gray-400 mb-1">John Doe</div>
                        <p class="whitespace-pre-wrap break-words">Hey there.</p>
                    </div>

                    <p class="whitespace-pre-wrap break-words">Hey there. I am a Context Message.</p>
                    <span class="text-xs text-gray-400 block mt-1 text-right text-end">10:30 AM</span>
                </div>
                <a class="hidden group-hover:flex cursor-pointer">
                    <i class="ri-arrow-down-s-line text-lg text-gray-400"></i>
                </a>
            </div>

            <!-- User Context Message -->
            <div class="flex items-start space-x-3 justify-end group">
                <a class="hidden group-hover:flex cursor-pointer">
                    <i class="ri-arrow-down-s-line text-lg text-gray-400"></i>
                </a>
                <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-tl-xl rounded-bl-xl rounded-br-xl shadow max-w-2xl">

                    <div class="bg-gray-200 dark:bg-gray-500 border-l-4 border-indigo-600 p-3 rounded-lg max-w-2xl mb-2">
                        <div class="text-sm text-gray-400 mb-1">John Doe</div>
                        <p class="whitespace-pre-wrap break-words">Hey there.</p>
                    </div>

                    <p class="whitespace-pre-wrap break-words">Hey there. I am a Context Message.</p>
                    <span class="text-xs text-gray-400 block mt-1 text-right text-end">10:30 AM</span>
                </div>
            </div>

        </div>

        <!-- Dropdown menu -->
        <div id="chat-dropdown"
            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-600">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li onclick="openContextInputArea()">
                    <a href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-white">Responder</a>
                </li>
            </ul>
        </div>
    </div>

    <!-- Input Area -->
    <ChatFooter/>
</template>

<script setup lang="ts">
import ChatHeader from './ChatHeader/ChatHeader.vue';
import ChatFooter from './ChatFooter/ChatFooter.vue';

import Icon from '~/components/ui/Icon.vue';
</script>