<template>
    <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="0.5" width="40" height="40" rx="20" :fill="fillColor" />
        <path
            d="M10 22.5C10 18.729 10 16.843 11.172 15.672C12.343 14.5 14.229 14.5 18 14.5H22C25.771 14.5 27.657 14.5 28.828 15.672C30 16.843 30 18.729 30 22.5C30 26.271 30 28.157 28.828 29.328C27.657 30.5 25.771 30.5 22 30.5H18C14.229 30.5 12.343 30.5 11.172 29.328C10 28.157 10 26.271 10 22.5Z"
            stroke="white" stroke-width="1.5" />
        <path opacity="0.5"
            d="M24 14.5C24 12.614 24 11.672 23.414 11.086C22.828 10.5 21.886 10.5 20 10.5C18.114 10.5 17.172 10.5 16.586 11.086C16 11.672 16 12.614 16 14.5"
            stroke="white" stroke-width="1.5" />
        <path opacity="0.5"
            d="M20 25.833C21.105 25.833 22 25.087 22 24.167C22 23.247 21.105 22.5 20 22.5C18.895 22.5 18 21.754 18 20.833C18 19.913 18.895 19.167 20 19.167M20 25.833C18.895 25.833 18 25.087 18 24.167M20 25.833V26.5M20 19.167V18.5M20 19.167C21.105 19.167 22 19.913 22 20.833"
            stroke="white" stroke-width="1.5" stroke-linecap="round" />
    </svg>

</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    fillColor: String
})
</script>