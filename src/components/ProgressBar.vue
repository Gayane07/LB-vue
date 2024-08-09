<template>
    <div class="progress-bar-container"                     :class="{
                        'flex': isFlex,
                    }">
        <div class="progress-bar-label">{{ label }}</div>
        <div class="progress-bar-wrapper">
            <div class="progress-bar-fill" :style="{
                width: `${percent}%`,
                backgroundColor: color
            }"></div>
        </div>
        <div>
            {{ amount }}
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    color: {
        type: String,
        required: true
    },
    percent: {
        type: [Number, String],
        required: true
    },
    label: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    isFlex: {
        type: Boolean,
        default: false
    }
});
</script>

<style scoped>
.progress-bar-container {
    @apply gap-[30px] w-full items-center;
}

.progress-bar-label {
    @apply text-secondary text-[14px] font-[400] leading-[16px] w-[26%];
}

.progress-bar-wrapper {
    @apply bg-[#f0f0f0] rounded-[4px] overflow-hidden relative h-[16px] flex-1;
}

.progress-bar-fill {
    @apply h-[100%];
}
</style>