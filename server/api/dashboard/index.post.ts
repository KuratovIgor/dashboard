import { defineEventHandler, readBody } from '#imports'
import type { DashboardColumnUpdateType } from '@/types/dashboard.types'
import { postDashboardMock } from './dashboard.mock'

export default defineEventHandler(async (event) => {
    const body = await readBody<DashboardColumnUpdateType>(event)
    
    await postDashboardMock(body)
})