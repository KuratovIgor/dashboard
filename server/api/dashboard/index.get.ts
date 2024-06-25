import { defineEventHandler } from '#imports'
import type { DashboardColumnType } from '@/types/dashboard.types'
import { getDashboardMock } from './dashboard.mock'

export default defineEventHandler(async (): Promise<DashboardColumnType[]> => {
    const dashboardColumns = await getDashboardMock()

    return dashboardColumns
})