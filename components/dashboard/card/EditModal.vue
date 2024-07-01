<template>
    <UModal v-model="modelValue">
        <UCard>
            <template #header>
                <h1>Edit Dashboard Card</h1>
            </template>

            <UForm class="dashboard-form" :validate="formValidate" :state="formState" @submit="handleFormSubmit">
                <UFormGroup class="mb-5" label="Title" :name="FormField.title">
                    <UInput v-model="formState.title" placeholder="card title" icon="i-heroicons-pencil-solid" />
                </UFormGroup>

                <UFormGroup class="mb-10" label="Description" :name="FormField.description">
                    <UTextarea v-model="formState.description" placeholder="card description" autoresize />
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
import type { FormError } from '#ui/types'
import FormValidate from '@/utils/validate'
import type { DashboardCardType } from '@/types/dashboard.types'

const modelValue = defineModel<boolean>()

enum FormField {
    title = 'title',
    description = 'description',
}

const dashboardStore = useDashboardStore()
const dashboardCardStore = useDashboardCardStore()

const formState = reactive<DashboardCardType>({
    id: '',
    title: '',
    description: ''
})

const formValidate = (state: DashboardCardType): FormError[] => {
    return FormValidate.validate<typeof FormField>({
        title: [state.title, { required: true }],
        description: [state.description, { required: true }],
    })
}

const open = (card: DashboardCardType): void => {
    modelValue.value = true

    formState.id = card.id || ''
    formState.title = card.title || ''
    formState.description = card.description || ''
}

const handleFormSubmit = async (): Promise<void> => {
    await dashboardCardStore.editCard(formState)
    dashboardStore.getDashboardColumns()

    modelValue.value = false
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