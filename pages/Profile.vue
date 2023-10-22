<template>
    <div class="flex flex-col w-full gap-y-4">
        <Progress />
        <div class="flex w-full space-x-4">
            <div class="flex flex-col w-full shadow-md">
                <Summary />
                <GeneralDetails />
                <ProfessionalStatus />
                <Preferences />
            </div>

            <div class="flex flex-col w-2/5 space-y-4">
                <VideoIntroduction />
                <ProfileProgress />
                <ProfileRecommendation />
            </div>
        </div>

    </div>
</template>



<script setup>
definePageMeta({
    layout: "custom",
});
</script>