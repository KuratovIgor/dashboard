import type { EventHandlerRequest, H3Event } from 'h3'
import SupabaseService from '@/server/services/supabase.service'
import type { DashboardCardType } from '@/types/dashboard.types'

export default class DashboardCardController {
    public static async editCard(event: H3Event<EventHandlerRequest>, card: DashboardCardType): Promise<void> {
        await SupabaseService.editDashboardCard(event, card)
    }

    public static async removeCard(event: H3Event<EventHandlerRequest>, cardId: DashboardCardType['id']): Promise<void> {
        await SupabaseService.removeDashboardCard(event, cardId)
    }
}