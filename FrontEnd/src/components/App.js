import React, { Component } from "react";
import { render } from "react-dom";
import RoutePages from './RoutePages';



export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <RoutePages></RoutePages>
            </div>

        );
    }
}

const appDiv = document.getElementById('app');
render(<App />, appDiv)


