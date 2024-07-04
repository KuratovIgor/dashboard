<template>
    <div class="default-container">
        <div class="sidebar">
            <UVerticalNavigation :links="links" />
            <UButton
                class="sidebar__button"
                :icon="Icon.logout"
                color="rose"
                @click="handleUserLogout"
            >
                Sign Out
            </UButton>
        </div>

        <UDivider orientation="vertical" />

        <div class="page-container">
            <NuxtPage />
        </div>
    </div>
</template>

<script setup lang="ts">
import { Icon } from '@/common/constants'

const router = useRouter()

const userStore = useUserStore()

const { showErrorNotification } = useNotification()

const links = [{
    label: 'Dashboard',
    icon: Icon.squares,
    to: '/dashboard'
}]

const handleUserLogout = async (): Promise<void> => {
    const isSignedOut = userStore.logout()

    if (!isSignedOut) {
        showErrorNotification('Logout is failed')

        return
    }

    router.push('/login')
}
</script>

<style lang="scss" scoped>
.default-container {
    display: flex;
}

.sidebar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    width: 100%;
    max-width: 250px;
}

.page-container {
    height: 100vh;
    width: 100%;
    padding: 30px;
    overflow: auto;
    transition: 0.1s linear;
}
</style>
