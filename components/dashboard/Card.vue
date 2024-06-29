<template>
    <NuxtLink :to="{ path: cardRouterPath }" class="dashboard-card">
        <UCard>
            <template #header>
                <div class="dashboard-card__header">
                    <div>{{ card.title }}</div>

                    <UPopover mode="hover">
                        <UButton variant="link" color="black">. . .</UButton>

                        <template #panel>
                            <div>
                                <UButton
                                    icon="i-heroicons-pencil-square"
                                    size="xl"
                                    color="amber"
                                    square
                                    variant="link"
                                    @click="handleCardModalOpen"
                                >
                                    Edit
                                </UButton>
                            </div>                           
                        </template>
                    </UPopover>
                </div>
            </template>

            <div>{{ card.description }}</div>
        </UCard>
    </NuxtLink>
</template>

<script setup lang="ts">
import type { DashboardCardType } from '@/types/dashboard.types'

const route = useRoute()

interface Props {
    card: DashboardCardType
}

type Emits = {
    edit: [card: DashboardCardType]
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const cardRouterPath = computed(() => `${route.path}/${props.card.id}`)

const handleCardModalOpen = (): void => {
    emit('edit', props.card)
}
</script>

<style lang="scss" scoped>
.dashboard-card {
    display: block;
    transition: 0.2s linear;

    &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__actions {
        white-space: nowrap;
        margin-left: 10px;
    }
}
</style>
