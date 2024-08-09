<template>
    <div class="flex gap-[10px] items-center bg-white border-none rounded-[50px] px-[24px] py-[6px]">
      <span v-if="icon">
            <component :is="icon" />
        </span>
      <span>{{ label }}</span>
      <span class="rounded-[8px]">
        <select
          class="form-select block w-full  shadow-sm border-none focus:outline-none focus:ring-0"
          :value="modelValue"
          @change="$emit('update:modelValue', $event.target.value)"
        >
          <option v-for="option in options" :key="option.value" :value="option.value" class="text-[16px] font-[500] leading-19.5 text-red px-3 py-2">
            {{ option.label }}
          </option>
        </select>
      </span>
    </div>
  </template>

  <script setup>
  import { onMounted } from 'vue';
  
  const props = defineProps({
    label: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      required: true
    },
    modelValue: {
      type: String,
      default: ''
    },
    icon: {
        type: [Object, String],
        default: null
    },
  });
  
  const emits = defineEmits(['update:modelValue']);
  
  onMounted(() => { 
    if (!props.modelValue && props.options.length > 0) {
      emits('update:modelValue', props.options[0].value);
    }
  });
  
  </script>