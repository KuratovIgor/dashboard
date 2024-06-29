import type { DashboardCardType } from '@/types/dashboard.types'

export class DashboardCardService {
    public static async editCard(card: DashboardCardType) {
        await $fetch(`/api/dashboard/cards/${card.id}`, {
            method: 'PUT',
            body: {
                title: card.title,
                description: card.description,
            }
        })
    }

    public static async removeCard(cardId: DashboardCardType['id']) {
        await $fetch(`/api/dashboard/cards/${cardId}`, {
            method: 'DELETE',
        })
    }
}