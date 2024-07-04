<template>
    <div class="login-page">
        <UCard class="login-page__card">
            <template #header>
                <h1 class="text-center">Authorization</h1>
            </template>

            <UTabs :items="tabs" class="w-full">
                <template #login>
                    <LoginForm class="mt-5" />
                </template>

                <template #signUp>
                    <SignUpForm class="mt-5" />
                </template>
            </UTabs>
        </UCard>
    </div>
</template>

<script lang="ts" setup>
import type { TabItem } from '#ui/types'

definePageMeta({
    layout: 'auth',
})

const tabs: TabItem[] = [
    {
        slot: 'login',
        label: 'Login',
    },
    {
        slot: 'signUp',
        label: 'Sign Up',
    },
]
</script>

<style lang="scss" scoped>
.login-page {
    display: flex;
    justify-content: center;
    align-items: center;

    &__card {
        position: absolute;
        width: 100%;
        max-width: 600px;
        top: 10%;
    }
}
</style>
