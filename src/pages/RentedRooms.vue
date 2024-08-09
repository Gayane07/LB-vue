<script setup>
import { ref } from 'vue';
import BaseButton from '@/components/BaseButton.vue';
import AddIcon from '@/components/icons/AddIcon.vue';
import SortFilterSelects from '@/components/SortFilterSelects.vue';
import SubHeaderContent from '@/components/SubHeaderContent.vue';
import { rentedRooms } from '@/utils/rentedRoomsData'
import BaseTable from '@/components/BaseTable.vue';
import EyeIcon from '@/components/icons/EyeIcon.vue';

const columns = ref([
  { key: 'building', label: 'Building' },
  { key: 'clientName', label: 'Client Name' },
  { key: 'rentTimeRange', label: 'Rent Time Range' },
  { key: 'price', label: 'Price' },
  { key: 'actions', label: '' },
]);

const iconList = [
  { component: EyeIcon, type: 'action' },
];

</script>

<template>
  <div class="flex flex-col gap-y-[30px]">
    <SubHeaderContent title="Rented rooms">
      <template #right-content>
        <BaseButton type="primary" :icon="AddIcon" size="large">
          Add New Rent
        </BaseButton>
      </template>
    </SubHeaderContent>
    <SortFilterSelects />
    <div>
      <BaseTable :columns="columns" :data="rentedRooms" :iconList="iconList" actionType="action" />
    </div>
  </div>
</template>