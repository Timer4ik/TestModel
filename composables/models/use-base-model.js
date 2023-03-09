import * as Api from "../api/api"

// 
// interface Api {
//     get(url,options) => response
//     getOne(url,id,options)
//     post(url,body,options) => response
//     put(url,id,body,options) => response
//     delete(url,id,options) => response
// }
// response по умолчанию подразумевает response => {data,meta} , но с помощью prepareDataToUse можно поменять data на то, что прилетает с бэка

class AbstractModel {
    static url = ""

    static prepareDataToUse(response) {
        return response.data
    }

    static prepareBodyToSend(body) {
        return body
    }

    static async findOne(id = null, options = {}) {
        const response = await Api.getOne(this.url, id, options)

        const handledResponseData = this.prepareDataToUse(response)

        const data = new this(handledResponseData)

        return data
    }

    static async findAll(options = {}) {
        const response = await Api.get(this.url, options)

        const handledResponseData = this.prepareDataToUse(response)

        const data = handledResponseData.map(item => new this(item))
       
        data.meta = response.meta

        return data
    }

    static async updateOne(id = null, body = {}, options = {}) {
        const response = await Api.put(this.url, id, this.prepareBodyToSend(body), options)
        const handledResponseData = this.prepareDataToUse(response)

        const data = new this(handledResponseData)

        return data
    }

    static async create(body = {}, options = {}) {
        const response = await Api.post(this.url, this.prepareBodyToSend(body), options)

        const handledResponseData = this.prepareDataToUse(response)

        const data = new this(handledResponseData)

        return data
    }
}

export class BaseModel extends AbstractModel {

    toJSON() {
        return { ...this }
    }

    generateFields(data) {
        Object.entries(data).forEach(entry => {
            const [key, value] = entry
            this[key] = value
        })
    }

    constructor() {
        super()
    }

    async save(options = {}) {
        options.method = "POST"
        
        options.body =  { ...this.constructor.prepareBodyToSend(this) }

        return await baseRequest(this.constructor.url, options)
    }
}
