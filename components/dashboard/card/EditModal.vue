<template>
    <UModal v-model="modelValue">
        <UCard>
            <template #header>
                <h1>Edit Dashboard Card</h1>
            </template>

            <UForm class="dashboard-form" :state="cardState" @submit="handleFormSubmit">
                <UFormGroup class="mb-5" label="Title" name="title">
                    <UInput v-model="cardState.title" placeholder="card title" icon="i-heroicons-pencil-solid" />
                </UFormGroup>

                <UFormGroup class="mb-10" label="Description" name="description">
                    <UTextarea v-model="cardState.description" placeholder="card description" autoresize />
                </UFormGroup>

                <div class="dashboard-form__button">
                    <UButton
                        :loading="dashboardCardStore.loading" 
                        icon="i-heroicons-pencil-square"
                        type="submit"
                    >
                        Save
                    </UButton>
                </div>
            </UForm>
        </UCard>
    </UModal>
</template>

<script setup lang="ts">
import type { DashboardCardType } from '@/types/dashboard.types'

interface Props {
    card: DashboardCardType | null
}

const props = defineProps<Props>()
const modelValue = defineModel<boolean>()

const dashboardStore = useDashboardStore()
const dashboardCardStore = useDashboardCardStore()

const cardState = reactive<DashboardCardType>({
    id: '',
    title: '',
    description: ''
})

watch(() => modelValue.value, (isActive) => {
    if (isActive) {
        setDashboardCard()
    }
})

const setDashboardCard = (): void => {
    cardState.id = props.card?.id || ''
    cardState.title = props.card?.title || ''
    cardState.description = props.card?.description || ''
}

const handleFormSubmit = async (): Promise<void> => {
    await dashboardCardStore.editCard(cardState)

    modelValue.value = false

    await dashboardStore.getDashboardColumns()
}
</script>

<style lang="scss" scoped>
.dashboard-form {
    &__button {
        display: flex;
        justify-content: flex-end;
    }
}
</style>