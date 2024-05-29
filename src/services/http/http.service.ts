import axios from 'axios'
import type { AxiosInstance } from 'axios'

const baseApiUrl = 'https://logiclike.com/docs/courses.json'
const _axiosInstance: AxiosInstance = <AxiosInstance>axios.create({
  baseURL: baseApiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  proxy: false,
})

export const axiosInstance = _axiosInstance

const httpService = {
  get: <T>(): Promise<T> => {
    const _url = baseApiUrl
    return axiosInstance.get(_url)
  },
}


export { httpService }
