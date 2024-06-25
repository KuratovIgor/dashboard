import type { DashboardColumnType, DashboardColumnUpdateType } from '@/types/dashboard.types'

export class DashboardService {
    public static async getDashboardColumns() {
        const response = await $fetch<DashboardColumnType[]>('/api/dashboard')

        return response
    }

    public static async updateDashboardColumns(body: DashboardColumnUpdateType) {
        await $fetch<DashboardColumnType[]>('/api/dashboard', { method: 'POST', body })
    }
}