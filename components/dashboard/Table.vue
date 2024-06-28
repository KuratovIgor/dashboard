<template>
    <div class="dashboard-table">
        <DashboardTableColumn v-for="(column, index) in columns" :key="index" :column="column" />
    </div>
</template>

<script setup lang="ts">
import type { DashboardColumnType } from '@/types/dashboard.types'

interface Props {
    columns: DashboardColumnType[]
}

defineProps<Props>()

const dashboardStore = useDashboardStore()
</script>

<style lang="scss" scoped>
.dashboard-table {
    display: flex;
    justify-content: space-between;
    column-gap: 30px;
}
</style>
