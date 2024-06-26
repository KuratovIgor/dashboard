export const useNotification = () => {
    const toast = useToast()

    const showSuccessNotification = (text: string) => {
        toast.add({
            title: text,
            icon: 'i-heroicons-check-circle-16-solid',
            timeout: 2000,
        })
    }

    return {
        showSuccessNotification,
    }
}