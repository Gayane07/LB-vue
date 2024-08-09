<template>
    <div class="flex gap-[30px] items-center text-[16px] font-[500] leading-19.5">
      <BaseSelect
        label="Year"
        :options="years"
        v-model="selectedYear"
      />
      <BaseSelect
        label="Month"
        :options="months"
        v-model="selectedMonth"
      />
    </div>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue';
  import BaseSelect from '@/components/BaseSelect.vue';
  
  const years = reactive([
    { value: '2020', label: '2020' },
    { value: '2021', label: '2021' },
    { value: '2022', label: '2022' },
    { value: '2023', label: '2023' },
    { value: '2024', label: '2024' }
  ]);
  
  const months = reactive([
    { value: '01', label: 'January' },
    { value: '02', label: 'February' },
    { value: '03', label: 'March' },
    { value: '04', label: 'April' },
    { value: '05', label: 'May' },
    { value: '06', label: 'June' },
    { value: '07', label: 'July' },
    { value: '08', label: 'August' },
    { value: '09', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' }
  ]);
  
  const selectedYear = ref('');
  const selectedMonth = ref('');
  </script>
  