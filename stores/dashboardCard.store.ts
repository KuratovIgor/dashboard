import { DashboardService } from '@/services/dashboard.service'
import { DashboardCardService } from '@/services/dashboardCard.service'
import type { DashboardCardType } from '@/types/dashboard.types'

export const useDashboardCardStore = defineStore('dashboardCard', () => {
    const dashboardCard = ref<DashboardCardType | null>()
    const loading = ref(false)

    const editCard = async (card: DashboardCardType): Promise<void> => {
        try {
            loading.value = true

            await DashboardCardService.editCard(card)
        } catch {
            // handle error
        } finally {
            loading.value = false
        }
    }

    return {
        loading,
        editCard,
    }
})