import type { EventHandlerRequest, H3Event } from 'h3'
import UserController from '@/server/controllers/user.controller'

export default defineEventHandler(async (event: H3Event<EventHandlerRequest>) => {
    return await UserController.logout(event)
})