import React, { Component } from 'react';
import API from '../utils/API';
import Container from "./container.component";

export default class Users extends Component {
    state = {
        users: [],
        questions: [],
        count: 0,
        stats: [],
        user: [],
        percentageCorrect: Math.round(this.props.location.state.numRight / this.props.location.state.answers.length * 100),
        percentageIncorrect: Math.round(this.props.location.state.numWrong / this.props.location.state.answers.length * 100)
    }

    componentDidMount() {
        // API call to save answers to database
        API.saveResults({
            userID: this.props.location.state.id,
            answerResult: this.props.location.state.answers,
            questionSet: "questions"
        });
        API.saveStats({
            userID: this.props.location.state.id,
            numRight: this.props.location.state.numRight,
            numWrong: this.props.location.state.numWrong,
            percentageCorrect: this.state.percentageCorrect,
            percentageIncorrect: this.state.percentageIncorrect,
            questionSet: "questions"
        });
        // get question set from databse to show answers
        API.getQuestions()
            .then(res => {
                this.setState({
                    questions: res.data
                })
            });
        // get users historical results from database
        API.getResults()
            .then(res => {
            });

        API.findUserStatsByID(this.props.location.state.id)
            .then(res => {
                this.setState({
                    stats: res.data,
                })
            });
        API.getUserById(this.props.location.state.id)
            .then(res => {
                this.setState({
                    user: res.data.user
                })
                console.log("----- user -");
                console.log(this.state.user.name);
            });
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        let min = 1;
        let max = 1000;
        return (
            < Container >
                <div className="container w-75">
                    {/* <h3><p>You Are: { this.state.user.name }</p></h3> */}
                    <hr />
                    <div className="row">

                        <div className="col">
                            <div className="row card p-2 m-1">
                                <p>player ID:</p>
                                <p>{ this.state.user.name }</p>
                            </div>
                            <div className="row card p-2 m-1">
                                <p>number correct:</p>
                                <p>{this.props.location.state.numRight}</p>
                                <p>number incorrect:</p>
                                <p>{this.props.location.state.numWrong}</p>
                                <p>percentage correct:</p>
                                <p>{this.state.percentageCorrect} %</p>
                                <p>percentage incorrect:</p>
                                <p>{this.state.percentageIncorrect} %</p>
                            </div>
                        </div>

                        <div className="col card p-2 m-1">
                            <p>correct answers</p>
                            {this.state.questions.map(question => (
                                <p key={ question._id }>{ question.answer }</p>
                            ))}
                        </div>

                        <div className="col card p-2 m-1">
                            <p>your answers</p>
                            {this.props.location.state.answers.map(answer => (
                                <p key={ min + (Math.random() * (max - min)) }> { answer }</p>
                            ))}
                        </div>

                    </div>
                </div>
            </Container >
        )
    }
}