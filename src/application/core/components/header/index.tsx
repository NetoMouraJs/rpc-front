import React from 'react'
import {
    AppBar,
    Toolbar,
    TextField,
    Grid,
    Button
} from '@material-ui/core'

import './index.css'
import logoRpc from '../../../assets/logot_da_rpc.png'

interface IProps {
    dateSelect:string
    btnSubmit:any
    dateOnChange:any
}

export default function HeaderComponent(props:IProps) {

    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <Grid container direction="row" alignItems="center" justify="space-between" spacing={0}>
                    <Grid item xs={9}>
                        <img id='logo-rpc' src={logoRpc} alt="fireSpot" />
                    </Grid>
                    <Grid item xs={3} sm container spacing={0} direction="row" justify="flex-end" alignItems="center" >
                        <Grid item xs={4}>
                            <Button size="small" variant="contained" color="secondary" onClick={props.btnSubmit}>
                                Buscar
                            </Button>
                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                                id="date"
                                type="date"
                                InputLabelProps={{
                                    shrink: true,
                                    color:'secondary',
                                    style:{
                                        color:'white'
                                    }
                                }}
                                InputProps={{
                                    style:{
                                        color:'#ffffff',
                                    }
                                }}
                                onChange={props.dateOnChange}
                                defaultValue={props.dateSelect}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

