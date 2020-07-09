export default class ProgrammingTvModel {
    title: string
    description: string
    on_air: boolean
    start_time: number
    end_time: number
    logoUrl: string
    imgUrl: string
    duration: number

    constructor(title?: string, description?: string, on_air?: boolean, start_time?: number, end_time?: number, logoUrl?: string, imgUrl?: string, duration?: number) {
        this.title = title || ''
        this.description = description || ''
        this.on_air = on_air || false
        this.start_time = start_time || 0
        this.end_time = end_time || 0
        this.logoUrl = logoUrl || ''
        this.imgUrl = imgUrl || ''
        this.duration = duration || 0
    }
}
