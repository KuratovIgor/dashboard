import type { DashboardColumnType, DashboardColumnUpdateType } from '@/types/dashboard.types'

const mockData: DashboardColumnType[] = [
    {
        id: 'todo',
        title: 'TO DO',
        cards: [
            {
                id: '1',
                name: 'Заголовок 1',
                description: 'Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание',
            },
            {
                id: '2',
                name: 'Заголовок 2',
                description: 'Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание',
            },
        ],
    },
    {
        id: 'development',
        title: 'IN DEVELOPMENT',
        cards: [
            {
                id: '3',
                name: 'Заголовок 3',
                description: 'Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание',
            },
            {
                id: '4',
                name: 'Заголовок 4',
                description: 'Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание',
            },
        ],
    },
    {
        id: 'review',
        title: 'IN REVIEW',
        cards: [
            {
                id: '5',
                name: 'Заголовок 5',
                description: 'Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание',
            },
            {
                id: '6',
                name: 'Заголовок 6',
                description: 'Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание',
            },
        ],
    },
    {
        id: 'release',
        title: 'IN RELEASE',
        cards: [
            {
                id: '7',
                name: 'Заголовок 7',
                description: 'Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание',
            },
            {
                id: '8',
                name: 'Заголовок 8',
                description: 'Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание',
            },
        ],
    },
]

export const postDashboardMock = (body: DashboardColumnUpdateType): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(body)
            const columnIndexFrom = mockData.findIndex((item) => item.id === body.columnFrom)
            const columnIndexTo = mockData.findIndex((item) => item.id === body.columnTo)

            const cards = mockData.map((column) => column.cards).flat()
            const card = cards.find((item) => item.id === body.cardId)

            if (card) {
                mockData[columnIndexTo].cards.push(card)
                mockData[columnIndexFrom].cards = mockData[columnIndexFrom].cards.filter((item) => item.id !== card.id)
            }

            resolve()
        }, 1500)
    })
}

export const getDashboardMock = (): Promise<DashboardColumnType[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockData)
        }, 1500)
    })
}
