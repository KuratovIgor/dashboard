<template>
    <div>
        <h1>Dashboard</h1>

        <DashboardTable v-if="dashboardStore.dashboardColumns && dashboardStore.dashboardColumns.length" :columns="dashboardStore.dashboardColumns" />
        <div v-else-if="!dashboardStore.loading">Empty dashboard</div>
    </div>
</template>

<script setup lang="ts">
import { useDashboardStore } from '@/stores/dashboard.store'

const dashboardStore = useDashboardStore()

await dashboardStore.getDashboardColumns()
</script>
