import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './application/App'
import * as serviceWorker from './serviceWorker'
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import LoadProgrammingTvRPCUsecase from './data/usecases/load-programming-tv.usecase'
import GetProgrammingTvRepo from './infra/repositories/get-programming-tv.repo'

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#3383ab',
            main: '#006497',
            dark: '#004669',
        },
        secondary: {
            light: '#ffffff',
            main: '#ffffff',
            dark: '#b2b2b2',
        },
    },
})


const makeLoadProgrammingTvUseCase = () => {
    const getAllProgrammingTvRepo = new GetProgrammingTvRepo()
    return new LoadProgrammingTvRPCUsecase(getAllProgrammingTvRepo)
}

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App loadProgrammingTvUsecase={makeLoadProgrammingTvUseCase()}/>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
