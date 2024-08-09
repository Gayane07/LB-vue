<template>
    <div class="flex px-[30px] py-[20px] gap-[20px] rounded-[16px]" :class="`card-${type}`">
        <div v-if="icon">
            <component :is="icon" :fillColor="color" />
        </div>
        <div class="flex flex-col gap-[4px]">
            <div class="text-[18px] font-[700] leading-21.94">
                {{ title }}
            </div>
            <div class="text-[24px] text-secondary font-[700] leading-[29.26px]">
                ${{ amount }}
            </div>
        </div>

    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: ''
    },
    amount: {
        type: String,
        default: ''
    },
    icon: {
        type: [Object, String],
        default: null
    },
});
const mappedColors = {
    'primary': '#94CD64',
    'danger': '#E81A1A',
    'blue': '#3787FF',
}

const color = mappedColors[props.type];

</script>

<style scoped>
.card-primary {
    @apply text-primary bg-[#94CD641A];
}

.card-blue {
    @apply text-blue bg-light-blue;
}

.card-danger {
    @apply text-danger bg-light-danger;
}
</style>