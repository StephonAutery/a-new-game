import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

export default class Login extends Component {
    state = {
        email: "",
        password: "",
        loggedIn: false,
        userID: "",
        redirect: null
    }

    componentDidMount() {
        localStorage.clear();
        this.setState({
            loggedIn: false,
            redirect: "landing"
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={{
                pathname: this.state.redirect,
            }} />
        }
        return (
            <div>
                <h4><p>logout</p></h4>
            </div>
        )
    }
}