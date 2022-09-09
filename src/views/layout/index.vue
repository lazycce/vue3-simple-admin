<template>
    <div class="app-wrapper">
        <Sidebar class="sidebar-container" />
        <div class="main-container">
            <RouterView />
        </div>
    </div>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Sidebar } from './components'
</script>
<style  scoped>
    .sidebar-container {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        width: 200px !important;
        z-index: 1001;
        background-color: #282C34;
    }
    .main-container {
        min-height: 100%;
        transition: margin-left .28s;
        margin-left: 200px;
        position: relative;
    }
</style>