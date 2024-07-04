export const useNotification = () => {
    const toast = useToast()

    const showSuccessNotification = (text: string) => {
        toast.add({
            title: text,
            icon: 'i-heroicons-check-circle-16-solid',
            timeout: 2000,
        })
    }

    const showErrorNotification = (text: string) => {
        toast.add({
            title: text,
            icon: 'i-heroicons-x-mark-16-solid',
            timeout: 2000,
            color: 'red',
        })
    }

    return {
        showSuccessNotification,
        showErrorNotification,
    }
}