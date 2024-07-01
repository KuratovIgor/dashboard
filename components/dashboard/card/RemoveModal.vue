<template>
    <UModal v-model="modelValue" class="remove-modal">
        <UCard>
            <template #header>
                <h1 class="text-center">Confirm card removing</h1>
            </template>

            <div class="remove-modal__buttons">
                <UButton
                    :loading="dashboardCardStore.loading" 
                    :icon="Icon.trash"
                    color="red"
                    @click="handleRemovingConfirm"
                >
                    Confirm
                </UButton>

                <UButton
                    :icon="Icon.xMark"
                    @click="handleModalClose"
                >
                    Cancel
                </UButton>
            </div>
        </UCard>
    </UModal>
</template>

<script setup lang="ts">
import { Icon } from '@/common/constants'
import type { DashboardCardType } from '@/types/dashboard.types'

const modelValue = defineModel<boolean>()

const dashboardStore = useDashboardStore()
const dashboardCardStore = useDashboardCardStore()

const { showSuccessNotification } = useNotification()

let dashboardCardId: DashboardCardType['id'] = ''

const open = (cardId: DashboardCardType['id']): void => {
    modelValue.value = true
    dashboardCardId = cardId
}

const handleRemovingConfirm = async (): Promise<void> => {
    await dashboardCardStore.removeCard(dashboardCardId)
    dashboardStore.getDashboardColumns()

    modelValue.value = false

    showSuccessNotification('Card removed successfully')
} 

const handleModalClose = (): void => {
    modelValue.value = false
}

defineExpose({
    open,
})
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