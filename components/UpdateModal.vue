<template>
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 w bg-opacity-75 transition-opacity"></div>
        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex min-h-full w-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div class="relative rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div class="p-5">
                        <div class="mb-2">
                            <label for="date_issued" class="block mb-2 text-md font-medium text-gray-600">Title:</label>
                            <input type="text" id="tittle" @keypress="updateTask" v-model="props.data.title"
                                class="outline-none text-sm rounded-lg block w-full p-2.5 px-2  bg-gray-200 placeholder-gray-400 text-gray-600"
                                required>
                            <div class="bg-gray-50 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button type="button" @click="updateExistingTask"
                                    class="inline-flex w-full justify-center rounded-md bg-blue-400 px-7 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto">Update</button>
                                <button type="button" @click="closeModal"
                                    class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-7 py-2 text-sm font-semibold text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps(['data'])
const emits = defineEmits(['close-modal'])
import { useTaskStore } from '~/store/task'
const store = useTaskStore();

const updateExistingTask = async () => {
    await store.updateExistingTask(props.data.id, props.data)
    emits('close-modal');
}

const closeModal = () => {
    emits('close-modal');
}
</script>