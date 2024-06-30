import type { EventHandlerRequest, H3Event } from 'h3'
import DashboardCardController from '@/server/controllers/dashboardCard.controller'
import { DashboardCardType, DashboardColumnType } from '@/types/dashboard.types'

export default defineEventHandler(async (event: H3Event<EventHandlerRequest>) => {
    const params = event.context?.params

    if (!params) return

    const body = await readBody<{
        columnId: DashboardColumnType['id']
        card: Omit<DashboardCardType, 'id'>
    }>(event)

    await DashboardCardController.createCard(event, body.columnId, body.card)
})