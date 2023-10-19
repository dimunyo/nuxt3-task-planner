<template>
    <div class="flex items-center space-x-4 px-2 py-1.5 shadow-md rounded-sm">
        <DeleteModal v-if="showModal" :id="taskItem.id" @close-modal="closeModal" />
        <div class="flex flex-grow items-start p-2">
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
        <button id="delete" @click="toggleStar" class="flex-shrink-0 p-2 ml-auto">
            <svg class="w-6 h-6 text-gray-400 hover:text-yellow-500 cursor-pointer"
                :class="{ 'text-yellow-500': taskItem.is_important }" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                stroke-width="1.5" stroke="currentColor" viewBox="0 0 576 512">
                <path v-if="taskItem.is_important"
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                <path v-else
                    d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
            </svg>
        </button>
        <button id="delete" @click="showDeleteModal" class="flex-shrink-0 p-2 ml-auto">
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

const showModal = ref(false);

const toggleDone = async () => {
    taskItem.is_done = !taskItem.is_done;
    await store.updateExistingTask(taskItem.id, taskItem)
}

const toggleStar = async () => {
    taskItem.is_important = !taskItem.is_important;
    await store.updateExistingTask(taskItem.id, taskItem)
}

const showDeleteModal = async () => {
    showModal.value = true;
}
const closeModal = () => {
    showModal.value = false;
}
</script>