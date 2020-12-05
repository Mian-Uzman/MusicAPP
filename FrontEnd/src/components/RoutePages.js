import React, { Component } from 'react';
import HomePage from './HomePage';
import RoomJoinPage from './RoomJoinPage';
import CreateRoomPage from './CreateRoomPage';
import Meme from './Meme';
import Room from './Room';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";

export default class RoutePages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomCode: null,
        };
        this.clearRoomCode = this.clearRoomCode.bind(this)
    }

    async componentDidMount() {
        fetch('/api/user-room')
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    roomCode: data.code,
                });
            });
    }

    clearRoomCode() {
        this.setState({
            roomCode: null,
        })
    }
    render() {
        return (
            <Router>
                <Switch>
                    {/*<Route exact path='/' component={HomePage} />*/}
                    <Route exact path='/' render={() => {
                        return this.state.roomCode ? (<Redirect to={`/room/${this.state.roomCode}`} />) : (<Route exact path='/' component={HomePage} />);
                    }} />
                    <Route exact path='/home' component={HomePage} />
                    <Route path='/join' component={RoomJoinPage} />
                    <Route path='/create' component={CreateRoomPage} />
                    <Route path='/meme' component={Meme} />
                    <Route path='/room/:roomCode' render={(props) => {
                        return <Room {...props} leaveRoomCallback={this.clearRoomCode} />;
                    }} />
                </Switch>
            </Router>
        );
    }
}