<template>
    <div>
        <h1>Dashboard</h1>

        <DashboardTable v-if="dashboardColumns && dashboardColumns.length" :columns="dashboardColumns" />
        <div v-else>Empty dashboard</div>
    </div>
</template>

<script setup lang="ts">
import { DashboardService } from '@/services/dashboard.service'

const { data: dashboardColumns } = await DashboardService.getDashboardColumns()
</script>
