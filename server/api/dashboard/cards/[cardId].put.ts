import type { EventHandlerRequest, H3Event } from 'h3'
import DashboardCardController from '@/server/controllers/dashboardCard.controller'
import { DashboardCardType } from '@/types/dashboard.types'

export default defineEventHandler(async (event: H3Event<EventHandlerRequest>) => {
    const params = event.context?.params

    if (!params) {
        return
    }

    const body = await readBody<Omit<DashboardCardType, 'id'>>(event)

    await DashboardCardController.editCard(event, params.cardId, body)
})