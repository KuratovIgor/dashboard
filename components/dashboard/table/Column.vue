<template>
    <div
        class="dashboard-column"
        @drop="handleDragDrop($event, column)"
        @dragover.prevent
        @dragenter.prevent
    >
        <div class="dashboard-column__title">{{ column.title }}</div>

        <DashboardCard
            v-for="(card, index) in column.cards"
            :key="index"
            :card="card"
            class="dashboard-column__card"
            draggable="true"
            @dragstart="handleDragStart($event, card)"
        />
    </div>
</template>

<script setup lang="ts">
import { DashboardService } from '@/services/dashboard.service'
import { useDashboardStore } from '@/stores/dashboard.store'
import type { DashboardColumnType, DashboardCardType, DashboardColumnUpdateType } from '@/types/dashboard.types'

type TransferCardType = Omit<DashboardColumnUpdateType, 'columnTo'>

interface Props {
    column: DashboardColumnType
}

const props = defineProps<Props>()

const dashboardStore = useDashboardStore()

const handleDragStart = (event: DragEvent, item: DashboardCardType): void => {
    if (!event.dataTransfer) return

    const transferCard: TransferCardType = {
        columnFrom: props.column.id,
        cardId: item.id,
    }

    event.dataTransfer.dropEffect = 'move'
    event.dataTransfer.effectAllowed = 'move'
    event.dataTransfer.setData('itemId', JSON.stringify(transferCard))
}

const handleDragDrop = async (event: DragEvent, column: DashboardColumnType): Promise<void> => {
    if (!event.dataTransfer) return

    const item: TransferCardType = JSON.parse(event.dataTransfer.getData('itemId'))

    await dashboardStore.updateDashboardColumns({
        ...item,
        columnTo: props.column.id,
    })

    await dashboardStore.getDashboardColumns()
}
</script>

<style lang="scss" scoped>
.dashboard-column {
    width: 100%;

    &__title {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        border: 1px solid $black;
        border-radius: 10px;
        padding: 10px;
    }

    &__card {
        margin-bottom: 20px;
    }
}
</style>
