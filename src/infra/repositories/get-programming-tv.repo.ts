import {IGetProgrammingTvRepo} from './i-get-programming-tv.repo'
import ProgrammingTvModel from '../../domain/entities/programming-tv.model'

import axios, {AxiosResponse} from 'axios'

class GetProgrammingTvRepo implements IGetProgrammingTvRepo<ProgrammingTvModel> {

    async getAll(date: string,broadcaster:string): Promise<ProgrammingTvModel[]> {
        const resultApi:AxiosResponse = await axios.get(`/api/programming-tv?date=${date}&broadcast=${broadcaster}`)

        const model = resultApi.data.body

        return model
    }
}

export default GetProgrammingTvRepo