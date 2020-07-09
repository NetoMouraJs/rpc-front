import ProgrammingTvModel from '../entities/programming-tv.model'

interface ILoadProgrammingTvUsecase {
    load(data: string): Promise<ProgrammingTvModel[]>
}

export default ILoadProgrammingTvUsecase