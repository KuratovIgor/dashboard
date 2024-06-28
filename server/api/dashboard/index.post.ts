import type { DashboardCardPositionType } from '@/types/dashboard.types'
import DashboardController from '@/server/controllers/dashboard.controller'

export default defineEventHandler(async (event) => {
    const body = await readBody<DashboardCardPositionType>(event)

    await DashboardController.updateTaskCard(event, body)
})