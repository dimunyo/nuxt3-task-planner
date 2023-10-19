<template>
    <div class="relative">
        <div v-if="!data.isFocused" class="absolute inset-y-0 top-2 -left-2 flex items-start pl-3.5 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" viewBox="0 0 448 512" fill="currentColor"
                stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
            </svg>
        </div>
        <div v-else class="absolute inset-y-0 top-2 -left-2 flex items-start pl-3.5 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke-width="1.5" stroke="currentColor"
                class="h-6 w-6 text-gray-400" viewBox="0 0 512 512">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
            </svg>
        </div>
        <div class="group rounded-md">
            <form @submit.enter.prevent="EnterKeyEvent" class="w-full shadow-md">
                <input v-model="inputText" @focus="data.isFocused = true" @blur="data.isFocused = false" type="text"
                    id="input-group-1" class="bg-gray-100 text-gray-600 text-sm block w-full pl-10 p-2.5 outline-none"
                    :placeholder="data.placeHolder" required>
            </form>
            <p class="text-gray-500 pt-1 text-sm">Press <span
                    class="text-pink-400 group-focus-within:text-gray-500">enter</span> to add task</p>
        </div>
    </div>
</template>
<script setup>
import { useTaskStore } from '~/store/task'
const store = useTaskStore();
const { holder } = defineProps(['holder']);
const emits = defineEmits(['navigate']);

const data = reactive({
    placeHolder: null,
    isFocused: false
});
const inputText = ref("");

watchEffect(() => {
    if (data.isFocused) {
        data.placeHolder = holder.blur
    } else {
        data.placeHolder = holder.focused
    }
})

const EnterKeyEvent = async () => {
    await store.createNewTask(inputText.value);
    inputText.value = "";
    emits('navigate');
}
</script>