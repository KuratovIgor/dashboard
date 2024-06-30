import type { EventHandlerRequest, H3Event } from 'h3'
import SupabaseService from '@/server/services/supabase.service'
import type { DashboardCardType, DashboardColumnType } from '@/types/dashboard.types'

export default class DashboardCardController {
    public static async editCard(event: H3Event<EventHandlerRequest>, cardId: DashboardCardType['id'], cardData: Omit<DashboardCardType, 'id'>): Promise<void> {
        await SupabaseService.editDashboardCard(event, cardId, cardData)
    }

    public static async removeCard(event: H3Event<EventHandlerRequest>, cardId: DashboardCardType['id']): Promise<void> {
        await SupabaseService.removeDashboardCard(event, cardId)
    }

    public static async createCard(event: H3Event<EventHandlerRequest>, columnId: DashboardColumnType['id'], cardData: Omit<DashboardCardType, 'id'>): Promise<void> {
        await SupabaseService.createDashboardCard(event, columnId, cardData)
    }
}