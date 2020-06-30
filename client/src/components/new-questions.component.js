import React, { Component } from 'react';
import API from "../utils/API";

export default class NewQuestions extends Component {
    state = {
        valueq: "",
        valuea: "",
        a: "a",
        valueb: "",
        b: "b",
        valuec: "",
        c: "c",
        selectedOption: "",
        formPost: false
    }

    componentDidMount() {
        this.setState({
        });
    }

    componentDidUpdate() {
        if (this.state.formPost) {
            this.setState({
                valueq: "",
                valuea: "",
                valueb: "",
                valuec: "",
                formPost: false
            })
        }
    }

    onValueChange = event => {
        this.setState({
            selectedOption: event.target.value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        API.saveQuestion({
            question: this.state.valueq,
            a: this.state.valuea,
            b: this.state.valueb,
            c: this.state.valuec,
            answer: this.state.selectedOption
        })
        .then(res => {
            console.log(res.statusText);
        })
            .catch(err => console.log(err))
        this.setState({
            formPost: false,
            selectedOption: "",
        });
    }

    handleChange = event => {
        this.setState({
            value: event.target.value
        })
    }

    handleQ = event => {
        this.setState({
            valueq: event.target.value
        })
    }

    handleA = event => {
        this.setState({
            valuea: event.target.value
        })
    }

    handleB = event => {
        this.setState({
            valueb: event.target.value
        })
    }

    handleC = event => {
        this.setState({
            valuec: event.target.value
        })
    }

    render() {
        return (
            <div className="container w-50">
                <p>insert a new question</p>
                <hr />

                <form onSubmit={this.handleFormSubmit}>
                    <p>this is the question:</p>
                    <p>
                        <label>
                            <textarea width="50%" valueq={this.state.valueq} onChange={this.handleQ} />
                        </label>
                    </p>

                    <hr />

                    <p>
                        these are the answers:
                    </p>

                    <label>
                        <input
                            type="radio"
                            value="a"
                            checked={this.state.selectedOption === 'a'}
                            onChange={this.onValueChange}
                        />
                    &nbsp;&nbsp;answer a:
                        <p>
                            <textarea valuea={this.state.valuea} onChange={this.handleA} />
                        </p>
                    </label>


                    <br />

                    <label>
                        <input
                            type="radio"
                            value="b"
                            checked={this.state.selectedOption === 'b'}
                            onChange={this.onValueChange}
                        />
                    &nbsp;&nbsp;answer b:
                        <p>
                            <textarea valueb={this.state.valueb} onChange={this.handleB} />
                        </p>
                    </label>

                    <br />

                    <label>
                        <input
                            type="radio"
                            value="c"
                            checked={this.state.selectedOption === 'c'}
                            onChange={this.onValueChange}
                        />
                    &nbsp;&nbsp;answer c:
                        <p>
                            <textarea valuec={this.state.valuec} onChange={this.handleC} />
                        </p>
                    </label>

                    <hr />

                    <p>
                        <button
                            className="save btn btn-danger"
                            type="submit">insert question
                        </button>
                    </p>

                </form>
            </div>
        )
    }
}