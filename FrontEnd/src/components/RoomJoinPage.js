import React, { Component } from 'react'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";


export default class RoomJoinPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid container spacing={1}>
                <Grid item xs={12} align="center">
                    <Typography component="h2" variant="h2">
                        Join a Room
                </Typography>
                    <Grid item xs={4} align="center">
                        <Typography component="p" variant="p">
                            Join an existing room or create your own!
                </Typography>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}