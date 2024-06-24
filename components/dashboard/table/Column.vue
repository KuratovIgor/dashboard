<template>
    <div class="dashboard-column">
        <div class="dashboard-column__title">{{ column.title }}</div>

        <DashboardCard
            v-for="(card, index) in column.cards"
            :key="index"
            :card="card"
            class="dashboard-column__card"
        />
    </div>
</template>

<script setup lang="ts">
import type { DashboardColumnType } from '@/types/dashboard.types'

interface Props {
    column: DashboardColumnType
}

defineProps<Props>()
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
