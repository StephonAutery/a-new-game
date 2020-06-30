import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

export default class Landing extends Component {
    state = {
        redirect: ""
    }
    constructor(props) {
        super(props);
        this.playStephon = this.playStephon.bind(this);
        this.playSue = this.playSue.bind(this);
        this.playPres = this.playPres.bind(this);
    }

    componentDidMount() {
        if (!localStorage.getItem('loginData')) {
            this.setState({
                redirect: "landing"
            })
        }
    }

    playStephon(event) {
        event.preventDefault();
        this.setState({
            redirect: "questions"
        });
    }

    playSue(event) {
        event.preventDefault();
        this.setState({
            redirect: "sueQuestions"
        });
    }

    playPres(event) {
        event.preventDefault();
        this.setState({
            redirect: "presidents"
        });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={{
                pathname: this.state.redirect,
                state: {
                    id: JSON.parse(localStorage.getItem('loginData')),
                    // loggedIn: this.props.location.state.loggedIn
                }
            }} />
        }
        return (
            <div className="container">
                <form>
                    <h3><p>question sets</p></h3>
                    <hr />
                    <p>Susannah Levy is an OBGyn/Obstetrics Nurse at UCSF General Hospital and the Mother of 2.</p>
                    <button
                        className="save btn btn-info"
                        onClick={this.playSue}
                        type="submit"
                        value="submit">Susannah Levy
                    </button>
                    <hr />
                    <p>Stephon Autery is a Full Stack Developer and the Father of 2.</p>
                    <button
                        className="save btn btn-info"
                        onClick={this.playStephon}
                        type="submit"
                        value="submit">Stephon Autery
                    </button>
                    <hr />
                    <p>explore the truth about the Presidents of the US?</p>
                    <button
                        className="save btn btn-info"
                        onClick={this.playPres}
                        type="submit"
                        value="submit">who's your President
                    </button>
                </form>
            </div >
        )
    }
}