<template>
    <div class="bg-custom-color min-h-screen">
        <NavBar class="sticky top-0" />
        <div class="flex gap-4 relative mx-auto pl-52 py-6 lg:flex w-8/12">
            <SideBar class="fixed left-64 flex-wrap" />
            <slot />
        </div>
    </div>
</template>

<style scoped>
.bg-custom-color {
    background-color: #F6F9FD;
}
</style>