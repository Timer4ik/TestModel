import { BaseModel } from "./use-base-model"

// Необходим метод запрета некоторых действий в зависимости от реализации api
export class FilmModel extends BaseModel {

    static url = "/api/film"

    constructor(data) {
        super()

        // Генерация плоха тем, что если значения в data не придут то, при попытке получения их выскачет ошибка is not defined
        // this.generateFields(data)

        /* 
            Данные в модель могут придти одни, а отправка данных может отличаться,
            необходим какой то внешний метод указывающий, отправляемые данные
            
            также это может быть необходимым если мы указываем свои названия для полей, 
            при отправке их нужно возвращать к своему виду
        */
        this.rent_film_id = data.rent_film_id ?? null
        this.createdAt = data.createdAt ?? null
        this.descr = data.descr ?? null
        this.image_url = data.image_url ?? null
        this.name = data.name ?? null
        this.price = data.price ?? null
        this.rent_end_dt = data.rent_end_dt ?? null
        this.rent_start_dt = data.rent_start_dt ?? null
        this.session_times = data.session_times ?? null
        this.status = data.status ?? null
        this.updatedAt = data.updatedAt ?? null
        this.year = data.year ?? null
    }
}
