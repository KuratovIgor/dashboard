<template>
    <div v-loading.page="dashboardStore.loading || dashboardCardStore.loading" class="dashboard-table">
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
                @edit="handleEditModalOpen"
                @remove="handleRemoveModalOpen"
            />
        </div>
    </div>

    <DashboardCardEditModal ref="cardEditModalRef" />
    <DashboardCardRemoveModal ref="cardRemoveModalRef" />
</template>

<script setup lang="ts">
import type { DashboardCardEditModal, DashboardCardRemoveModal } from '#build/components';
import { useDashboardDrag } from '@/composables/useDashboardDrag';
import type { DashboardCardType, DashboardColumnType } from '@/types/dashboard.types'

interface Props {
    columns: DashboardColumnType[]
}

defineProps<Props>()

const dashboardStore = useDashboardStore()
const dashboardCardStore = useDashboardCardStore()

const { handleDragStart, handleDragDrop } = useDashboardDrag()

const cardEditModalRef = ref<InstanceType<typeof DashboardCardEditModal> | null>(null)
const cardRemoveModalRef = ref<InstanceType<typeof DashboardCardRemoveModal> | null>(null)

const handleEditModalOpen = (card: DashboardCardType): void => {
    cardEditModalRef.value?.open(card)
}

const handleRemoveModalOpen = (cardId: DashboardCardType['id']): void => {
    cardRemoveModalRef.value?.open(cardId)
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
