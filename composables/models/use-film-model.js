import { BaseModel } from "./use-base-model"

// Необходим метод запрета некоторых действий в зависимости от реализации api
export class FilmModel extends BaseModel {

    static url = "/api/film"

    // Выцепляем данные данные из ответа (необязательный метод, если данные при отправке такие же, что и при получении)
    static prepareDataToUse(response) {
        return response.data
    }

    // Подготавливает данные к отправке (необязательный метод, если данные при отправке такие же, что и при получении)
    static prepareBodyToSend(data) {
        return {
            rent_film_id: data.RentFilmId,
            createdAt: data.CreatedAt,
            descr: data.Descr,
            image_url: data.ImageUrl,
            name: data.Name,
            price: data.Price,
            rent_end_dt: data.RentEndDt,
            rent_start_dt: data.RentStartDt,
            session_times: data.SessionTimes,
            status: data.Status,
            updatedAt: data.UpdatedAt,
            year: data.Year,
        }
    }

    constructor(data) {
        super()
        // (необязательное условие, если данные при отправке такие же, что и при получении)
        if (data instanceof FilmModel) {
            this.generateFields(data)
        }
        else {
            this.RentFilmId = data.rent_film_id ?? null
            this.CreatedAt = data.createdAt ?? null
            this.Descr = data.descr ?? null
            this.ImageUrl = data.image_url ?? null
            this.Name = data.name ?? null
            this.Price = data.price ?? null
            this.RentEndDt = data.rent_end_dt ?? null
            this.RentStartDt = data.rent_start_dt ?? null
            this.SessionTimes = data.session_times ?? null
            this.Status = data.status ?? null
            this.UpdatedAt = data.updatedAt ?? null
            this.Year = data.year ?? null
        }
    }
}
