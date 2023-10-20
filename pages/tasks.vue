<template>
    <div
        class="flex flex-col items-start justify-items-center py-8 mx-auto w-full min-h-full overflow-y-auto space-y-5 pt-20">
        <div class="flex justify-start items-center w-full px-40">
            <h1 class="text-3xl flex-grow text-gray-800 font-medium">Task Planner</h1>
            <ul class="flex space-x-4 ml-4">
                <li>
                    <input type="radio" id="filter-all" name="filter" value="filter-all" class="hidden peer" checked
                        v-model="selectedFilter" required>
                    <label for="filter-all"
                        class="text-sm inline-flex items-center truncate justify-center w-24 p-2.5 text-gray-500 bg-white
                         rounded-lg cursor-pointer peer-checked:bg-gray-200 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50">
                        All
                    </label>
                </li>
                <li>
                    <input type="radio" id="filter-important" name="filter" value="filter-important" class="hidden peer"
                        v-model="selectedFilter" required>
                    <label for="filter-important"
                        class="text-sm inline-flex items-center truncate justify-center w-auto p-2.5 text-gray-500 bg-white
                         rounded-lg cursor-pointer peer-checked:bg-gray-200 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50">
                        {{ `${importantList?.length} Important` }}
                    </label>
                </li>
                <li>
                    <input type="radio" id="filter-done" name="filter" value="filter-done" class="hidden peer" required
                        v-model="selectedFilter">
                    <label for="filter-done"
                        class="text-sm inline-flex items-center truncate justify-center w-auto p-2.5 text-gray-500 bg-white
                         rounded-lg cursor-pointer peer-checked:bg-gray-200 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50">
                        {{ `${doneList?.length} Done` }}
                    </label>
                </li>
            </ul>
        </div>
        <form class="px-40 w-full">
            <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input type="search" id="default-search" v-model="typedText" @input="handleInput"
                    class="rounded-full block w-full px-4 py-2 pl-10 text-sm text-gray-900 outline-none border border-gray-300 bg-gray-50"
                    placeholder="Search" required>
            </div>
        </form>
        <ul class="divide-y space-y-3 divide-gray-200 px-40 h-full w-full">
            <li v-for="item in task" :key="item.id"
                class="group cursor-pointer bg-gray-100 hover:bg-gray-200 w-100 rounded-md">
                <Task :task-item="item" />
            </li>
        </ul>
        <div class="px-40 mt-auto fixed bottom-4 lg:w-11/12 md:w-screen">
            <InputText :holder="holder" />
        </div>
    </div>
</template>


<script setup>
import { storeToRefs } from 'pinia';
import { useTaskStore } from '~/store/task';

const store = useTaskStore();
const { importantList, doneList } = storeToRefs(store);
const task = computed(() => {
    if (selectedFilter.value == "filter-important") {
        return importantList.value
    }
    else if (selectedFilter.value == "filter-done") {
        return doneList.value
    }
    else {
        return store.task
    }
});

const selectedFilter = ref("");

const holder = reactive({
    focused: `Add Task`,
    blur: `Try typing "Interview on 11:00 AM"`
});

const typedText = ref('');
let typingTimer = null;
const typingTimeout = 500;

const handleInput = () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => {
        if (typedText.value.length > 0) {
            store.searchTask(typedText.value);
        } else {
            store.fetchTasks();
        }
    }, typingTimeout);
};

onMounted(async () => {
    await store.fetchTasks();
});
</script>