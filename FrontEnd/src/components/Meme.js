import React, { Component } from 'react'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";



export default class Meme extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid container spacing={1}>
                <Grid item xs={12} align="center">
                    <Typography component="h3" variant="h3">
                        Meme Page
            </Typography>
                    <Grid item xs={4} align="center">
                        <Typography component="p" variant="p">
                            Phuddi Ke!
            </Typography>
                    </Grid>
                </Grid>

            </Grid>

        );
    }
}
