import type { EventHandlerRequest, H3Event } from 'h3'
import type { DashboardCardPositionType, DashboardCardType } from '@/types/dashboard.types'

export default interface IService {
    getDashboardColumns: (event: H3Event<EventHandlerRequest>) => Promise<unknown>
    updateTaskCardPosition: (event: H3Event<EventHandlerRequest>, cardPosition: DashboardCardPositionType) => Promise<unknown>
    editDashboardCard: (event: H3Event<EventHandlerRequest>, card: DashboardCardType) => Promise<unknown>
}