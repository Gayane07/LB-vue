<script setup lang="ts">
import { ref } from 'vue';
import BaseButton from './BaseButton.vue';

const selectedButton = ref('All');
const props = defineProps({
    buttons: Array<string>
})

const handleButtonClick = (button: string) => {
    selectedButton.value = button;
};
</script>

<template>
    <div class="text-secondary text-[20px] font-[600] leading-24.38 flex justify-start">
        <BaseButton v-for="button in buttons" :key="button" type="text" :selected="selectedButton === button"
            @click="handleButtonClick(button)">
            {{ button }}
        </BaseButton>
    </div>
</template>


<style scoped>
div {
    @apply h-auto;
}
</style>