<template>
  <div>
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
  </div>
</template>
<script setup>
import { useTaskStore } from '~/store/task'
const store = useTaskStore();

const formData = ref({
  title: "SAMPLE STRINGYYZ",
  assignee: {},
  is_done: false,
  is_important: false,
  sort: 2,
})
onMounted(async () => {
  //await store.createNewTask(formData.value);
  //await store.updateExistingTask("100", formData.value);
  //await store.fetchUsers();
  //await store.deleteTask("102");
  await store.searchTask("SAMPLE STRING")
})
</script>