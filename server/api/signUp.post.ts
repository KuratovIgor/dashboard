import type { EventHandlerRequest, H3Event } from 'h3'
import type { SignUpType } from '@/types/login.type'
import UserController from '@/server/controllers/user.controller'

export default defineEventHandler(async (event: H3Event<EventHandlerRequest>) => {
    const body = await readBody<SignUpType>(event)

    try {
        return await UserController.signUp(event, body)
    } catch {
        return false
    }
})

