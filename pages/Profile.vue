<template>
    <div class="bg-white ml-64 w-full divide-gray-200 shadow-md">
        <div class="relative p-5">
            <h1 class="text-xl font-medium">Welcome, Reyven</h1>
            <p class="text-gray-500 text-xs"><span class="text-green-400">You are almost done!</span> To further strengthen
                your profile, it is highly
                recommended for you to complete the 4 sections of your application</p>
            <div class="absolute top-2 right-2 flex items-center mb-4">
                <input type="checkbox" class="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded">
                <label for="default-checkbox" class="ml-2 text-xs font-medium text-gray-500">Don't remind me again
                </label>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-5 h-5 text-red-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
        </div>
        <hr>
        <div class="flex p-5 space-x-5">
            <div class="flex w-full">
                <div class="bg-gray-200 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 m-2 text-gray-500">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                </div>
                <div class="flex flex-col ml-2 w-full">
                    <span class="text-xs text-gray-600">Applicant Profile</span>
                    <div class="flex items-center space-x-2">
                        <div class="w-full bg-gray-200 rounded-full h-1.5">
                            <div class="bg-orange-400 h-1.5 rounded-full w-3/4"></div>
                        </div>
                        <span class="text-xs text-orange-400">75%</span>
                    </div>
                </div>
            </div>
            <div class="flex w-full">
                <div class="bg-gray-200 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 m-2 text-gray-500">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                </div>
                <div class="flex flex-col ml-2 w-full">
                    <span class="text-xs text-gray-600">Resume / CV</span>
                    <div class="flex items-center space-x-2">
                        <div class="w-full bg-gray-200 rounded-full h-1.5">
                            <div class="bg-red-400 h-1.5 rounded-full w-1/2"></div>
                        </div>
                        <span class="text-xs text-red-400">50%</span>
                    </div>
                </div>
            </div>
            <div class="flex w-full">
                <div class="bg-gray-200 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 m-2 text-gray-500">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                    </svg>
                </div>
                <div class="flex flex-col ml-2 w-full">
                    <span class="text-xs text-gray-600">Assessment</span>
                    <div class="flex items-center space-x-2">
                        <div class="w-full bg-gray-200 rounded-full h-1.5">
                            <div class="bg-red-400 h-1.5 rounded-full w-0"></div>
                        </div>
                        <span class="text-xs text-red-400">0%</span>
                    </div>
                </div>
            </div>
            <div class="flex w-full">
                <div class="bg-gray-200 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 m-2 text-gray-500">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
                    </svg>
                </div>
                <div class="flex flex-col ml-2 w-full">
                    <span class="text-xs text-gray-600">Video Introduction</span>
                    <div class="flex items-center space-x-2">
                        <div class="w-full bg-gray-200 rounded-full h-1.5">
                            <div class="bg-red-400 h-1.5 rounded-full w-0"></div>
                        </div>
                        <span class="text-xs text-red-400">0%</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script setup>
definePageMeta({
    layout: "custom",
});
</script>