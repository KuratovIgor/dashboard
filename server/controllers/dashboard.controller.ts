import type { DashboardCardPositionType, DashboardColumnType } from '@/types/dashboard.types'
import type { EventHandlerRequest, H3Event } from 'h3'
import SupabaseService from '@/server/services/supabase.service'

export default class DashboardController {
    public static async getDashboardColumns(event: H3Event<EventHandlerRequest>, userId: string): Promise<DashboardColumnType[]> {
        const data = await SupabaseService.getDashboardColumns(event, userId)
    
        return data
    }

    public static async updateTaskCardPosition(event: H3Event<EventHandlerRequest>, cardPosition: DashboardCardPositionType): Promise<void> {
        await SupabaseService.updateTaskCardPosition(event, cardPosition)
    }
}