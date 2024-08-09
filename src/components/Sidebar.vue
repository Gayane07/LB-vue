<script setup>
import { links } from '@/utils/sideBarItems';
import { shallowRef } from 'vue'
import logoIcon from './icons/logoIcon.vue';
import { useRoute } from 'vue-router';

const sidebarItems = shallowRef(links);
const route = useRoute();
</script>

<template>
    <aside class="bg-secondary text-white p-4 justify-self-start h-auto">
        <div class="mx-[60px] mb-[60px] text-left">
            <logoIcon class="w-[257px]" />
        </div>
        <nav>
            <div class="mr-[30px] ml-[60px]">
                <router-link v-for="(link, index) in sidebarItems" :key="index" :to="link.path"
                    class="flex items-center w-full justify-items-start gap-[10px] py-[22px] pl-[24px] rounded-[12px] mb-[1px]"
                    :class="{
                        'bg-primary text-white': route.path === link.path,
                        'hover:bg-primary': route.path !== link.path
                    }">
                    <span v-if="link.icon">
                        <component :is="link.icon" class="text-xl w-[24px]" />
                    </span>
                    <span class="text-xl font-[500] text-left leading-24.38">
                        {{ link.label }}
                    </span>
                </router-link>
            </div>
        </nav>
    </aside>
</template>