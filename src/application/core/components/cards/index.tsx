import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import onAirIcon from '../../../assets/on_air_2.svg'

import './index.css'

const useStyles = makeStyles({
    root: {
        minHeight: 350,
        maxHeight: 350,
        maxWidth: 300,
    },
    media: {
        height: 130,
    },
    content: {
        height: '100%',
        maxHeight: 150,
        minHeight: 150,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
})

interface IProps {
    title: string,
    description: string,
    start_time: number,
    end_time: number,
    logoUrl: string,
    imgUrl: string,
    duration: number,
    on_air: boolean,
}

export default function MediaCard(props: IProps) {
    const classes = useStyles()

    const processDate = (timestamp: number) => {
        let date = new Date(timestamp * 1000)

        let hr = date.getHours().toString()
        let hrF = (hr.length) === 1 ? '0' + hr : hr

        let min = date.getMinutes().toString()
        let minF = (min.length) === 1 ? '0' + min : min

        let seg = date.getMilliseconds().toString()
        let segF = (seg.length) === 1 ? '0' + seg : seg

        return `${hrF}:${minF}:${segF}`
    }
    return (
        <Card className={classes.root} >
            <CardActionArea>
                <img hidden={!props.on_air} src={onAirIcon} alt='On Air' style={{
                    position: 'absolute',
                    maxWidth: '3em',
                }}/>
                <CardMedia
                    className={classes.media}
                    image={props.imgUrl}
                    title="Contemplative Reptile"
                />
                <CardContent
                    className={classes.content}
                >
                    <Typography gutterBottom variant="h6" component="h3">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Inicio : {processDate(props.start_time)}
                </Button>
                <Button size="small" color="primary">
                    Fim: {processDate(props.end_time)}
                </Button>
            </CardActions>
        </Card>
    )
}
