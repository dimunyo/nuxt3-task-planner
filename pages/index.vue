<template>
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen space-y-5">
        <h1 class="text-5xl text-gray-800 font-medium text-center">Welcome To Task Planner</h1>
        <p class="text-2xl xl:w-1/4 text-center text-gray-500 pb-5">Get things done with your day, a list
            that
            refreshes
            every day.
        </p>
        <div class="w-5/6">
            <InputText :holder="holder" @navigate="navigate" />
        </div>
    </div>
</template>
<script setup>
const holder = reactive({
    focused: `What's your plan for today?`,
    blur: `Try typing "Submit report by Friday 3 PM"`
});

const navigate = () => {
    navigateTo('/tasks')
}
</script>