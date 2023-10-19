<template>
    <div class="flex items-center space-x-4 px-2 py-1.5 ">
        <div class="flex flex-grow items-center p-2">
            <button @click="toggleDone">
                <svg class="h-5 w-5 mr-5 text-gray-400" fill="currentColor" stroke="currentColor" stroke-width="1.5"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path v-if="taskItem.is_done"
                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                    <path v-else d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                </svg>
            </button>
            <p :class="{ 'line-through': taskItem.is_done }"
                class="text-md font-medium truncate text-gray-500 whitespace-normal overflow-hidden">{{
                    taskItem.title }}</p>
        </div>
        <button id="delete" @click="deleteTask"
            class="flex-shrink-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-auto">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-6 h-6 text-gray-400 hover:text-red-500 cursor-pointer">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
        </button>
    </div>
</template>
<script setup>
import { useTaskStore } from '~/store/task'
const store = useTaskStore();

const { taskItem } = defineProps(['task-item']);

const toggleDone = async () => {
    taskItem.is_done = !taskItem.is_done;
    await store.updateExistingTask(taskItem.id, taskItem)
}

const deleteTask = async () => {
    await store.deleteTask(taskItem.id)
}
</script>