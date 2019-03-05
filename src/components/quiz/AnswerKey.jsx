import React, { Component } from 'react'

class AnswerKey extends Component {
    render() {
        return (
            <div className="answer-key">
                {
                    this.props.questions.map((question, index) => {
                        return (
                            <div key={index}>
                                <center> 
                                    <h4 >Question  {index + 1} </h4>
                                    <div className="que">{question.text}</div><br /><br />
                                    <h4>Answer:</h4>
                                    <div className="ans">{question.correct}</div>
                                </center>
                                <hr />
                            </div>

                        )
                    })
                }
            </div>
        )
    }
}

export default AnswerKey