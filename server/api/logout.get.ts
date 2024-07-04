import type { EventHandlerRequest, H3Event } from 'h3'
import UserController from '@/server/controllers/user.controller'

export default defineEventHandler(async (event: H3Event<EventHandlerRequest>) => {
    try {
        return await UserController.logout(event)
    } catch {
        return false
    }
})