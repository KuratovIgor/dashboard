import type { DashboardCardPositionType, DashboardCardType, DashboardColumnType } from '@/types/dashboard.types'
import type { EventHandlerRequest, H3Event } from 'h3'
import type { LoginResponseType, SignUpType } from '@/types/login.type'
import type { LoginType, UserType } from '@/types/user.type'
import type { Database } from '@/types/database.type'
import type IService from '@/server/services/abstract.service'
import { serverSupabaseClient } from '#supabase/server'


class SupabaseService implements IService {
    public async getMe(event: H3Event<EventHandlerRequest>, token: string): Promise<UserType | null> {
        const client = await serverSupabaseClient<Database>(event)
        
        const { data, error } = await client.auth.getUser(token)

        if (error) return null

        return data.user.user_metadata as UserType

    }

    public async signUp(event: H3Event<EventHandlerRequest>, signUpData: SignUpType): Promise<boolean> {
        const client = await serverSupabaseClient<Database>(event)

        const {email, password, ...userInfo} = signUpData

        const { data: userData, error: signUpError } = await client.auth.signUp({
            email,
            password,
            options: {
                data: userInfo,
            },
        })

        if (signUpError) return false

        const { error: insertError } = await client.from('profiles').insert({
            id: userData.user?.id,
            ...userInfo
        })

        if (insertError) return false

        return true
    }

    public async login(event: H3Event<EventHandlerRequest>, loginData: LoginType): Promise<LoginResponseType | null> {
        const client = await serverSupabaseClient<Database>(event)

        const { data, error } = await client.auth.signInWithPassword(loginData)

        if (error) return null

        return {
            accessToken: data.session.access_token,
            userId: data.user.id,
        }
    }

    public async logout(event: H3Event<EventHandlerRequest>): Promise<boolean> {
        const client = await serverSupabaseClient<Database>(event)

        const { error } = await client.auth.signOut()

        if (error) return false

        return true
    }

    public async getDashboardColumns(event: H3Event<EventHandlerRequest>, userId: string): Promise<DashboardColumnType[]> {
        const client = await serverSupabaseClient<Database>(event)

        const { data, error } = await client.from('dashboard_columns').select('id, title, task_cards(id, title, description)').match({user_id: userId})

        if (error) {
            return []
        }

        return data.map((item) => ({
            id: item.id,
            title: item.title,
            cards: item.task_cards.map((card) => ({
                id: card.id,
                title: card.title,
                description: card.description,
            }))
        }))
    }

    public async updateTaskCardPosition(event: H3Event<EventHandlerRequest>, cardPosition: DashboardCardPositionType): Promise<void> {
        const client = await serverSupabaseClient<Database>(event)

        await client.from('task_cards').update({column_id: cardPosition.columnId}).match({id: cardPosition.cardId})
    }

    public async editDashboardCard(event: H3Event<EventHandlerRequest>, cardId: DashboardCardType['id'], cardData: Omit<DashboardCardType, 'id'>): Promise<void> {
        const client = await serverSupabaseClient<Database>(event)

        await client.from('task_cards').update(cardData).match({id: cardId})
    }

    public async removeDashboardCard(event: H3Event<EventHandlerRequest>, cardId: DashboardCardType['id']): Promise<void> {
        const client = await serverSupabaseClient<Database>(event)

        await client.from('task_cards').delete().match({id: cardId})
    }

    public async createDashboardCard(event: H3Event<EventHandlerRequest>, columnId: DashboardColumnType['id'], cardData: Omit<DashboardCardType, 'id'>): Promise<void> {
        const client = await serverSupabaseClient<Database>(event)

        await client.from('task_cards').insert({...cardData, column_id: columnId})
    }
}

export default new SupabaseService()
