import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';

import '../css/Quiz.css';

class Choice extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            revealAnswer: this.props.reveal,
            isCorrect: this.props.c.correct,
            content: this.props.c.content,
            isSelected: false,
            displayCorrect: "",
        }

        this.inputChange = this.inputChange.bind(this);
    }

    inputChange(evnet) {
        this.setState({
            isSelected: !this.state.isSelected
        })
    }

    componentWillReceiveProps(newProps) {
        if (newProps.reveal) {
            if(this.state.isCorrect) {
                this.setState({
                    displayCorrect: " ( CORRECT )"
                })
            }
        }
        if (this.state.isSelected) {
            this.props.update(this.state.isCorrect);
        }
    }

    render() {


        return (
            <div>
                <input type='radio' name={this.props.name} onChange={this.inputChange}/>
                <label>  {this.state.content} {this.state.displayCorrect} </label>
            </div>
        )
    }
}

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quizItem: this.props.q,
            question: this.props.q.question,
            choices: this.props.q.choices,
            rev: this.props.r,
            resultStyle: null,
            isCorrect: "",
        }

        this.updateSelection = this.updateSelection.bind(this);
    }

    updateSelection(result) {
        const styleCorrect = {
            color: "green",
        }
    
        const styleWrong = {
            color: "red",
        }

        if (this.state.isCorrect === "") {
            if(result) {
                this.setState({
                    isCorrect: "Correct!"
                })
                this.setState({
                    resultStyle: styleCorrect
                })
            }
            else {
                this.setState({
                    isCorrect: "Wrong"
                })
                this.setState({
                    resultStyle: styleWrong
                })
            }
        }
    }

    render() {

        var views = [];
        return(
            <div>
                <hr />
                <h3>{this.state.question}</h3>
                {
                    Object.keys(this.state.choices).map( choice => {
                        views.push(
                            <Choice 
                                c={this.state.choices[choice]} 
                                name={this.props.n} 
                                reveal={this.props.r} 
                                update={(choice) => this.updateSelection(choice)}
                            />
                        )
                    })
                }
                {views}
                <h3 style={this.state.resultStyle}>{this.state.isCorrect}</h3>
            </div>
        )
    }
}

class Questions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: this.props.questions,
            reveal: this.props.revealAnswers,
        }
    }


    render() {
        return(
            <div>
                <section>
                {
                    Object.keys(this.state.questions).map(question => {
                        return <Question q={this.state.questions[question]} r={this.props.revealAnswers} n={question}/>
                    })
                }
                </section>
            </div>
        )
    }
}

const AllQuestions = {
    question1: { 
        question: "What organization method does Trello use?",
        choices: {
            choice1: {
                content: "Scrum",
                correct: false,
            },
            choice2: {
                content: "Kanban",
                correct: true,
            },
            choice3: {
                content:"Waterfall",
                correct: false,
            },
            choice4: {
                content: "Agile",
                correct: false,
            }
        } 
    },
    question2: { 
        question: "Why is Trello useful?",
        choices: {
            choice1: {
                content: "Allows for various deadlines of requirements",
                correct: false,
            },
            choice2: {
                content: "Connects multiple people for a specific project",
                correct: false,
            },
            choice3: {
                content: "Filter requirements to view specific parts of a project.",
                correct: false,
            },
            choice4: {
                content: "All of the above",
                correct: true,
            }
        } 
    },
    question3: { 
        question: "How do you move cards in Trello?",
        choices: {
            choice1: {
                content: "Drag them into new parts",
                correct: true,
            },
            choice2: {
                content: "Right click and click on new label",
                correct: false,
            },
            choice3: {
                content: "Not possible to move cards",
                correct: false,
            },
        } 
    },
    question4: { 
        question: "An organization method is important to software development",
        choices: {
            choice1: {
                content: "False",
                correct: false,
            },
            choice2: {
                content: "True",
                correct: true,
            },
        } 
    },

}

class TrelloQuiz extends Component {

    constructor() {
        super();
        this.state = {
            revealAnswers: false,
        }
        this.reveal = this.reveal.bind(this);
    }

    reveal(event) {
        event.preventDefault();
        this.setState({
            revealAnswers: true
        })
    }

    render() {

        return (
            <div className="InfoPage">
                <h1>Trello Quiz</h1>
                <form>
                    <Questions questions={AllQuestions} revealAnswers={this.state.revealAnswers}/>
                    <input className="Quiz__submit" type="submit" value="Submit" onClick={this.reveal}/>
                </form>
            </div>
        )
    }
}

export default TrelloQuiz;