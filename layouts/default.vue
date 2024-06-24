<template>
    <div class="default-container">
        <el-menu
            :default-active="activeIndex"
            @open="handleMenuTabOpen"
        >
            <el-menu-item index="1">
                <el-icon><list /></el-icon>
                <span>Dashboard</span>
            </el-menu-item>
        </el-menu>

        <div class="page-container">
            <NuxtPage />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { List } from '@element-plus/icons-vue'

const activeIndex = ref('1');

const handleMenuTabOpen = (key: string) => {
  activeIndex.value = key
}
</script>
