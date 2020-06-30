import React, { Component } from 'react';
import API from '../utils/API';
import Container from "./container.component";
import { Redirect } from "react-router-dom";

export default class Users extends Component {
    state = {
        selectedOption: "",
        users: [],
        tank: ""
    }

    componentDidMount() {
        API.getUsers()
            .then(res => {
                this.setState({
                    users: res.data
                })
            })
    }

    onValueChange = event => {
        this.setState({
            selectedOption: event.target.value
        });
    }

    handleFormSubmit() {
        if (this.state.selectedOption) {
            this.setState({
                tank: this.state.selectedOption,
                selectedOption: "",
                redirect: "/questions"
            });
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={{
                pathname: this.state.redirect,
                state: {
                    id: this.state.tank
                }
            }} />
        }
        return (
            <Container>
                <div className="container radio w-50">
                    <h3><p>who are you?</p></h3>
                    <hr />
                        <div>
                            {this.state.users.map(user => (
                                <div className="card p-2 m-4" key={user._id}>
                                    <p>{ user.name }</p>
                                    <p>{ user.role }</p>
                                    <label>
                                        <input
                                            type="radio"
                                            value={user._id}
                                            checked={this.state.selectedOption === user._id}
                                            onChange={this.onValueChange}
                                        />
                                        &nbsp;&nbsp;{user.f_name} {user.l_name} | {user.race}<br />
                                    </label>
                                </div>
                            ))}
                            <p>
                                <button
                                    onClick={() => this.handleFormSubmit()}
                                    className="save btn btn-info"
                                    type="submit">that's me
                                </button>
                            </p>
                        </div>
                </div>
            </Container>
        )
    }
}