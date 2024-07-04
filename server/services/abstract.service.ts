import type { DashboardCardPositionType, DashboardCardType, DashboardColumnType } from '@/types/dashboard.types'
import type { EventHandlerRequest, H3Event } from 'h3'
import type { LoginResponseType, SignUpType } from '@/types/login.type'
import type { LoginType, UserType } from '@/types/user.type'

export default interface IService {
    getMe: (event: H3Event<EventHandlerRequest>, token: string) => Promise<UserType | null>
    signUp: (event: H3Event<EventHandlerRequest>, signUpData: SignUpType) => Promise<boolean>
    login: (event: H3Event<EventHandlerRequest>, loginData: LoginType) => Promise<LoginResponseType | null>
    logout: (event: H3Event<EventHandlerRequest>) => Promise<boolean>
    getDashboardColumns: (event: H3Event<EventHandlerRequest>, userId: string, cardId: string) => Promise<unknown>
    updateTaskCardPosition: (event: H3Event<EventHandlerRequest>, cardPosition: DashboardCardPositionType) => Promise<unknown>
    editDashboardCard: (event: H3Event<EventHandlerRequest>, cardId: DashboardCardType['id'], cardData: Omit<DashboardCardType, 'id'>) => Promise<unknown>
    removeDashboardCard: (event: H3Event<EventHandlerRequest>, cardId: DashboardCardType['id']) => Promise<unknown>
    createDashboardCard: (event: H3Event<EventHandlerRequest>, columnId: DashboardColumnType['id'], cardData: Omit<DashboardCardType, 'id'>) => Promise<unknown>
}