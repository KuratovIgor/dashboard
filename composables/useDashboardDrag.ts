import type { DashboardColumnType, DashboardCardType } from '@/types/dashboard.types'

export const useDashboardDrag = () => {
    const dashboardStore = useDashboardStore()

    const handleDragStart = (event: DragEvent, card: DashboardCardType): void => {
        if (!event.dataTransfer) return
    
        event.dataTransfer.dropEffect = 'move'
        event.dataTransfer.effectAllowed = 'move'
        event.dataTransfer.setData('itemId', card.id)
    }
    
    const handleDragDrop = async (event: DragEvent, column: DashboardColumnType): Promise<void> => {
        if (!event.dataTransfer) return
    
        const cardId = event.dataTransfer.getData('itemId')
    
        await dashboardStore.updateDashboardColumns({
            cardId,
            columnId: column.id,
        })
    }

    return {
        handleDragStart,
        handleDragDrop,
    }
}