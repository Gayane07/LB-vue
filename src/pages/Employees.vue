<script setup>
import { reactive } from 'vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseSelect from '@/components/BaseSelect.vue';
import AddIcon from '@/components/icons/AddIcon.vue';
import SubHeaderContent from '@/components/SubHeaderContent.vue'
import SubMenu from '@/components/SubMenu.vue';
import BaseTable from '@/components/BaseTable.vue';
import { employeesData } from '@/utils/employeesData';
import DeleteIcon from '@/components/icons/DeleteIcon.vue';
import EditIcon from '@/components/icons/EditIcon.vue';

const columns = reactive([
  { key: 'name', label: 'Employee Name' },
  { key: 'phoneNumber', label: 'Phone Number' },
  { key: 'position', label: 'Position' },
  { key: 'startDate', label: 'Start Date' },
  { key: 'monthSalary', label: 'Monthly Salary' },
  { key: 'status', label: 'Status' },
  { key: 'actions', label: '' },
]);

const iconList = [
  { component: EditIcon },
  { component: DeleteIcon },
];

const buttons = ["Employees", "Absence", "Salary"];
</script>

<template>
  <div class="flex flex-col gap-y-[30px]">
    <SubHeaderContent title="Employees">
      <template #right-content>
        <BaseButton type="primary" :icon="AddIcon" size="large">
          Add New Employee
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
    <BaseTable :columns="columns" :data="employeesData" :iconList="iconList" actionType="action" />
  </div>
</template>