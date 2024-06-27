export type DashboardColumnType = {
    id: string
    title: string
    cards: DashboardCardType[]
}

export type DashboardCardPositionType = {
    columnId: DashboardCardType['id']
    cardId: DashboardCardType['id']
}

export type DashboardCardType = {
    id: string
    title: string
    description: string
}