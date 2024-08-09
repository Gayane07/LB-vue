<template>
    <div class="base-input flex flex-col gap-[10px] text-[16px] leading-19.5 w-full">
      <label v-if="label" :for="inputId" class="font-[500]">
        {{ label }}
      </label>
      <input
        :id="inputId"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        @input="$emit('update:modelValue', $event.target.value)"
        :class="['form-input', inputClass]"
      />

      <p v-if="error" class="mt-1 text-sm text-red-600">
        {{ error }}
      </p>
    </div>
  </template>
  
  <script setup>
  import { computed, defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    modelValue: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
      default: ''
    },
    inputClass: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: null
    }
  });
  
  const emits = defineEmits(['update:modelValue']);
  
  const inputId = computed(() => props.id || `input-${Math.random().toString(36).substr(2, 9)}`);
  </script> 
  
  <style scoped>
  .form-input {
    @apply h-[52px] py-[16px] px-[20px] border-[1px] border-grey rounded-[8px] font-[500];
  }
  
  .form-input:focus {
    border-color: #ced1da; /* Tailwind's blue-600 */
  }
  </style>
  