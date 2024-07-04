export default defineNuxtRouteMiddleware(async (to, from) => {
    const userStore = useUserStore()

    await userStore.getMe()

    if (to.path === from.path || to.path === '/login') return

    if (!userStore.user) return navigateTo('/login')

    return navigateTo(to.path)
})