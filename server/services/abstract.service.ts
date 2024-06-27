import type { EventHandlerRequest, H3Event } from 'h3'
import type { DashboardCardPositionType } from '@/types/dashboard.types'

export default interface IService {
    getDashboardColumns: (event: H3Event<EventHandlerRequest>) => Promise<unknown>
    updateTaskCard: (event: H3Event<EventHandlerRequest>, cardPosition: DashboardCardPositionType) => Promise<unknown>
}