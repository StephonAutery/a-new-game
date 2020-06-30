import React, { Component } from 'react';
import API from '../utils/API';
import Container from "./container.component"

export default class APITest extends Component {
    state = {
        selectedOption: "",
        data: []
    }

    componentDidMount() {
        API.getQuestions()
            .then(res => {
                console.log(res.data.length);
                this.setState({
                    data: res.data
                })
                console.log(this.state.questions.length);
            })

        // API.getPresData()
        //     .then(res => {
        //         console.log(res);
        //     })

        API.LOC_API()
            .then(res => {
                // console.log(res.data.trending_content);
                console.log(res.data.results);
            })
    }

    onValueChange = event => {
        this.setState({
            selectedOption: event.target.value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("..........");
        console.log(this.state.selectedOption);
        console.log(this.state.question._id);
        this.setState({
            selectedOption: ""
        });
        console.log(this.state.selectedOption);
    }

    render() {
        return (
            <Container>
                <div className="container radio w-75">

                    <h3><p>questions in this set : {this.state.questions.length}</p></h3>
                    <hr />
                    <form onSubmit={this.handleFormSubmit}>
                        <div>

                            {this.state.questions.map(question => (
                                <div className="card p-2 m-4" key={question._id}>
                                    <p>{question.question}</p>
                                    <hr />
                                    <p>
                                        <label>
                                            <input
                                                type="radio"
                                                value="a"
                                            />
                                        &nbsp;&nbsp;{question.a}<br />
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <input
                                                type="radio"
                                                value="b"
                                            />
                                        &nbsp;&nbsp;{question.b}<br />
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <input
                                                type="radio"
                                                value="c"
                                            />
                                        &nbsp;&nbsp;{question.c}<br />
                                        </label>
                                    </p>
                                    <p>
                                        <button
                                            className="save btn btn-info"
                                            type="submit">answer
                                        </button>
                                    </p>
                                </div>
                            ))}

                        </div>
                    </form>
                </div>
            </Container>
        )
    }
}