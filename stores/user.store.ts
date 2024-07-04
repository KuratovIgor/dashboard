import type { LoginResponseType, SignUpType } from '@/types/login.type'
import type { LoginType, UserType } from '@/types/user.type'
import { UserService } from '@/services/user.service'

export const useUserStore = defineStore('user', () => {
    const user = ref<UserType | null>(null)
    const loading = ref(false)

    const getMe = async (): Promise<void> => {
        user.value = await UserService.getMe()
    }

    const signUpUser = async (signUpData: SignUpType): Promise<boolean> => {
        loading.value = true

        const response = await UserService.signUp(signUpData)

        loading.value = false

        return response
    }

    const loginUser = async (loginData: LoginType): Promise<LoginResponseType | null> => {
        loading.value = true

        const response = await UserService.login(loginData)

        loading.value = false

        return response
    }

    const logout = async (): Promise<boolean> => {
        return await UserService.logout()
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