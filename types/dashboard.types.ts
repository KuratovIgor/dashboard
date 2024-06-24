export type DashboardColumnType = {
    title: string
    cards: DashboardCardType[]
}

export type DashboardCardType = {
    id: string
    name: string
    description: string
}