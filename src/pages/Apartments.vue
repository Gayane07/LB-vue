<script setup>
import { reactive } from 'vue';
import BaseButton from '@/components/BaseButton.vue';
import AddIcon from '@/components/icons/AddIcon.vue';
import SubHeaderContent from '@/components/SubHeaderContent.vue'
import SubMenu from '@/components/SubMenu.vue';
import BaseTable from '@/components/BaseTable.vue';
import { buildings } from '@/utils/buildingsData';
import SortFilterSelects from '@/components/SortFilterSelects.vue';
import EyeIcon from '@/components/icons/EyeIcon.vue';
import EditIcon from '@/components/icons/EditIcon.vue';
import DeleteIcon from '@/components/icons/DeleteIcon.vue';

const handleClick = () => {
  console.log('Button clicked!');
};

const columns = reactive([
  { key: 'image', label: '', type: 'image' },
  { key: 'building', label: 'Building' },
  { key: 'name', label: 'Name' },
  { key: 'square', label: 'Square area' },
  { key: 'bedRoom', label: 'BedRoom' },
  { key: 'bathRoom', label: 'BathRoom' },
  { key: 'status', label: 'Status' },
  { key: 'actions', label: '' },
]);

const iconList = [
  { component: EyeIcon, type: 'action' },
  { component: EditIcon, type: 'action' },
  { component: DeleteIcon, type: 'action' },
];
const buttons = ["ALL", "Available", "Rented"]

</script>

<template>
  <div class="flex flex-col gap-y-[30px]">
    <SubHeaderContent title="My apartments">
      <template #right-content>
        <BaseButton type="primary" :icon="AddIcon" @click="handleClick" size="large">
          Add New Apartment
        </BaseButton>
      </template>
    </SubHeaderContent>

    <div class="text-black flex justify-between border-b-[1px] border-secondary">
      <SubMenu :buttons="buttons" />
    </div>

    <SortFilterSelects />
    <div>
      <BaseTable :columns="columns" :data="buildings" :iconList="iconList" actionType="action" />
    </div>
  </div>
</template>