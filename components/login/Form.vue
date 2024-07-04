<template>
    <UForm :validate="formValidate" :state="formState" @submit="handleFormSubmit">
        <UFormGroup class="mb-5" label="Email" :name="FormField.email">
            <UInput v-model="formState.email" placeholder="email" />
        </UFormGroup>

        <UFormGroup class="mb-10" label="Password" :name="FormField.password">
            <UInput v-model="formState.password" placeholder="password" />
        </UFormGroup>

        <UButton :loading="userStore.loading" type="submit" block>Login</UButton>
    </UForm>
</template>

<script lang="ts" setup>
import CookieUtil from '@/utils/cookie'
import type { FormError } from '#ui/types'
import type { LoginType } from '@/types/user.type'

enum FormField {
    email = 'email',
    password = 'password',
}

const router = useRouter()

const userStore = useUserStore()

const { showErrorNotification, showSuccessNotification } = useNotification()

const formState = reactive<LoginType>({
    email: '',
    password: '',
})

const formValidate = (): FormError[] => {
    return []
}

const handleFormSubmit = async (): Promise<void> => {
    const response = await userStore.loginUser(formState)

    if (response) {
        CookieUtil.setCookie('accessToken', response.accessToken)
        CookieUtil.setCookie('userId', response.userId)

        showSuccessNotification('You are authorized')

        router.push('/dashboard')

        return
    }

    showErrorNotification('Login failed')
}
</script>