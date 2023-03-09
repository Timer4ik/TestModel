export default async (url, options = {}) => {
    const runtimeConfig = useRuntimeConfig()

    const API_BASE_URL = runtimeConfig.API_BASE_URL
    return await $fetch(API_BASE_URL + url, options)
}