<template>
  <div class="bg-white py-[10px] px-[20px] rounded-[24px]">
    <table class="min-w-full divide-y divide-grey" :class="className">
      <thead class="bg-white">
        <tr>
          <th v-for="column in columns" :key="column.key" class="font-[600] text-secondary tracking-wider"
            :class="`text-${column.align || 'center'}`">
            <span>{{ column.label }}</span>
            <component v-if="column.icon" :is="column.icon" class="inline-block ml-2" />
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-grey divide-grey">
        <tr v-for="(row, rowIndex) in data" :key="rowIndex" class="px-[20px] py-[19px]">
          <td v-for="column in columns" :key="column.key" class="whitespace-nowrap  font-[500]"
            :class="getTdClasses(row, column)">
            <template v-if="column.type === 'image'">
              <img :src="`/src/assets/images/${row[column.key]}`" alt=""
                class="w-[80px] h-auto object-cover rounded-md" />
            </template>

            <template v-else-if="column.key === 'status'" class="flex justify-center">
              <div class="flex w-[90%] justify-center">
                <BaseButton size="medium"
                  :type="`${row[column.key] === 'Available' || row[column.key] === 'Paid' || row[column.key] === 'Active' ? 'status-available' : 'status-rented'}`"
                  class="bg-light-danger" @click="logStatus(row)">
                  {{ row[column.key] }}
                </BaseButton>
              </div>
            </template>
            <template v-else-if="column.key === 'price'" class="flex justify-center">
              <PriceDetails :price="row[column.key]" :total="row.total" :type="row.status" />
            </template>
            <template v-else-if="column.key === 'actions'" class="flex justify-center">
              <ActionsGroup :type="getActionType(row.status)" :icons="iconList" />
            </template>
            <template v-else>
              {{ row[column.key] || '-' }}
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import BaseButton from './BaseButton.vue';
import ActionsGroup from './ActionsGroup.vue';
import PriceDetails from './PriceDetails.vue';

interface Column {
  key: string;
  label: string;
  type?: string;
  icon?: string | null;
  align?: string;
}

interface Icon {
  component: any;
  type: string;
  text: string;
  actionType: string;
}

const props = defineProps<{
  columns: Column[];
  data: Record<string, any>[];
  iconList?: Icon[];
  actionType?: string,
  className?: string
}>();

const getActionType = (value) => {
  if (props.actionType === 'actions-edit') {
    return value === 'Unpaid' ? 'actions-mark' : 'actions-edit';
  }

  return props.actionType;
}

function logStatus(value) {
  console.log('Status value:', value);
}

const getButtonType = (value) => {
  if (value === 'Available') {
    return 'status-available';
  } else if (value === 'Rented') {
    return 'status-rented';
  }
  return 'default';
};

const getTdClasses = (row, column) => {
  const classes = [['status-available', 'status-rented'].includes(getButtonType(row[column.key])) || ['price', 'status'].includes(column.key) ? 'flex justify-center' : '', `text-${column.align || 'center'}`];

  console.log(classes, 'seeeeeeeeeeee');

  return classes;
};

</script>

<style scoped>
table {
  @apply rounded-[20px];
}

th {
  @apply px-[20px] py-[16px] text-[18px] leading-21.94;
}

td {
  @apply px-[12px] py-[16px] text-[18px] leading-21.94;
}

table {
  border-spacing: 0;
}

table tr:last-child td:last-child {
  border-bottom-right-radius: 10px;
}

table tr:last-child td:first-child {
  border-bottom-left-radius: 10px;
}

table tr:first-child th:first-child {
  border-top-left-radius: 10px;
}

table tr:first-child th:last-child {
  border-top-right-radius: 10px;
}
</style>