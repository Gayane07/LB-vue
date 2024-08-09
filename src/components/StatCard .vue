<template>
    <div class="stat-card">
        <div>
            <component :is="icon" />
        </div>
        <div class="flex flex-col gap-[9px]">
            <div class="text-primary text-[18px] font-[700] leading-21.94"
                :class="{ 'text-danger': isDanger, 'text-secondary': isSecondary }">{{ title }}</div>
            <div class="text-[32px] font-[700] leading-[39.01px]">${{ amount }}</div>
            <div class="flex justify-center items-center gap-[2px] text-[16px] font-[500] leading-19.5">
                <component :is="changeIcon" />
                <span class="text-primary"
                    :class="{ 'text-danger': isDanger, 'text-secondary': isSecondary }">{{ value }}% </span>
                <span class="ml-1">vs last 30 days</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import IncreaseIcon from './icons/IncreaseIcon.vue';
import DecreaseIcon from './icons/DecreaseIcon.vue';

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    value: {
        type: [String, Number],
        required: true
    },
    amount: {
        type: [String, Number],
        required: true
    },
    icon: {
        type: [Object, String],
        default: null
    },
    isIncreasing: {
        type: Boolean,
        required: true
    },
    isSecondary: {
        type: Boolean,
        default: false
    },
    isDanger: {
        type: Boolean,
        default: false
    }
});

const changeIcon = computed(() => {
    return props.isDanger ? DecreaseIcon : IncreaseIcon;
});


</script>

<style scoped>
.stat-card {
    @apply flex gap-[30px] py-[20px] items-center bg-white rounded-[16px] w-[400px] px-[30px] max-w-[400px] min-w-[200px];
}

.text-secondary {
    @apply text-blue;
}

.text-danger {
    @apply text-[#E81A1A];
}
</style>