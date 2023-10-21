<template>
    <nav class="bg-white border-gray-200 shadow-sm z-20">
        <div class="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://go.team/" class="flex items-center">
                <img src="https://go.team/wp-content/uploads/2023/07/goteam-logo-dark-1024x298.png" class="h-8 mr-3"
                    alt="Goteam Logo" />
            </a>
            <ul class="flex md:p-0 font-medium border-gray-100 rounded-lg flex-row space-x-4 mt-0 border-0 bg-white">
                <li>
                    <a href="#" class="block py-2 pl-3 pr-4 rounded bg-transparent text-gray-400 p-0"
                        aria-current="page">Carreers</a>
                </li>
                <li>
                    <a href="#" class="block py-2 pl-3 pr-4rounded bg-transparent text-gray-400 p-0"
                        aria-current="page">Find your Role</a>
                </li>
            </ul>
            <div class="flex md:order-1 flex-grow justify-center">
                <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search"
                    aria-expanded="false"
                    class="md:hidden text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 mr-1">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    <span class="sr-only">Search</span>
                </button>
                <div class="relative hidden md:block w-3/5">
                    <input type="text" id="search-navbar"
                        class="block w-full p-2 pl-3 pr-10 text-sm border border-gray-300 rounded-full outline-none text-gray-400 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Type for job title or role">
                    <button
                        class="absolute inset-y-0 right-0 flex items-center justify-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full m-1 p-2">
                        <svg class="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <a class="text-xs tracking-wide">Search</a>
                    </button>

                </div>
                <button data-collapse-toggle="navbar-search" type="button"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-search" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-2" id="navbar-search">
                <div class="relative mt-3 md:hidden">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="text" id="search-navbar"
                        class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Search...">
                </div>
                <div class="cursor-pointer flex items-center">
                    <div class="mr-2 text-right">
                        <p class="font-semibold text-gray-900 text-sm">Reyven Biloy</p>
                        <p class="text-blue-500 text-sm">reyvenb@gmail.com</p>
                    </div>
                    <img src="https://media.licdn.com/dms/image/C5603AQF_muMIR6-dJQ/profile-displayphoto-shrink_200_200/0/1516550625651?e=1703116800&v=beta&t=2lgjlBzXkMRBILSO8_Pec5-ZIRfUSfHCFc-HeqvgaM4"
                        class="mr-2 border h-9 w-9 rounded-full">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>
                </div>
                <div>
                    <div class="block gap-4 relative mx-auto w-full lg:py-6 lg:flex xl:w-11/12 3xl:w-10/12">
                        <ul class="nav-tabs flex flex-col gap-y-2 lg:block lg:w-2/12"></ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>