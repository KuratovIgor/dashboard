import type { LoginResponseType, SignUpType } from '@/types/login.type'
import type { LoginType, UserType } from '@/types/user.type'
import { UserService } from '@/services/user.service'

export const useUserStore = defineStore('user', () => {
    const user = ref<UserType | null>(null)
    const loading = ref(false)

    const getMe = async (): Promise<void> => {
        try {
            user.value = await UserService.getMe()
        } catch {
            // handle error
        }
    }

    const signUpUser = async (signUpData: SignUpType): Promise<boolean> => {
        try {
            loading.value = true

            const response = await UserService.signUp(signUpData)

            if (response) return true
        } catch {
            return false
        } finally {
            loading.value = false
        }

        return false
    }

    const loginUser = async (loginData: LoginType): Promise<LoginResponseType | null> => {
        try {
            loading.value = true

            const response = await UserService.login(loginData)

            if (response) return response
        } catch {
            return null
        } finally {
            loading.value = false
        }

        return null
    }

    const logout = async (): Promise<boolean> => {
        try {
            const response = await UserService.logout()

            return response
        } catch {
            return false
        }
    }

    return {
        user,
        loading,
        getMe,
        signUpUser,
        loginUser,
        logout,
    }
})