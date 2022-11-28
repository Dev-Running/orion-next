
import { Axios } from "axios"

export const AxiosClient = new Axios({transformResponse: (data) => JSON.parse(data)})