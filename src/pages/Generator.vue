<script setup>
import GeneratorCard from '@/components/GeneratorCard.vue';
import LineChart from '@/components/LineChart.vue';
import SubHeaderContent from '@/components/SubHeaderContent.vue';

import { shallowRef } from 'vue';

const chartData = shallowRef({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Sales',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: true,
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgba(75,192,192,1)',
        },
    ],
});
</script>

<template>
    <div class="flex flex-col gap-y-[30px]">
        <SubHeaderContent title="Maintenace">

        </SubHeaderContent>

        <div class="text-black flex justify-between gap-[30px]">
            <GeneratorCard amount="2000" />
            <LineChart :chart-data="chartData" />
        </div>


    </div>
</template>