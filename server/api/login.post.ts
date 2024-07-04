import type { EventHandlerRequest, H3Event } from 'h3'
import type { LoginType } from '@/types/user.type'
import UserController from '@/server/controllers/user.controller'

export default defineEventHandler(async (event: H3Event<EventHandlerRequest>) => {
    const body = await readBody<LoginType>(event)

    try {
        return await UserController.login(event, body)
    } catch {
        return null
    }
})