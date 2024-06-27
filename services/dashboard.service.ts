import type { DashboardColumnType, DashboardCardPositionType } from '@/types/dashboard.types'

export class DashboardService {
    public static async getDashboardColumns() {
        const response = await $fetch<DashboardColumnType[]>('/api/dashboard')

        return response
    }

    public static async updateDashboardColumns(cardPosition: DashboardCardPositionType) {
        await $fetch<DashboardColumnType[]>('/api/dashboard', { method: 'POST', body: cardPosition })
    }
}