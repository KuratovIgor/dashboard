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

    public async editDashboardCard(event: H3Event<EventHandlerRequest>, card: DashboardCardType): Promise<void> {
        const client = await serverSupabaseClient<Database>(event)

        await client.from('task_cards').update({title: card.title, description: card.description}).match({id: card.id})
    }
}

export default new SupabaseService()
