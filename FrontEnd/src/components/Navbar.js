import React, { Component } from "react";
import { render } from "react-dom";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">Django/React App</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link" href="/api/room">All Rooms (API View)
            <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="/create">Create</a>
            <a class="nav-item nav-link" href="/join">Join</a>
            <a class="nav-item nav-link" href="/meme">Meme</a>
          </div>
        </div>
      </nav>
    );
  }
}

const navbarDiv = document.getElementById('navbar');
render(<Navbar />, navbarDiv)

