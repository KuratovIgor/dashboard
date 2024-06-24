import { useFetch } from '#app'
import type { DashboardColumnType } from '@/types/dashboard.types'

export class DashboardService {
    public static async getDashboardColumns() {
        const response = await useFetch<DashboardColumnType[]>('/api/dashboard')

        return response
    }
}