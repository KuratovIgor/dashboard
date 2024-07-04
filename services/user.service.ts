import type { LoginType } from '@/types/user.type'
import type { SignUpType } from '@/types/login.type'

export class UserService {
    public static async getMe() {
        const response = await $fetch('/api/me')

        return response
    }

    public static async signUp(signUpData: SignUpType) {
        const response = await $fetch('/api/signUp', {
            method: 'POST',
            body: signUpData,
        })

        return response
    }

    public static async login(loginData: LoginType) {
        const response = await $fetch('/api/login', {
            method: 'POST',
            body: loginData,
        })

        return response
    }

    public static async logout() {
        const response = await $fetch('/api/logout')

        return response
    }
}