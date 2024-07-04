export default class CookieUtil {
    public static setCookie(key: string, value: string) {
        const cookie = useCookie(key)

        cookie.value = value
    }

    public static getCookie(key: string) {
        const cookie = useCookie(key)

        return cookie.value ?? ''
    }

    public static removeCookie(key: string) {
        const cookie = useCookie(key)

        cookie.value = null
    }
}
