import type { EventHandlerRequest, H3Event } from 'h3'
import SupabaseService from '@/server/services/supabase.service'
import type { DashboardColumnType, DashboardCardPositionType } from '@/types/dashboard.types'

export default class DashboardController {
    public static async getDashboardColumns(event: H3Event<EventHandlerRequest>): Promise<DashboardColumnType[]> {
        const data = await SupabaseService.getDashboardColumns(event)
    
        return data
    }

    public static async updateTaskCardPosition(event: H3Event<EventHandlerRequest>, cardPosition: DashboardCardPositionType): Promise<void> {
        await SupabaseService.updateTaskCardPosition(event, cardPosition)
    }
}