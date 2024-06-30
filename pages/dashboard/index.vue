<template>
    <div class="dashboard-page">
        <div class="dashboard-page__header">
            <h1>Dashboard</h1>

            <UButton
                icon="i-heroicons-plus-circle"
                @click="handleCreateModalOpen"
            >
                Create task card
            </UButton>
        </div>

        <DashboardTable v-if="dashboardStore.dashboardColumns && dashboardStore.dashboardColumns.length" :columns="dashboardStore.dashboardColumns" />
        <div v-else-if="!dashboardStore.loading">Empty dashboard</div>

        <DashboardCardCreateModal ref="cardCreateModalRef" />
    </div>
</template>

<script setup lang="ts">
import type { DashboardCardCreateModal } from '#build/components'

const dashboardStore = useDashboardStore()

const cardCreateModalRef = ref<InstanceType<typeof DashboardCardCreateModal> | null>(null)

const handleCreateModalOpen = (): void => {
    cardCreateModalRef.value?.open()
}

await dashboardStore.getDashboardColumns()
</script>

<style lang="scss" scoped>
.dashboard-page {
    &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
</style>
