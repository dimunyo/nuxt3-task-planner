<template>
    <div class="bg-white shadow-md px-5">
        <div class="flex w-full  py-2  items-end justify-between">
            <p class="text-md inline-block font-medium">Profile Completion</p>
            <span class="text-xs text-orange-400">50%</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-1.5">
            <div class="bg-orange-400 h-1.5 rounded-full w-1/2"></div>
        </div>
        <div class="flex w-full justify-start items-center mt-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-5 h-5 text-gray-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
            <p class="text-xs text-gray-500">Hide Recommendations</p>
        </div>
        <p class="text-xs text-gray-500 py-3 mx-5">Fill-up the following items to strengthen your profile. This
            can help us matching your profile
            and increase your chances of landing into your desired role.</p>
        <ul class="px-5">
            <li>
                <div class=" flex w-full items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-3 w-3 text-gray-500"
                        fill="currentColor">
                        <path
                            d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                    </svg>
                    <p class="text-xs m-2 text-gray-500"> Share <a class="text-blue-500 cursor-pointer">Date of
                            Birth</a></p>
                </div>
            </li>
            <li>
                <div class=" flex w-full items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-3 w-3 text-gray-500"
                        fill="currentColor">
                        <path
                            d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                    </svg>
                    <p class="text-xs m-2 text-gray-500"> Specify <a class="text-blue-500 cursor-pointer">Current Monthly
                            Salary</a></p>
                </div>
            </li>
            <li>
                <div class=" flex w-full items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-3 w-3 text-gray-500"
                        fill="currentColor">
                        <path
                            d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                    </svg>
                    <p class="text-xs m-2 text-gray-500"> Add one(1) <a class="text-blue-500 cursor-pointer">Character
                            Reference</a></p>
                </div>
            </li>
            <li>
                <div class=" flex w-full items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-3 w-3 text-gray-500"
                        fill="currentColor">
                        <path
                            d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                    </svg>
                    <p class="text-xs m-2 text-gray-500"> Add <a class="text-blue-500 cursor-pointer">Current
                            Address</a></p>
                </div>
            </li>
            <li>
                <div class=" flex w-full items-center">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-3 w-3 text-gray-500"
                            fill="currentColor">
                            <path
                                d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                        </svg>
                    </div>
                    <p class="text-xs m-2 text-gray-500"> Add atleast five (5) items in <a
                            class="text-blue-500 cursor-pointer">Other Skills</a></p>
                </div>
            </li>
        </ul>
    </div>
</template>