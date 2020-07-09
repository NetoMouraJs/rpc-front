import ILoadProgrammingTvUsecase from '../../domain/usecases/i-load-programming-tv.usecase'
import ProgrammingTvModel from '../../domain/entities/programming-tv.model'
import {IGetProgrammingTvRepo} from '../../infra/repositories/i-get-programming-tv.repo'

class LoadProgrammingTvRPCUsecase implements ILoadProgrammingTvUsecase {
    private readonly _getProgrammingTvRepo: IGetProgrammingTvRepo<ProgrammingTvModel>
    private readonly broadcaster: string = 'rpc'

    constructor(_getProgrammingTvRepo: IGetProgrammingTvRepo<ProgrammingTvModel>) {
        this._getProgrammingTvRepo = _getProgrammingTvRepo
    }

    async load(data: string): Promise<ProgrammingTvModel[]> {
        return await this._getProgrammingTvRepo.getAll(data, this.broadcaster)
    }
}

export default LoadProgrammingTvRPCUsecase