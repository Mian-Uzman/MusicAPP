import React, { Component } from 'react';
import { TextField, Button, Grid, Typography, Box, ButtonGroup } from "@material-ui/core";
import { Link } from "react-router-dom";

export default class RoomJoinPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomCode: "",
            error: ""
        };
        this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
        this.roomButtonPressed = this.roomButtonPressed.bind(this);
    }

    render() {
        return (
            <Grid container spacing={1} align="center">
                <Grid item xs={12}>
                    <Typography component="h3" variant="h3">
                        Join a Room
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Box m={4} p={1}>
                        <TextField
                            error={this.state.error}
                            label="Code"
                            placeholder="Enter Room Code"
                            value={this.state.roomCode}
                            helperText={this.state.error}
                            variant="outlined"
                            onChange={this.handleTextFieldChange}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box m={4} p={3}>
                        <ButtonGroup variant="contained">
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={this.roomButtonPressed}>Enter Room
                    </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                to="/"
                                component={Link}>Home
                    </Button>
                        </ButtonGroup>
                    </Box>
                </Grid>
            </Grid >
        );
    }



    handleTextFieldChange(e) {
        this.setState({
            roomCode: e.target.value
        })
    }

    roomButtonPressed() {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                code: this.state.roomCode
            })
        };
        fetch('/api/join-room', requestOptions).then((response) => {
            if (response.ok) {
                this.props.history.push(`/room/${this.state.roomCode}`)
            } else {
                this.setState({ error: "Room not found." });
            }
        }).catch((error) => {
            console.log(error);
        });
    }
}