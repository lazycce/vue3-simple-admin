<template>
    <div :class="classObj" class="app-wrapper">
        <Sidebar class="sidebar-container" />
        <div class="main-container">
            <Navbar />
            <RouterView />
        </div>
    </div>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Sidebar, Navbar } from './components'
import { computed } from 'vue'
import { useAppStore } from '@/stores/app'
const appStore = useAppStore()

const classObj =  computed(() => {
    return {
        openSidebar: appStore.sidebar.opened,
        hideSidebar: !appStore.sidebar.opened,
    }
})
</script>
<style lang="scss"  scoped>
    .main-container {
        min-height: 100%;
        transition: margin-left .28s;
        margin-left: 200px;
        position: relative;
    }
</style>