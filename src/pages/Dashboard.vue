<script setup>
import { ref } from 'vue';
import DashboardChart from '@/components/DashboardChart.vue';
import DateSelectors from '@/components/DateSelectors.vue';
import Expenses from '@/components/Expenses.vue';
import DifferanceIcon from '@/components/icons/DifferanceIcon.vue';
import ExpenseIcon from '@/components/icons/ExpenseIcon.vue';
import IncomeIcon from '@/components/icons/IncomeIcon.vue';
import StatCard from '@/components/StatCard .vue';
import SubHeaderContent from '@/components/SubHeaderContent.vue'

const income = ref(1000);
const expenses = ref(500);
const difference = ref(income.value - expenses.value);
</script>

<template>
  <div>
    <SubHeaderContent title="Dashboard">
      <template #right-content>
        <DateSelectors />
      </template>
    </SubHeaderContent>

    <div class="text-black flex justify-between mt-[30px]">
      <StatCard title="Total Income" :value="6" :icon="IncomeIcon" :isIncreasing="true" :amount="1000" />
      <StatCard title="Total Expenses" :value="5" :icon="ExpenseIcon" :isIncreasing="false" :amount="500"
        :isDanger="true" />
      <StatCard title="Difference" :value="7" :icon="DifferanceIcon" :isIncreasing="difference > 0" :amount="1500"
        :isSecondary="true" />
    </div>
    <div class="flex mt-[42px] gap-[30px]">
      <DashboardChart />
      <Expenses />
    </div>

  </div>
</template>