export const baseRequest = async (url, options = {}) => {
    const runtimeConfig = useRuntimeConfig()

    const API_BASE_URL = runtimeConfig.API_BASE_URL

    return await $fetch(API_BASE_URL + url, options)
}

export const get = async (url = "", options = {}) => {
    // options.method по хорошему должна быть методом из интерфейса api
    options.method = "GET"

    const response = await baseRequest(url, options)

    return response
}

export const getOne = async (url = "", id = null, options = {}) => {
    options.method = "GET"

    const response = await baseRequest(`${url}/${id}`, options)

    return response
}

export const put = async (url = "", id = null, body, options = {}) => {
    options.method = "PUT"
    options.body = body

    const response = await baseRequest(`${url}/${id}`, options)

    return response
}

export const post = async (url = "", body = {}, options = {}) => {
    options.method = "POST"
    options.body = body

    const response = await baseRequest(url, options)

    return response
}
