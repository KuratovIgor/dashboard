import type { EventHandlerRequest, H3Event } from 'h3'
import UserController from '@/server/controllers/user.controller'

export default defineEventHandler(async (event: H3Event<EventHandlerRequest>) => {
    const cookies = parseCookies(event)

    return await UserController.getMe(event, cookies['accessToken'])
})

