<template>
    <div role="status" class="animate-pulse py-6 px-4">
        <div class="flex items-center justify-start">
            <div class="w-40 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 me-3"></div>
        </div>
        <div>
            <svg class="w-full h-48 my-6 text-gray-200 dark:text-gray-700 me-4" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path
                    d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
        </div>
        <div class="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
        <div class="flex items-center justify-between mt-4 pt-4 border-gray-200 border-t-2">
            <div class="w-96 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            <div class="w-24 h-6 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <span class="sr-only">Loading...</span>
    </div>
</template>