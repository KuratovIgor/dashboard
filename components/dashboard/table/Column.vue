<template>
    <div
        class="dashboard-column"
        @drop="handleDragDrop"
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
import { useDashboardStore } from '@/stores/dashboard.store'
import type { DashboardColumnType, DashboardCardType } from '@/types/dashboard.types'

interface Props {
    column: DashboardColumnType
}

const props = defineProps<Props>()

const dashboardStore = useDashboardStore()

const handleDragStart = (event: DragEvent, item: DashboardCardType): void => {
    if (!event.dataTransfer) return

    event.dataTransfer.dropEffect = 'move'
    event.dataTransfer.effectAllowed = 'move'
    event.dataTransfer.setData('itemId', item.id)
}

const handleDragDrop = async (event: DragEvent): Promise<void> => {
    if (!event.dataTransfer) return

    const cardId = event.dataTransfer.getData('itemId')

    await dashboardStore.updateDashboardColumns({
        cardId,
        columnId: props.column.id,
    })
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
