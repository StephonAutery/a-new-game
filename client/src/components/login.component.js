import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import API from "../utils/API";

export default class Login extends Component {
    state = {
        email: "",
        password: "",
        loggedIn: false,
        userID: "",
        redirect: null
    }

    handleChange = event => {
        // console.log(event.target.name + " | " + event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        API.loginUser({
            email: this.state.email,
            password: this.state.password
        })
            .then(res => {
                if (res.status === 200) {
                    API.getUserId({
                        email: this.state.email
                    }).then(res => {
                        // update users state
                        // set redirect state
                        localStorage.setItem('loginData', JSON.stringify({ userid: res.data.id._id }));
                        this.setState({
                            loggedIn: true,
                            // userID: res.data.id._id,
                            userID: JSON.parse(localStorage.getItem('loginData')),
                            redirect: 'play'
                        });
                    });
                }
                // this.forceUpdate(this.setRedirect);
            }).catch(err => {
                console.log("dang!");
                console.log(err);
            });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={{
                pathname: this.state.redirect,
                state: {
                    id: this.state.userID,
                    loggedIn: this.state.loggedIn
                }
            }} />
        }
        return (
            <div className="container p-2 w-50">
                <h4><p>welcome to History Portal, please login</p></h4>
                <h5><p>or</p></h5>
                <h6><p><a className="nav-link" href="/signup">sign up</a></p></h6>
                <hr />
                <form>
                    <label htmlFor="email">
                        &nbsp;&nbsp;email:
                        <p>
                            <input
                                type="text"
                                // value={this.state.username}
                                name="email"
                                placeholder="enter email"
                                autoComplete="email"
                                onChange={this.handleChange}
                            />
                        </p>
                    </label>
                    <br />
                    <label htmlFor="password">
                        &nbsp;&nbsp;password:
                        <p>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                autoComplete="current-password"
                                onChange={this.handleChange}
                            />
                        </p>
                    </label>
                    <hr />
                    <p>
                        <button
                            className="save btn btn-danger"
                            onClick={this.handleFormSubmit}
                            type="submit"
                            value="submit">login
                        </button>
                    </p>

                </form>
            </div>
        )
    }
}