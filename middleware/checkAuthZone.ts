export default defineNuxtRouteMiddleware(async () => {
    const userStore = useUserStore()

    await userStore.getMe()

    if (!userStore.user) return navigateTo('/login')
})