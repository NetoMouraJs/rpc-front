export interface IGetProgrammingTvRepo<T> {
    getAll(date: string, broadcaster: string): Promise<T[]>
}