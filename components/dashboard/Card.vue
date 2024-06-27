<template>
    <NuxtLink :to="{ path: cardRouterPath }" class="dashboard-card">
        <UCard>
            <template #header>
                {{ card.title }}
            </template>

            <div>{{ card.description }}</div>
        </UCard>
    </NuxtLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import type { DashboardCardType } from '@/types/dashboard.types'

const route = useRoute()

interface Props {
    card: DashboardCardType
}

const props = defineProps<Props>()

const cardRouterPath = computed(() => `${route.path}/${props.card.id}`)
</script>

<style lang="scss" scoped>
.dashboard-card {
    display: block;
    transition: 0.2s linear;
}
</style>
