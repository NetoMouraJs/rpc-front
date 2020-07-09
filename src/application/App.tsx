import React from 'react'
import './App.css'
import HeaderComponent from './core/components/header'
import RecipeReviewCard from './core/components/cards'
import {Grid, Typography} from '@material-ui/core'
import ILoadProgrammingTvUsecase from '../domain/usecases/i-load-programming-tv.usecase'
import ProgrammingTvModel from '../domain/entities/programming-tv.model'

interface IProps {
    loadProgrammingTvUsecase: ILoadProgrammingTvUsecase
}

interface IState {
    programmingDate: string
    programmingTvs: ProgrammingTvModel[]
}

class App extends React.Component<IProps, IState> {

    private readonly _loadProgrammingTvUsecase: ILoadProgrammingTvUsecase

    async componentDidMount() {

        console.log('did: ',this.processDay(this.state.programmingDate))

        const result = await this._loadProgrammingTvUsecase.load(
            this.processDay(this.state.programmingDate),
        )
        this.setState({programmingTvs: result})
    }

    constructor(props: any) {
        super(props)
        this._loadProgrammingTvUsecase = this.props.loadProgrammingTvUsecase

        this.state = {
            programmingDate: this.getDay() /** inicializa com a data do Dia */,
            programmingTvs: [], //** Valor inicial dos dados*/
        }
    }

    getDay(): string {
        let dateNow = new Date(Date.now())

        let day = dateNow.getDate().toString()
        let dayF = day.length <= 1 ? '0' + day : day
        let month = (dateNow.getMonth() + 2).toString()
        let monthF = month.length <= 1 ? '0' + month : month

        return `${dateNow.getFullYear()}-${monthF}-${dayF}`
    }

    processDay(day: string): string {
        let teste = new Date(day)
        console.log(`${teste.getFullYear()}-${teste.getMonth() + 1}-${teste.getDate() + 1}`)
        return `${teste.getFullYear()}-${teste.getMonth()}-${teste.getDate() + 1}`
    }

    onChangeDate = (event: any) => {
        let {value} = event.target
        this.setState({programmingDate: value})
    }

    onSubmit = async () => {

        console.log('value date', this.state.programmingDate)

        const result = await this._loadProgrammingTvUsecase.load(
            this.processDay(this.state.programmingDate),
        )

        this.setState({programmingDate: this.state.programmingDate, programmingTvs: result})
    }

    render() {
        const programmingTvList: ProgrammingTvModel[] = this.state.programmingTvs
        const dateSelect: string = this.state.programmingDate

        let cardsList

        if (programmingTvList.length >= 1) {
            cardsList = <div id="card-container" style={{padding: '1em 1em'}}>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    spacing={1}
                >
                    {programmingTvList.map((programmingTv, index) => {
                        if (index === programmingTvList.length - 1) {
                            return (<div></div>)
                        }
                        return (
                            <Grid item xl={3} lg={3} md={3} sm={4} xs={6}>
                                <RecipeReviewCard {...programmingTv} />
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        } else {
            cardsList = <div>Carregando</div>
        }

        return (
            <>
                <HeaderComponent dateSelect={dateSelect} dateOnChange={this.onChangeDate} btnSubmit={this.onSubmit}/>
                <div style={{margin: '1em 2em'}}>
                    <Typography variant='h5'>
                        Programações de TV
                    </Typography>
                </div>
                {cardsList}
            </>
        )
    }
}

export default App
