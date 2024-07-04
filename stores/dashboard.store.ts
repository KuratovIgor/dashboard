import type { DashboardCardPositionType, DashboardColumnType } from '@/types/dashboard.types'
import { DashboardService } from '@/services/dashboard.service'

export const useDashboardStore = defineStore('dashboardStore', () => {
    const dashboardColumns = ref<DashboardColumnType[] | null>(null)
    const loading = ref(false)

    const getDashboardColumns = async (): Promise<void> => {
        try {
            loading.value = true

            dashboardColumns.value = await DashboardService.getDashboardColumns()
        } catch {
            dashboardColumns.value = null
        } finally {
            loading.value = false
        }
    }

    const updateDashboardColumns = async (cardPosition: DashboardCardPositionType): Promise<void> => {
        try {
            loading.value = true

            await DashboardService.updateDashboardColumns(cardPosition)
            dashboardColumns.value = await DashboardService.getDashboardColumns()
        } catch {
            // handle error
        } finally {
            loading.value = false
        }
    }
    
    return {
        loading,
        dashboardColumns,
        getDashboardColumns,
        updateDashboardColumns,
    }
})