import type { EventHandlerRequest, H3Event } from 'h3'
import DashboardCardController from '@/server/controllers/dashboardCard.controller'

export default defineEventHandler(async (event: H3Event<EventHandlerRequest>) => {
    const params = event.context?.params

    if (!params) {
        return
    }

    await DashboardCardController.removeCard(event, params.cardId)
})