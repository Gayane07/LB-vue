<script setup lang="ts">
const props = defineProps<{
    title: string;
}>();
</script>

<template>
    <div class='text-black flex justify-between items-center font-extrabold'>
        <span class="text-[40px]">{{ title }}</span>
        <div>
            <slot name="right-content"></slot>
        </div>
    </div>
</template>