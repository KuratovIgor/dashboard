<template>
    <NuxtLink class="dashboard-card">
        <UCard>
            <template #header>
                <div class="dashboard-card__header">
                    <div>{{ card.title }}</div>

                    <UPopover mode="hover">
                        <UButton
                            variant="link"
                            color="black" 
                            :icon="Icon.ellipsis"
                        />

                        <template #panel>
                            <div class="dashboard-card__popover">
                                <UButton
                                    :icon="Icon.pencil"
                                    color="amber"
                                    size="xl"
                                    variant="link"
                                    @click="handleCardEdit"
                                >
                                    Edit
                                </UButton>

                                <UButton
                                    :icon="Icon.trash"
                                    color="red"
                                    size="xl"
                                    variant="link"
                                    @click="handleCardRemove"
                                >
                                    Remove
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
import { Icon } from '@/common/constants'
import type { DashboardCardType } from '@/types/dashboard.types'

interface Props {
    card: DashboardCardType
}

type Emits = {
    edit: [card: DashboardCardType]
    remove: [cardId: DashboardCardType['id']]
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const handleCardEdit = (): void => {
    emit('edit', props.card)
}

const handleCardRemove = (): void => {
    emit('remove', props.card.id)
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

    &__popover {
        display: flex;
        flex-direction: column;
    }
}
</style>
