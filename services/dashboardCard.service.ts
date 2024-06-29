import type { DashboardCardType } from '@/types/dashboard.types'

export class DashboardCardService {
    public static async editCard(card: DashboardCardType) {
        await $fetch('/api/dashboard/card', { method: 'POST', body: card })
    }

    public static async removeCard(cardId: DashboardCardType['id']) {
        await $fetch(`/api/dashboard/card/${cardId}`, { method: 'DELETE'})
    }
}