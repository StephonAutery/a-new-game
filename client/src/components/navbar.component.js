import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import API from '../utils/API';

export default class Navbar extends Component {

  state = {

  }

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">History Portal</a>
          </div>
          <ul className="nav navbar-nav">
            <li><a href="/play">play</a></li>
            <li><a href="/logout">logout</a></li>
          </ul>
          </div>
        </nav>
      </div>
    )
  }
}