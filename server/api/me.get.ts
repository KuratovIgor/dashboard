import type { EventHandlerRequest, H3Event } from 'h3'
import UserController from '@/server/controllers/user.controller'

export default defineEventHandler(async (event: H3Event<EventHandlerRequest>) => {
    const cookies = parseCookies(event)

    try {
        return await UserController.getMe(event, cookies['accessToken'])
    } catch {
        return null
    }
})

