<template>
    <UModal v-model="modelValue" class="remove-modal">
        <UCard>
            <template #header>
                <h1 class="text-center">Confirm card removing</h1>
            </template>

            <div class="remove-modal__buttons">
                <UButton
                    :loading="dashboardCardStore.loading" 
                    icon="i-heroicons-trash"
                    color="red"
                    @click="handleRemovingConfirm"
                >
                    Confirm
                </UButton>

                <UButton
                    icon="i-heroicons-x-mark"
                    color="primary"
                    @click="handleModalClose"
                >
                    Cancel
                </UButton>
            </div>
        </UCard>
    </UModal>
</template>

<script setup lang="ts">
import type { DashboardCardType } from '@/types/dashboard.types'

interface Props {
    cardId: DashboardCardType['id']
}

const props = defineProps<Props>()
const modelValue = defineModel<boolean>()

const dashboardStore = useDashboardStore()
const dashboardCardStore = useDashboardCardStore()

const handleRemovingConfirm = async (): Promise<void> => {
    await dashboardCardStore.removeCard(props.cardId)

    modelValue.value = false

    await dashboardStore.getDashboardColumns()
} 

const handleModalClose = (): void => {
    modelValue.value = false
}
</script>

<style lang="scss" scoped>
.remove-modal {
    &__buttons {
        display: flex;
        justify-content: center;
        column-gap: 20px;
    }
}
</style>