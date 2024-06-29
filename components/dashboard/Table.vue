<template>
    <div v-loading.page="dashboardStore.loading" class="dashboard-table">
        <div
            v-for="(column, index) in columns"
            :key="index"
            class="dashboard-table__column"
            @drop="handleDragDrop($event, column)"
            @dragover.prevent
            @dragenter.prevent
        >
            <div class="dashboard-table__column-title">{{ column.title }}</div>

            <DashboardCard
                v-for="(card, index) in column.cards"
                :key="index"
                :card="card"
                class="dashboard-table__card"
                draggable="true"
                @dragstart="handleDragStart($event, card)"
                @edit="handleCardEdit"
            />
        </div>
    </div>

    <DashboardCardModal v-model="editModalActive" :card="editCard" />
</template>

<script setup lang="ts">
import type { DashboardColumnType, DashboardCardType } from '@/types/dashboard.types'

interface Props {
    columns: DashboardColumnType[]
}

defineProps<Props>()

const dashboardStore = useDashboardStore()

const editCard = ref<DashboardCardType | null>(null)
const editModalActive = ref(false)

const handleDragStart = (event: DragEvent, card: DashboardCardType): void => {
    if (!event.dataTransfer) return

    event.dataTransfer.dropEffect = 'move'
    event.dataTransfer.effectAllowed = 'move'
    event.dataTransfer.setData('itemId', card.id)
}

const handleDragDrop = async (event: DragEvent, column: DashboardColumnType): Promise<void> => {
    if (!event.dataTransfer) return

    const cardId = event.dataTransfer.getData('itemId')

    await dashboardStore.updateDashboardColumns({
        cardId,
        columnId: column.id,
    })
}

const handleCardEdit = (card: DashboardCardType): void => {
    editCard.value = card
    editModalActive.value = true
}
</script>

<style lang="scss" scoped>
.dashboard-table {
    display: flex;
    justify-content: space-between;
    column-gap: 30px;

    &__column {
        width: 100%;

        &-title {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 10px;
            border: 1px solid $black;
            border-radius: 10px;
            padding: 10px;
            background-color: rgb(31 41 55);
        }
    }

    &__card {
        margin-bottom: 20px;
    }
}
</style>
