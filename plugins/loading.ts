import type { DirectiveBinding } from 'vue'

export default defineNuxtPlugin((nuxtApp) => {
    const pageContainerClass = 'page-container'
    const relativeClass= 'relative'

    const loaderClass = 'loader'
    const loader = document.createElement('div')

    loader.classList.add(loaderClass)

    const getElementByClass = (elClass: string): Element | null => {
        return document.querySelector(`.${elClass}`)
    }

    const appendLoader = (el: Element | null): void => {
        el?.append(loader)
    }

    const addClassToElement = (el: Element | null, elClass: string): void => {
        el?.classList.add(elClass)
    }

    const removeClassFromElement = (el: Element | null, elClass: string): void => {
        el?.classList.remove(elClass)
    }

    const removeLoaderFromElement = (el: Element | null): void => {
        el?.querySelector(`.${loaderClass}`)?.remove()
    }

    const setElementOpacity = (el: Element | null, opacity: number): void => {
        if (el instanceof HTMLElement) {
            el.style.opacity = opacity.toString()
        }
    }

    const handleElementLoading = (el: Element | null, loading: boolean): void => {
        if (loading) {
            setElementOpacity(el, 0.7)
            appendLoader(el)
            addClassToElement(el, relativeClass)
        } else {
            setElementOpacity(el, 1)
            removeLoaderFromElement(el)
            removeClassFromElement(el, relativeClass)
        }
    }

    nuxtApp.vueApp.directive('loading', {
        updated(el: HTMLDivElement, binding: DirectiveBinding<boolean>) {
            if (binding.modifiers?.page) {
                const pageContainer = getElementByClass(pageContainerClass)

                handleElementLoading(pageContainer, binding.value)

                return
            }

            handleElementLoading(el, binding.value)
        },
    })
})