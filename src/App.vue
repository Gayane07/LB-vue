<script setup>
import Sidebar from '@/components/Sidebar.vue';
import NavBar from '@/components/NavBar.vue';
</script>

<template>
  <div class="flex">
    <Sidebar />

    <main class="flex-1 bg-grey">
      <NavBar />
      <div class="pl-[40px] pr-[100px] h-screen bg-grey">
        <router-view></router-view>
      </div>
    </main>
  </div>
 
</template>