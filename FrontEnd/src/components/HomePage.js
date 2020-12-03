import React, { Component } from 'react'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Card, CardActions, CardContent, Button, makeStyles } from "@material-ui/core";
import { Link } from 'react-router-dom';



export default class HomePage extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const titlestyle1 = {
            width: "450px",
            paddingTop: "350px",
            paddingLeft: "50px",
        }
        const titlestyle2 = {
            width: "520px",
            paddingTop: "350px",
            paddingLeft: "120px",
        }
        const titlestyle3 = {
            width: "520px",
            paddingTop: "350px",
            paddingLeft: "120px",
        }
        const titleCard = {
            backgroundColor: "#8c99a6",
        }
        const fontColor = {
            color: "#ffffff",
        }

        return (
            <Grid container spacing={1}>
                <Grid item xs={12} align="center">
                    <Typography component="h3" variant="h3">
                        Welcome To MusicAPP
                    </Typography>
                    <Grid item xs={5} align="center">
                        <Typography component="p" variant="p">
                            Made by: Uzman Munib
                    </Typography>
                    </Grid>
                </Grid>
                {/* First Card */}
                <div style={titlestyle1}>
                    <Card style={titleCard} className="root" variant="outlined">
                        <CardContent>
                            <Typography style={{ color: "#2a2a2a" }} color="textSecondary" gutterBottom>
                                Stream Music
                        </Typography>
                            <Typography style={fontColor} variant="h5" component="h2">
                                Listen to your favourite music with others
                        </Typography>
                            <Typography style={fontColor} variant="body2" component="p">
                                Join or Create a Room Now!
                        </Typography>
                        </CardContent>
                        <CardActions>
                            <Button style={{ color: "#2a2a2a" }} size="small" to="meme/" component={Link}>Learn More</Button>
                        </CardActions>
                    </Card>
                </div>

                {/* Second Card */}
                <div style={titlestyle2}>
                    <Card style={titleCard} className="root" variant="outlined">
                        <CardContent>
                            <Typography style={{ color: "#2a2a2a" }} color="textSecondary" gutterBottom>
                                Create Room
                        </Typography>
                            <Typography style={fontColor} variant="h5" component="h2">
                                Create a Room to start playing Music
                        </Typography>
                            <Typography style={fontColor} variant="body2" component="p">
                                Create using the link below!
                        </Typography>
                        </CardContent>
                        <CardActions>
                            <Button style={{ color: "#2a2a2a" }} size="small" to="create/" component={Link}>Create!</Button>
                        </CardActions>
                    </Card>
                </div>

                {/* Third Card */}
                <div style={titlestyle3}>
                    <Card style={titleCard} className="root" variant="outlined">
                        <CardContent>
                            <Typography style={{ color: "#2a2a2a" }} color="textSecondary" gutterBottom>
                                Join Room
                        </Typography>
                            <Typography style={fontColor} variant="h5" component="h2">
                                Join an existing Room to start playing Music
                        </Typography>
                            <Typography style={fontColor} variant="body2" component="p">
                                Join using the Link below!
                        </Typography>
                        </CardContent>
                        <CardActions>
                            <Button style={{ color: "#2a2a2a" }} size="small" to="join/" component={Link}>Join!</Button>
                        </CardActions>
                    </Card>
                </div>
            </Grid>

        );
    }
}




