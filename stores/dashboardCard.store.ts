import type { DashboardCardType, DashboardColumnType } from '@/types/dashboard.types'
import { DashboardCardService } from '@/services/dashboardCard.service'

export const useDashboardCardStore = defineStore('dashboardCard', () => {
    const loading = ref(false)

    const createCard = async (columnId: DashboardColumnType['id'], card: DashboardCardType): Promise<void> => {
        try {
            loading.value = true

            await DashboardCardService.createCard(columnId, card)
        } catch {
            // handle error
        } finally {
            loading.value = false
        }
    }

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

    const removeCard = async (cardId: DashboardCardType['id']): Promise<void> => {
        try {
            loading.value = true

            await DashboardCardService.removeCard(cardId)
        } catch {
            // handle error
        } finally {
            loading.value = false
        }
    }

    return {
        loading,
        createCard,
        editCard,
        removeCard,
    }
})