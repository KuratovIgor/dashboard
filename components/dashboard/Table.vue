<template>
    <div class="dashboard-table">
        <DashboardTableColumn v-for="(column, index) in dashboardColumns" :key="index" :column="column" />
    </div>
</template>

<script setup lang="ts">
import type { DashboardColumnType } from '@/types/dashboard.types'

const dashboardColumns: DashboardColumnType[] = [
    {
        title: 'TO DO',
        cards: [
            {
                id: '1',
                name: 'Заголовок',
                description: 'Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание'
            },
            {
                id: '2',
                name: 'Заголовок',
                description: 'Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание'
            },
        ],
    },
    {
        title: 'IN DEVELOPMENT',
        cards: [
            {
                id: '3',
                name: 'Заголовок',
                description: 'Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание'
            },
            {
                id: '4',
                name: 'Заголовок',
                description: 'Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание'
            },
        ],
    },
    {
        title: 'IN REVIEW',
        cards: [
            {
                id: '5',
                name: 'Заголовок',
                description: 'Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание'
            },
            {
                id: '6',
                name: 'Заголовок',
                description: 'Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание'
            },
        ],
    },
    {
        title: 'IN RELEASE',
        cards: [
            {
                id: '7',
                name: 'Заголовок',
                description: 'Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание'
            },
            {
                id: '8',
                name: 'Заголовок',
                description: 'Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание'
            },
        ],
    }
]
</script>

<style lang="scss" scoped>
.dashboard-table {
    display: flex;
    justify-content: space-between;
    column-gap: 30px;
}
</style>
