import React from 'react';
import { Component } from 'react';
import API from '../../utils/API';
import Container from "../container.component";
import { Redirect } from "react-router-dom";
// import Moment from 'react-moment';

export default class Questions extends Component {
    state = {
        redirect: "",
        presidents: [],
        questionSet: "getQuestions",
        selectedOption: '',
        presNum: 0,

    }

    constructor(props) {
        super(props);
        this.playStephon = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        API.getPres()
            .then(res => {
                this.setState({
                    presidents: res.data
                })
                console.log(this.state.presidents);
            })
            .then(() => {
                this.setState({
                    presNum: 1,
                });
            })
    }

    onValueChange = event => {
        this.setState({
            selectedOption: event.target.value
        });
    }

    handleFormSubmit() {

    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={{
                // sending data to next page
                pathname: this.state.redirect,
                state: {
                    id: this.props.location.state.id,
                }
            }} />
        }
        return (
            <Container>
                <div className="container">
                    <h4><p>president number : {this.state.presNum}</p></h4>
                    <hr />

                    <div>

                        <div className="card ">
                            {this.state.presidents.map(pres => (
                                <div key={pres._id} className="card-body">
                                    <h4>{pres.president}</h4>
                                    {pres.number}<hr />
                                    birth year: { pres.birth_year}  <br />
                                    took office: { pres.took_office}<br />
                                    left office: { pres.left_office}<br />
                                    death year: { pres.death_year}<br />
                                    party: { pres.party}<hr />
                                </div>
                            ))}
                        </div>

                    </div>

                    <p>
                        <button
                            onClick={() => this.handleFormSubmit()}
                            className="save btn btn-info"
                            type="submit">next President
                                </button>
                    </p>
                    <hr />
                    <p>
                        <button
                            onClick={() => this.handleFormSubmit()}
                            className="save btn btn-info"
                            type="submit">back to landing page
                                </button>
                    </p>

                </div>
            </Container>
        )
    }
}