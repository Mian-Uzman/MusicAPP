import React, { Component } from 'react';
import { Button, Typography, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import CreateRoomPage from "./CreateRoomPage";


export default class Room extends Component {
    constructor(props) {
        super(props);
        this.state = {
            votesToSkip: 2,
            guestCanPause: false,
            isHost: false,
            showSettings: false,
        };
        this.updateShowSettings = this.updateShowSettings.bind(this)
        this.leaveButtonPressed = this.leaveButtonPressed.bind(this);
        this.renderSettingsButton = this.renderSettingsButton.bind(this);
        this.renderSettings = this.renderSettings.bind(this)
        this.roomCode = this.props.match.params.roomCode;
        this.getRoomDetails();
    }

    getRoomDetails() {
        fetch('/api/get-room' + '?code=' + this.roomCode)
            .then((response) => {
                if (!response.ok) {
                    this.props.leaveRoomCallback();
                    this.props.history.push("/");
                }
                return response.json()
            })
            .then((data) => {
                this.setState({
                    votesToSkip: data.votes_to_skip,
                    guestCanPause: data.guest_can_pause,
                    isHost: data.is_host,
                });
            });
    }

    leaveButtonPressed() {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
        };
        fetch('/api/leave-room', requestOptions).then((_response) => {
            this.props.leaveRoomCallback();
            this.props.history.push("/");
        });
    }

    updateShowSettings(value) {
        this.setState({
            showSettings: value,
        });
    }

    renderSettingsButton() {
        return (
            <Grid
                item xs={12}
                align="center">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => this.updateShowSettings(true)}>
                    Settings
                </Button>
            </Grid>
        )
    }

    renderSettings() {
        return (<Grid container spacing={1}>
            <Grid
                item xs={12} a
                lign="center">
                <CreateRoomPage
                    update={true}
                    votesToSkip={this.state.votesToSkip}
                    guestCanPause={this.state.guestCanPause}
                    roomCode={this.roomCode}
                    updateCallback={() => { }}>
                </CreateRoomPage>
            </Grid>
            <Grid
                item xs={12}
                align="center">
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => this.updateShowSettings(false)}>
                    Close
                </Button>
            </Grid>
        </Grid>)
    }


    render() {
        if (this.state.showSettings) {
            return this.renderSettings();
        }
        return (
            <Grid container spacing={1}>
                <Grid
                    item xs={12}
                    align="center">
                    <Typography
                        variant="h3"
                        component="h4">
                        Code: {this.roomCode}
                    </Typography>
                </Grid>
                <Grid
                    item xs={12}
                    align="center">
                    <Typography
                        variant="p"
                        component="p">
                        Votes: {this.state.votesToSkip}
                    </Typography>
                </Grid>
                <Grid
                    item xs={12}
                    align="center">
                    <Typography
                        variant="p"
                        component="p">
                        Guest: {this.state.guestCanPause.toString()}
                    </Typography>
                </Grid>
                <Grid
                    item xs={12}
                    align="center">
                    <Typography
                        variant="p"
                        component="p">
                        Host: {this.state.isHost.toString()}
                    </Typography>
                </Grid>
                {this.state.isHost ? this.renderSettingsButton() : null}
                <Grid
                    item xs={12}
                    align="center">
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={this.leaveButtonPressed}>
                        Leave Room
                    </Button>
                </Grid>
            </Grid>
        );
    }
}
