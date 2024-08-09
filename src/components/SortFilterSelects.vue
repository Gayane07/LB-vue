<script setup lang="ts">
import { ref } from 'vue';
import SortIcon from './icons/SortIcon.vue';
import FilterIcon from './icons/FilterIcon.vue';
import BaseSelect from './BaseSelect.vue';

const sortByOptions = ref([
  { value: 'Item 1', label: 'Sort By' },
  { value: 'Item 2', label: 'Item 2' },
  { value: 'Item 3', label: 'Item 3' },
  { value: 'Item 4', label: 'Item 4' },
]);

const filterByOptions = ref([
  { value: 'Category 1', label: 'Filter by' },
  { value: 'Category 2', label: 'Category 2' },
  { value: 'Category 3', label: 'Category 3' },
  { value: 'Category 4', label: 'Category 4' },
]);

const sortBy = ref('');
const filterBy = ref('');
</script>

<template>
  <div class="text-black flex justify-between">
    <BaseSelect :icon="SortIcon" :options="sortByOptions" v-model="sortBy" />
    <BaseSelect :icon="FilterIcon" :options="filterByOptions" v-model="filterBy" />
  </div>
</template>