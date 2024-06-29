import type { EventHandlerRequest, H3Event } from 'h3'
import type { DashboardCardPositionType } from '@/types/dashboard.types'
import DashboardController from '@/server/controllers/dashboard.controller'

export default defineEventHandler(async (event: H3Event<EventHandlerRequest>) => {
    const body = await readBody<DashboardCardPositionType>(event)

    await DashboardController.updateTaskCardPosition(event, body)
})