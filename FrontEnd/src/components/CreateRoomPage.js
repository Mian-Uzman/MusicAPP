import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Box from '@material-ui/core/Box';
import { Link } from "react-router-dom";




export default class CreateRoomPage extends Component {

    // Set States
    defaultVotes = 2;
    constructor(props) {
        super(props);
        this.state = {
            guestCanPause: true,
            votesToSkip: this.defaultVotes,
        };
        this.handleRoomButtonPressed = this.handleRoomButtonPressed.bind(this);
        this.handleVotesChange = this.handleVotesChange.bind(this);
        this.handleGuestCanPauseChange = this.handleGuestCanPauseChange.bind(this);
    }


    // Handle State Changes
    handleVotesChange(e) {
        this.setState({
            votesToSkip: e.target.value,
        });
    }
    handleGuestCanPauseChange(e) {
        this.setState({
            guestCanPause: e.target.value === "true" ? true : false,
        });
    }
    handleRoomButtonPressed() {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                votes_to_skip: this.state.votesToSkip,
                guest_can_pause: this.state.guestCanPause,
            }),
        };
        fetch("/api/create-room", requestOptions)
            .then((response) => response.json())
            .then((data) => this.props.history.push('/room/' + data.code));
    }


    render() {
        return (
            <Grid container spacing={1}>
                <Grid
                    item xs={12}
                    align="center">
                    <Typography
                        component="h3"
                        variant="h3">
                        Create a Room
                    </Typography>
                </Grid>
                <Grid
                    item xs={12}
                    align="center">
                    <Box m={4} p={1}>
                        <FormControl component="fieldset">
                            <FormHelperText>
                                <div align="center">
                                    Guest Control of Playback
                                </div>
                            </FormHelperText>
                            <RadioGroup
                                row defaultValue="true"
                                onChange={this.handleGuestCanPauseChange}>
                                <FormControlLabel
                                    value="true"
                                    control={<Radio color="primary" />}
                                    label="Play/Pause"
                                    labelPlacement="bottom" />
                                <FormControlLabel
                                    value="false"
                                    control={<Radio color="secondary" />}
                                    label="No Control"
                                    labelPlacement="bottom" />
                            </RadioGroup>
                        </FormControl>
                        <Grid
                            item xs={12}
                            align="center">
                            <Box m={2}>
                                <FormControl>
                                    <TextField
                                        required={true}
                                        type="number"
                                        onChange={this.handleVotesChange}
                                        defaultValue={this.defaultVotes}
                                        inputProps={{
                                            min: 1,
                                            style: { textAlign: "center" }
                                        }} />
                                    <FormHelperText>
                                        <div align="center">
                                            Votes Required to skip song
                                        </div>
                                    </FormHelperText>
                                </FormControl>
                            </Box>
                        </Grid>
                    </Box>
                </Grid>
                <Grid
                    item xs={12}
                    align="center">
                    <Box m={4} p={3}>
                        <ButtonGroup variant="contained">
                            <Button
                                color="primary"
                                variant="contained"
                                onClick={this.handleRoomButtonPressed}>
                                Create a Room
                            </Button>
                            <Button
                                color="secondary"
                                variant="contained"
                                to='/'
                                component={Link}>
                                Home
                            </Button>
                        </ButtonGroup>
                    </Box>
                </Grid>
            </Grid>
        );
    }
}