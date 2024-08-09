<script setup>
import { reactive } from 'vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseSelect from '@/components/BaseSelect.vue';
import ExpensesCard from '@/components/ExpensesCard.vue';
import AddIcon from '@/components/icons/AddIcon.vue';
import IncomeIcon from '@/components/icons/IncomeIcon.vue';
import SubHeaderContent from '@/components/SubHeaderContent.vue'
import SubMenu from '@/components/SubMenu.vue';
import BaseTable from '@/components/BaseTable.vue';
import { expensesData } from '@/utils/expensesData';
import Sort from '@/components/icons/Sort.vue';
import EditIcon2 from '@/components/icons/EditIcon2.vue';
import MarkIcon from '@/components/icons/MarkIcon.vue';

const columns = reactive([
  { key: 'date', label: 'Date', icon: Sort },
  { key: 'amount', label: 'Amount' },
  { key: 'dateValue', label: 'Date' },
  { key: 'notes', label: 'Notes' },
  { key: 'status', label: 'Status' },
  { key: 'actions', label: '' },
]);

const iconList = [
  { component: EditIcon2, type: 'action', text: 'Edit', actionType: 'actions-edit' },
  { component: MarkIcon, type: 'action', text: 'Mark', actionType: 'actions-mark' },
];

const buttons = ["Employees", "Absence", "Salary", "Electricity", "Water", "Diesel", "Big Maintenance", "Incurance cars/Health"]
</script>

<template>
  <div class="flex flex-col gap-y-[30px]">
    <SubHeaderContent title="Expenses">
      <template #right-content>
        <BaseButton type="primary" :icon="AddIcon" size="large">
          Add New Expense
        </BaseButton>
      </template>
    </SubHeaderContent>

    <div class="text-black flex justify-between border-b-[1px] border-secondary">
      <SubMenu :buttons="buttons" />
    </div>

    <div class="text-black flex justify-between">
      <BaseSelect :icon="FilterIcon" :options="[]" />
      <BaseButton type="secondary" :icon="AddIcon" size="large" :iconColor="primary">
        Add
      </BaseButton>
    </div>


    <div class="text-black flex justify-start gap-[30px]">
      <ExpensesCard :icon="IncomeIcon" title="Total" type="blue" amount="2000" />
      <ExpensesCard :icon="IncomeIcon" title="Amount paid" type="primary" amount="1500" />
      <ExpensesCard :icon="IncomeIcon" title="Amount to be paid" type="danger" amount="500" />
    </div>
    <BaseTable :columns="columns" :data="expensesData" :iconList="iconList" actionType="actions-edit" />
  </div>
</template>