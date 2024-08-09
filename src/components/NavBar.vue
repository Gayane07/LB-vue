<script setup>
import SearchIcon from './icons/searchIcon.vue';
import UserDetails from './UserDetails.vue';

</script>

<template>
   <div class="flex justify-between items-center py-[30px] pl-[40px] pr-[110px] border-b border-secondary mb-[30px]">
      <div class="relative">
         <input
            class="w-[520px] border-none rounded-[50px] h-[50px] pl-12 focus:border-0 focus:outline-none focus:ring-0 text-secondary"
            placeholder="Search..." />
         <SearchIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-black w-[24px] h-[24px]" />
      </div>
      <UserDetails />
   </div>
</template>
