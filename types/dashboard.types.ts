export type DashboardColumnType = {
    id: string
    title: string
    cards: DashboardCardType[]
}

export type DashboardColumnUpdateType = {
    columnFrom: string
    columnTo: string
    cardId: DashboardCardType['id']
}

export type DashboardCardType = {
    id: string
    name: string
    description: string
}