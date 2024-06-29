import type { EventHandlerRequest, H3Event } from 'h3'
import DashboardCardController from '@/server/controllers/dashboardCard.controller'
import { DashboardCardType } from '@/types/dashboard.types'

export default defineEventHandler(async (event: H3Event<EventHandlerRequest>) => {
    const body = await readBody<DashboardCardType>(event)

    await DashboardCardController.editCard(event, body)
})