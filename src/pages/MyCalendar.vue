<script setup>
import BaseButton from '@/components/BaseButton.vue';
import AddIcon from '@/components/icons/AddIcon.vue';
import SubHeaderContent from '@/components/SubHeaderContent.vue'
import Calendar from '@/components/FullCalendar.vue'

</script>

<template>
  <div class="flex flex-col gap-y-[30px]">
    <SubHeaderContent title="My calendar">
      <template #right-content>
        <BaseButton type="primary" :icon="AddIcon" size="large">
          Add Note
        </BaseButton>
      </template>
    </SubHeaderContent>
    <Calendar />

  </div>
</template>