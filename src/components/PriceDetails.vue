<script setup lang="ts">
import BaseButton from './BaseButton.vue';
import ProgressBar from './ProgressBar.vue';
const props = defineProps({
    type: String,
    price: String,
    total: String
})

const statusClass = props.type === 'Paid' ? 'status-available' : 'status-rented';

</script>

<template>
    <div class="flex flex-col items-center  gap-y-[9px] w-fit">
        <div class="flex justify-between gap-[30px]">
            <div class="flex flex-col items-start gap-[4px]">
                <div class="text-[12px] font-[500] leading-[14.63px]">February rent</div>
                <div class="flex justify-start items-center gap-[10px]">
                    <div class="text-[16px] font-[600] leading-19.5">${{ price }}</div>
                    <BaseButton :type="statusClass" priceClass="status-price">{{ type }}</BaseButton>
                </div>

            </div>
            <div class="flex flex-col gap-[4px]">
                <div class="text-[12px] font-[500] leading-[14.63px]">Total budget</div>
                <div class="text-[16px] font-[600] leading-19.5">${{ total }}</div>
            </div>
        </div>
        <ProgressBar color="#94CD64" percent="18" />
    </div>
</template>