import { serverSupabaseClient } from '#supabase/server'
import type { EventHandlerRequest, H3Event } from 'h3'
import IService from '@/server/services/abstract.service'
import type { Database } from '@/types/database.type'
import type { DashboardCardPositionType, DashboardCardType, DashboardColumnType } from '@/types/dashboard.types'


class SupabaseService implements IService {
    public async getDashboardColumns(event: H3Event<EventHandlerRequest>): Promise<DashboardColumnType[]> {
        const client = await serverSupabaseClient<Database>(event)

        const { data, error } = await client.from('dashboard_columns').select('id, title, task_cards(id, title, description)')

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
