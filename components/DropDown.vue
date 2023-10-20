<template>
    <div id="dropdownSearch" class="z-10 bg-white rounded-lg shadow w-60">
        <div class="p-3">
            <label for="input-group-search" class="sr-only">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input type="text" id="input-group-search"
                    class="block w-full p-2 pl-10 text-sm text-gray-600 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Search user">
            </div>
        </div>
        <ul class="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-600 " aria-labelledby="dropdownSearchButton">
            <li v-for="item in users" :key="item.id">
                <div class="flex items-center pl-2 rounded hover:bg-gray-100" @click="setUser(item)">
                    <img class="w-8 h-8 rounded-full" :src="item.avatar" alt="taskItem.id">
                    <label for="checkbox-item-11" class="w-full py-2 ml-2 text-sm font-medium text-gray-600 rounded ">{{
                        item.name
                    }}</label>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useTaskStore } from '~/store/task';
const store = useTaskStore();
const { data } = defineProps(['data'])
const emits = defineEmits(['close-modal'])

const users = computed(() => store.user);

const setUser = async (user) => {
    data.assignee = user;
    await store.updateExistingTask(data.id, data)
    emits(['close-modal'])
}

onMounted(async () => {
    await store.fetchUsers()
})
</script>