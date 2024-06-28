import type { DashboardColumnType } from '@/types/dashboard.types'
import DashboardController from '@/server/controllers/dashboard.controller'

export default defineEventHandler(async (event): Promise<DashboardColumnType[]> => {
    return await DashboardController.getDashboardColumns(event)
})