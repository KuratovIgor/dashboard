<template>
    <UModal v-model="modelValue">
        <UCard>
            <template #header>
                <h1>Create Dashboard Card</h1>
            </template>

            <UForm class="dashboard-form" :validate="formValidate" :state="formState" @submit="handleFormSubmit">
                <UFormGroup class="mb-5" label="Title" :name="FormField.title">
                    <UInput v-model="formState.card.title" placeholder="card title" icon="i-heroicons-pencil-solid" />
                </UFormGroup>

                <UFormGroup class="mb-5" label="Description" :name="FormField.description">
                    <UTextarea v-model="formState.card.description" placeholder="card description" autoresize />
                </UFormGroup>

                <UFormGroup class="mb-10" label="Status" :name="FormField.status">
                    <USelectMenu v-model="formState.status " :options="columnTypeOptions" />
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

<script lang="ts" setup>
import type { FormError } from '#ui/types'
import FormValidate from '@/utils/validate'
import type { DashboardCardType, DashboardColumnType } from '@/types/dashboard.types'

interface FormState {
    status: DashboardColumnType['title']
    card: DashboardCardType
}

const modelValue = defineModel<boolean>()

enum FormField {
    title = 'title',
    description = 'description',
    status = 'status',
}

const dashboardStore = useDashboardStore()
const dashboardCardStore = useDashboardCardStore()

const columnTypeOptions = ref<DashboardColumnType['title'][]>([])

const formState = reactive<FormState>({
    status: '',
    card: {
        id: '',
        title: '',
        description: ''
    }
})

const formValidate = (state: unknown): FormError[] => {
    const formState = state as FormState

    const requiredErrors = FormValidate.required<typeof FormField>({
        status: formState.status,
        title: formState.card.title,
        description: formState.card.description,
    })

    return requiredErrors
}

const open = (): void => {
    modelValue.value = true

    setColumnTypeOptions()
}

const setColumnTypeOptions = (): void => {
    if (dashboardStore.dashboardColumns && dashboardStore.dashboardColumns.length) {
        columnTypeOptions.value = dashboardStore.dashboardColumns.map((column) => column.title)
    }
}

const handleFormSubmit = async (): Promise<void> => {
    if (!dashboardStore.dashboardColumns) return

    const columnId = dashboardStore.dashboardColumns.find((column) => column.title === formState.status)?.id

    if (!columnId) return

    await dashboardCardStore.createCard(columnId, formState.card)

    modelValue.value = false

    await dashboardStore.getDashboardColumns()
}

defineExpose({
    open,
})
</script>

<style lang="scss" scoped>
.dashboard-form {
    &__button {
        display: flex;
        justify-content: flex-end;
    }
}
</style>
