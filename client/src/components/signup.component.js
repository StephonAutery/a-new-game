import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import API from "../utils/API";
// import Select from 'react-select';

export default class NewQuestions extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        password2: "",
        race: "",
        loggedIn: false,
        redirect: null
    }

    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit = event => {
        event.preventDefault();
        API.signUp({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
            role: "user",
            race: this.state.race
        })
            .then(res => {
                console.log("login response: ");
                console.log(res);
                if (!res.data.errmsg) {
                    console.log('successful signup');
                    this.setState({
                        redirect: '/login'
                    });
                } else {
                    // console.log('username already taken');
                    this.setState({
                        redirect: '/login'
                    });
                }
            })
            .catch(err => {
                console.log("dang! you're not signed up!");
                console.log(err);
            });
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={{
                pathname: this.state.redirect
            }} />
        }
        return (
            <div className="container p-2 w-50">
                <h3><p>hello new user</p></h3>
                <hr />
                <form onSubmit={this.handleFormSubmit}>
                    <label htmlFor="name">
                        &nbsp;&nbsp;name:
                        <p>
                            <input
                                type="text"
                                value={this.state.name}
                                name="name"
                                placeholder="full name"
                                autoComplete="name"
                                onChange={this.handleChange}
                            />
                        </p>
                    </label>
                    <br />
                    <label htmlFor="email">
                        &nbsp;&nbsp;email:
                        <p>
                            <input
                                type="text"
                                value={this.state.username}
                                name="email"
                                placeholder="email address"
                                autoComplete="email"
                                onChange={this.handleChange}
                            />
                        </p>
                    </label>
                    <br />
                    {/* <label htmlFor="race">&nbsp;&nbsp;race:</label>
                        <p>
                            <select value={ this.state.race } name="race" id="race" placeholder="race">
                            <option value="White">White American</option>
                            <option value="Black">Black or African American</option>
                            <option value="IndianAlaskan">American Indian and Alaska Native</option>
                            <option value="Chinese">Chinese American</option>
                            <option value="Filipino">Filipino American</option>
                            <option value="AsianIndian">Asian Indian American</option>
                            <option value="NaHawiian">Native Hawaiian American</option>
                            <option value="Samoan">Samoan American</option>
                            <option value="Chamorro">Chamorro American</option>
                            <option value="PacificIs">Pacific Islander</option>
                            <option value="Mixed">Mixed Race</option>
                            </select>
                        </p>
                    <br /> */}
                    <label htmlFor="password">
                        &nbsp;&nbsp;password:
                        <p>
                            <input
                                type="password"
                                value={this.state.password}
                                name="password"
                                placeholder="password"
                                autoComplete="password"
                                onChange={this.handleChange}
                            />
                        </p>
                    </label>
                    <br />
                    <label htmlFor="password2">
                        &nbsp;&nbsp;re-enter password:
                        <p>
                            <input
                                type="password"
                                value={this.state.password2}
                                name="password2"
                                placeholder="password2"
                                autoComplete="password2"
                                onChange={this.handleChange}
                            />
                        </p>
                    </label>
                    <hr />
                    <p>
                        <button
                            className="save btn btn-primary"
                            onClick={this.handleSubmit}
                            type="submit"
                            value="submit"
                        >sign up</button>
                    </p>
                </form>
            </div>
        )
    }
}