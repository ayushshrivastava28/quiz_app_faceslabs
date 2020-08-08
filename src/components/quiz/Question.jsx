import React, { Component } from 'react'
import { Button, ListGroup, Row, Col} from 'react-bootstrap'

var results = []

class Question extends Component {
    onChange(choice, event) {
        event.preventDefault()
        const { setCurrent, setScore, question } = this.props
        if (choice === question.correct) {
            results.push('✓')
            setScore(this.props.score + 1)
            setCurrent(this.props.current + 1)
        } else if (choice !== question.correct) {
            results.push('X')
            setCurrent(this.props.current + 1)
        } else {
            console.log('not right or wrong')
            setCurrent(this.props.current + 1)
        }
    }

    shuffleChoices(choices) {
        for (let index = choices.length - 1; index > 0; index--) {
            let index_2 = Math.floor(Math.random() * (index + 1))
            let temp = choices[index]
            choices[index] = choices[index_2]
            choices[index_2] = temp
        }
        return choices
    }

    render() {
        const { question } = this.props
        return (
            <div>
                {
                    results.length === 0
                        ? <div></div>
                        : <center bsStyle="small">
                            <div className="results">
                                <div className="center">
                                    {
                                        results.map( (result, index) => {
                                            if (result === 'X') {
                                                return (
                                                    <span key={`wrong-${index}`} style={style.wrong}>
                                                        {`   ${result}   `}
                                                    </span>
                                                )
                                            } else {
                                                return (
                                                    <span key={`correct_${index}`} style={style.correct}>
                                                        {`   ${result}   `}
                                                    </span>
                                                )
                                            }
                                        })
                                    }
                                </div>
                            </div>
                        </center>
                }
                <center>
                    <h2><center style={{fontWeight:700}}>{question.text}</center></h2>
                    <hr />
                    <ListGroup>
                        {
                            this.shuffleChoices(question.choices).map((choice, index) => {
                                return (
                                       <Button className="mt-2" variant={"info"} style={{ width: '100%',marginTop:20,backgroundColor:"#368fda3b"}}  name={question.id} key={`choice_${index}`} onClick={this.onChange.bind(this, choice.text)}>
                                            <h4 style={{fontWeight:"bold"}}>{choice.text}</h4>
                                        </Button>
                                )
                            })
                        }
                    </ListGroup>
                    <Row style={{fontWeight:500, color:"rgb(6 5 5)"}}>
                        
                        <Col className="category" md={5}>
                            <strong>Category: </strong>{question.category}
                        </Col>
                        <Col className="category" md={5}>
                        <strong>Difficulty: </strong>{question.difficulty}
                        </Col>
                        
                    </Row>
                </center>
            </div>
        )
    }
}

const style = {
    correct: {
        color: '#008000'
    },
    wrong: {
        color: '#FF0000'
    }
}

export default Question