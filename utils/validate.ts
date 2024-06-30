import type { FormError } from '#ui/types'

export default class FormValidate {
    public static required<T>(fields: {[K in keyof T]?: string}) {
        const errors: FormError[] = []

        for (const [key, value] of Object.entries(fields)) {
            if (value) continue

            errors.push({
                path: key,
                message: `${key} is required`,
            })
        }

        return errors
    }
}