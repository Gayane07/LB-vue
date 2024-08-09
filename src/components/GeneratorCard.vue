<script setup>
import { reactive } from 'vue';
import BaseButton from './BaseButton.vue';
import BaseTable from './BaseTable.vue';
import { generatorCardData } from '@/utils/generatorCardData';

const props = defineProps({
    amount: String
})

const columns = reactive([
    { key: 'date', label: 'Date' , align: 'left'},
    { key: 'removingDieselCount', label: 'Removing diesel count' },
]);


</script>

<template>
    <div class="bg-white flex flex-col gap-[30px] p-[30px] rounded-[24px]">
        <div class="flex justify-between items-center">
            <span class="text-[24px] font-[700] leading-[28px]">
                Removing diesel
            </span>
            <BaseButton size="large">
                Add diesel
            </BaseButton>

        </div>
        <div class="flex justify-start items-center gap-[10px]">
            <span class="text-[20px] text-blue font-[700] leading-24.38">Tank balance: </span> <span class="text-[32px] font-[700] leading-[39.01px]">{{ amount }}</span>
        </div>

        <div>
            <BaseTable :columns="columns" :data="generatorCardData" />
        </div>

    </div>
</template>