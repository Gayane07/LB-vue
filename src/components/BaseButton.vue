<template>
    <button :class="['btn', `btn-${type}`, `btn-${size}`, `btn-${priceClass}`, type === 'text' && !selected ? 'hover:border-b-[2px] hover:border-primary' : '',
        selected ? 'border-b-[2px] border-primary text-primary' : '']" :disabled="disabled" @click="handleClick">
        <span v-if="icon" class="flex items-center">
            <component :is="icon" />
        </span>
        <span v-else-if="isStatusButton" class="w-3 h-3 rounded-full" :class="statusIconColor"></span>
        <span class="">
            <slot></slot>
        </span>
    </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    type: {
        type: String,
        default: 'primary'
    },
    size: {
        type: String,
        default: 'medium'
    },
    disabled: {
        type: Boolean,
        default: false
    },
    icon: {
        type: [Object, String],
        default: null
    },
    selected: {
        type: Boolean,
        default: false
    },
    priceClass: {
        type: String,
        default: ''
    },
});

const emit = defineEmits(['click']);

const handleClick = () => {
    if (!props.disabled) {
        emit('click');
    }
};


const isStatusButton = computed(() => props.type === 'status-available' || props.type === 'status-rented');


const statusIconColor = computed(() => {
    if (props.type === 'status-available') {
        return 'bg-primary';
    } else if (props.type === 'status-rented') {
        return 'bg-danger';
    }
    return '';
});
</script>

<style scoped>
.btn {
    @apply flex items-center rounded-[16px] cursor-pointer gap-2.5 transition-colors duration-300 h-full text-[20px];
}

.btn-large {
    @apply py-[16px] px-[24px];
}

.btn-medium {
    @apply py-[24px] px-[14px];
}

.btn-primary {
    @apply bg-primary text-white border-none;
}

.btn-secondary {
    @apply border border-[1px] border-primary text-primary;
}

.btn-text {
    @apply  py-[10px] px-[20px] hover:text-primary rounded-[0] box-border;
}

.btn-action {
    @apply  py-[0] px-[0];
}

.btn-actions-edit {
    @apply  bg-grey text-primary;
}

.btn-status-available {
    @apply  bg-[#94CD64] py-[14px] px-[24px]  rounded-[50px] text-primary bg-opacity-10 text-[15px] font-[600] leading-[18.29px]  w-full flex justify-center gap-[10px];
}

.btn-status-rented {
    @apply  bg-light-danger py-[14px] px-[24px]  rounded-[50px] text-danger text-[15px] font-[600] leading-[18.29px]  w-full flex justify-center gap-[10px];
}

.btn-status-price {
    @apply text-[14px] font-[600] leading-[17.07px] px-[12px] py-[4px] w-full flex justify-center gap-[10px];
}


.btn-actions-edit {
    @apply  bg-grey text-secondary px-[24px] py-[12px] rounded-[50px] text-[15px] font-[600] leading-[18.29px] w-[80%] flex justify-center gap-[10px];
}

.btn-actions-mark {
    @apply border border-[1px] border-primary text-primary rounded-[50px] px-[24px] py-[12px] text-[15px] font-[600] leading-[18.29px] w-[80%] flex justify-center gap-[10px];
}


.btn-text:hover {
    @apply border-b-[2px] border-primary rounded-[0];
}

.btn:disabled {
    @apply opacity-60 cursor-not-allowed;
}
</style>