export class BaseModel {
    static url = ""

    // Было бы хорошо сделать baseRequest в виде dependency injection, чтобы модель не зависила от реализации api

    static async findOne(id, options = {}) {
        // options.method по хорошему должна быть методом из интерфейса api
        options.method = "GET"

        const response = await baseRequest(`${this.url}/${id}`, options)

        const data = new this(response.data)

        return data
    }

    static async findAll(options = {}) {
        options.method = "GET"

        const response = await baseRequest(this.url, options)

        const data = response.data.map(item => new this(item))

        return data
    }

    static async updateOne(id = 0, options = {}) {
        options.method = "PUT"

        const response = await baseRequest(`${this.url}/${id}`, options)

        const data = new this(response.data)

        return data
    }


    static async create(body = {}, options = {}) {
        options.method = "POST"
        options.body = body
        return await baseRequest(this.url, options)
    }
}

export class Model extends BaseModel {

    toJSON() {
        return { ...this }
    }

    // Тестовая генерация полей
    // generateFields(data) {
    //     Object.entries(data).forEach(entry => {
    //         const [key, value] = entry
    //         this[key] = value
    //     })
    // }

    constructor() {
        super()
    }

    async save(options = {}) {
        options.method = "POST"
        options.body = { ...this }

        return await baseRequest(this.constructor.url, options)
    }
}
