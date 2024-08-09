<template>
  <div class="w-[900px] bg-white rounded-[24px] px-[30px] pt-[30px]">
    <LineChartGenerator :data="chartData" :style="myStyles" :options="chartOptions" />
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { Line as LineChartGenerator } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, PointElement, CategoryScale, LinearScale, LineElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

const chartData = reactive({
  labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
  datasets: [
    {
      label: 'Weekly',
      backgroundColor: '#2D5BFF',
      borderColor: '#2D5BFF',
      borderWidth: 3,
      data: [500, 3900, 4900, 40000, 3900, 8000, 1700],
      stack: 'Stack 0'
    },
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
      }
    },
    title: {
      display: true,
      text: 'Diesel consumption in liters ',
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
});

const myStyles = {
  paddingTop: '20px',
}
</script>
