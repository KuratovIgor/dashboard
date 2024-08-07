import type { EventHandlerRequest, H3Event } from 'h3'
import type { DashboardColumnType } from '@/types/dashboard.types'
import DashboardController from '@/server/controllers/dashboard.controller'

export default defineEventHandler(async (event: H3Event<EventHandlerRequest>): Promise<DashboardColumnType[]> => {
    const cookies = parseCookies(event)

    return await DashboardController.getDashboardColumns(event, cookies['userId'])
})