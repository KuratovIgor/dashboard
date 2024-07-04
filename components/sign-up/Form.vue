<template>
    <UForm class="signup-form" :validate="formValidate" :state="formState" @submit="handleFormSubmit">
        <UFormGroup class="mb-5" label="Email" :name="FormField.email">
            <UInput v-model="formState.email" placeholder="email" />
        </UFormGroup>

        <UFormGroup class="mb-5" label="Password" :name="FormField.password">
            <UInput v-model="formState.password" placeholder="password" />
        </UFormGroup>

        <UDivider class="mb-5" />

        <div class="signup-form__info">
            <UFormGroup label="Lastname" :name="FormField.lastname">
                <UInput v-model="formState.lastname" placeholder="lastname" />
            </UFormGroup>

            <UFormGroup label="Name" :name="FormField.name">
                <UInput v-model="formState.name" placeholder="name" />
            </UFormGroup>

            <UFormGroup label="Age" :name="FormField.age">
                <UInput v-model="formState.age" placeholder="age" />
            </UFormGroup>

            <UFormGroup label="Phone" :name="FormField.phone">
                <UInput v-model="formState.phone" placeholder="phone number" />
            </UFormGroup>

            <UFormGroup class="signup-form__city mb-5" label="City" :name="FormField.city">
                <USelectMenu v-model="formState.city" :options="cities" placeholder="city" />
            </UFormGroup>
        </div>

        <UButton :loading="userStore.loading" type="submit" block>Sign Up</UButton>
    </UForm>
</template>

<script lang="ts" setup>
import CookieUtil from '@/utils/cookie'
import type { FormError } from '#ui/types'
import type { SignUpType } from '@/types/login.type'
import { UserService } from '@/services/user.service'

enum FormField {
    email = 'email',
    password = 'password',
    lastname = 'lastname',
    name = 'name',
    age = 'age',
    phone = 'phone',
    city = 'city'
}

const userStore = useUserStore()

const { showErrorNotification, showSuccessNotification } = useNotification()

const formState = reactive<SignUpType>({
    email: '',
    password: '',
    lastname: '',
    name: '',
    age: '',
    phone: '',
    city: ''
})

const cities = ['Novosibirsk', 'Moscow', 'Kaliningrad', 'Saint-Petersburg', 'Sochi']

const formValidate = (): FormError[] => {
    return []
}

const handleFormSubmit = async (): Promise<void> => {
    const isSignedUp = await userStore.signUpUser(formState)

    if (isSignedUp) {
        showSuccessNotification('You are signed up successfully')

        return
    }

    showErrorNotification('Signing up is failed')
}
</script>

<style lang="scss" scoped>
.signup-form {
    &__info {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
    }
    
    &__city {
        grid-column: 1/3;
    }
}
</style>
