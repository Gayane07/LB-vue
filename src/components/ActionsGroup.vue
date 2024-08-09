<script setup lang="ts">
import BaseButton from './BaseButton.vue';

interface Icon {
  component: any;
  type: string;
  text: string;
  actionType: string;
}

const props = defineProps<{
  icons: Icon[];
  type: string
}>();

const filteredIcosns = props.icons.filter(icon => !icon.actionType || icon.actionType === props.type)
 
</script>

<template>
  <div class="flex gap-[10px]">
    <BaseButton
      v-for="(icon, index) in filteredIcosns"
      :key="index"
      size="large"
      :type="type"
      :icon="icon.component"
    >{{ icon.text }}</BaseButton>
  </div>
</template>