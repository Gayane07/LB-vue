<template>
    <div class="w-[900px] bg-white rounded-[24px] px-[30px] pt-[30px]">
        <Bar :data="chartData" :style="myStyles" :options="chartOptions" />
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const chartData = reactive({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
        {
            label: 'Building 1',
            backgroundColor: '#962DFF',
            data: [40000, 39000, 10000, 40000, 39000, 80000],
            stack: 'Stack 0'
        },
        {
            label: 'Building 2',
            backgroundColor: '#F0E5FC',
            borderRadius: 10,
            data: [30000, 29000, 20000, 30000, 29000, 70000],
            stack: 'Stack 0'
        }
    ]
});

const chartOptions = reactive({
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
            align: 'end',
            labels: {
                font: {
                    size: 16,
                    weight: 500,
                    lineHeight: '18px'
                },
                boxWidth: 14,
                boxHeight: 14,
                useBorderRadius: true,
                borderRadius: 7,
            }
        },
        title: {
            display: true,
            text: 'Incomes',
            position: 'top',
            align: 'start',
            font: {
                size: 24,
                weight: 700,
                lineHeight: '28px'
            },
            padding: {
                bottom: -20
            }
        },
    },
    scales: {
        x: {
            stacked: true,
            grid: {
                display: false
            },
            ticks: {
                padding: 10,
                font: {
                    size: '14px',
                    weight: 400,
                    lineHeight: '16px'
                },
            },
            categoryPercentage: 0.8
        },
        y: {
            stacked: true,
            grid: {
                display: true,
                borderDash: [5, 5],
            },
            border: {
                dash: [6, 6],
            },
            ticks: {
                padding: 10,
                font: {
                    size: '16px',
                    weight: 400,
                    lineHeight: '18px'

                },
                callback: function (value, index, values) {
                    if (value === 0) return '0';
                    if (value >= 1000000) return `${value / 1000000}M`;
                    if (value >= 1000) return `${value / 1000}k`;
                    return value;
                }
            },
        }
    },
    barPercentage: 0.6,
});

const myStyles = {
    paddingTop: '20px',
}
</script>
