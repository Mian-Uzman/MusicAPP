import React, { Component } from 'react'
import HomePage from './HomePage'
import RoomJoinPage from './RoomJoinPage'
import CreateRoomPage from './CreateRoomPage'
import Meme from './Meme'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom"

export default class RoutePages extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/home' component={HomePage} />
                    <Route path='/join' component={RoomJoinPage} />
                    <Route path='/create' component={CreateRoomPage} />
                    <Route path='/meme' component={Meme} />
                </Switch>
            </Router>
        );
    }
}