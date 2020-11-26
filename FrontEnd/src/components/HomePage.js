import React, { Component } from 'react'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";



export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid container spacing={1}>
                <Grid item xs={12} align="center">
                    <Typography component="h2" variant="h2">
                        Welcome To MusicAPP
                    </Typography>
                    <Grid item xs={5} align="right">
                        <Typography component="p" variant="p">
                            Uzman Munib
                    </Typography>
                    </Grid>
                </Grid>
            </Grid>

        );
    }
}




