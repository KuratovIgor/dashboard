import type { EventHandlerRequest, H3Event } from 'h3'
import type { LoginResponseType, SignUpType } from '@/types/login.type'
import type { LoginType, UserType } from '@/types/user.type'
import SupabaseService from '@/server/services/supabase.service'

export default class UserController {
    public static async getMe(event: H3Event<EventHandlerRequest>, token: string): Promise<UserType | null> {
        return await SupabaseService.getMe(event, token)
    }

    public static async signUp(event: H3Event<EventHandlerRequest>, signUpData: SignUpType): Promise<boolean> {
        return await SupabaseService.signUp(event, signUpData)
    }

    public static async login(event: H3Event<EventHandlerRequest>, loginData: LoginType): Promise<LoginResponseType | null> {
        return await SupabaseService.login(event, loginData)
    }

    public static async logout(event: H3Event<EventHandlerRequest>): Promise<boolean> {
        return await SupabaseService.logout(event)
    }
}