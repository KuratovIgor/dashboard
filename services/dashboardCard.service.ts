import type { DashboardCardType, DashboardColumnType } from '@/types/dashboard.types'

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

    public static async createCard(columnId: DashboardColumnType['id'], card: DashboardCardType) {
        await $fetch('/api/dashboard/cards', {
            method: 'POST',
            body: {
                columnId,
                card: {
                    title: card.title,
                    description: card.description,
                },
            },
        })
    }
}