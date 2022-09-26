<template>
  <div class="navbar">
    <el-icon :size="40" @click="toggleSideBar" ><Expand /></el-icon>
  </div>
</template>

<script setup lang="ts">
import { Expand, Fold } from '@element-plus/icons-vue'
import { useAppStore } from '@/stores/app'
import { computed } from 'vue'

const appStore = useAppStore()

const toggleSideBar = appStore.toggleSideBar

const sodebarOpened = computed(() => appStore.sidebar.opened)
</script>

<style lang="scss" scoped>
  .navbar {
    height: 50px;
    overflow: hidden;
    position: relative;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
  }
</style>