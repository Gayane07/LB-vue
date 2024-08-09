<script setup lang="ts">
import { progressBarItems } from '@/utils/progressBarItems';
import ProgressBar from './ProgressBar.vue';
</script>

<template>
    <div class="flex flex-col flex-1 justify-center gap-y-[30px] bg-white p-[30px] rounded-[24px] text-black">
        <div class="text-secondary text-[24px] font-[700]">Expenses</div>
        <ProgressBar v-for="item in progressBarItems" :color="item.color":isFlex="true" :percent="item.percent" :label="item.label" amount="200$" />
    </div>
</template>