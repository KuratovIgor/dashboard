import { defineNuxtRouteMiddleware, navigateTo } from '#app'

export default defineNuxtRouteMiddleware((to) => {
    if (to.path === '/dashboard') {
        return
    }

    if (to.path === '/') {
        return navigateTo('/dashboard')
    }
})