<template>
    <div class="flex flex-col items-start justify-items-center py-8 mx-auto w-full min-h-full overflow-y-auto space-y-5">
        <h1 class="text-3xl text-gray-800 font-medium justify-start px-40 mt-20">Task Planner</h1>
        <ul v-for="item in task" :key="item.id" class="divide-y divide-gray-200 px-40 h-full w-full">
            <li class="group cursor-pointer bg-gray-100 hover:bg-gray-200 w-100 rounded-md">
                <Task :task-item="item" />
            </li>
        </ul>
        <div class="px-40 mt-auto fixed bottom-4 w-11/12">
            <InputText :holder="holder" />
        </div>
    </div>
</template>


<script setup>
import { useTaskStore } from '~/store/task';

const store = useTaskStore();
const task = computed(() => store.task);

const holder = reactive({
    focused: `Add Task`,
    blur: `Try typing "Interview on 11:00 AM"`
});

onMounted(async () => {
    await store.fetchTasks();
});
</script>