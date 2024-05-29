import { ICard } from '../types/common'
import { httpService } from '../../services/http/http.service'
import { AxiosResponse } from 'axios'

interface CardsApiService {
  cardsList: () => Promise<AxiosResponse<ICard[]>>
}

export const cardsApiService: CardsApiService = {
  cardsList: async () => {
    return await httpService.get()
  },
}
