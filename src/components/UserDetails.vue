<script setup lang="ts">
import LogoutIcon from './icons/logoutIcon.vue';
import NotificationIcon from './icons/notificationIcon.vue';
</script>

<template>
    <div class="flex text-black gap-[30px]">
        <NotificationIcon class="w-[24px] h-[24px]" />
        <button class="border-none flex gap-[10px] items-center">
            <LogoutIcon class="w-[24px] h-[24px] text-18px font-[500] leading-21.94 text-lef" /> Logout
        </button>
    </div>
</template>