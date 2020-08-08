import React, { Component } from "react";
import QuestionList from "./components/quiz/QuestionList";
import Results from "./components/quiz/Results";
import "./App.css";
import { createQuizData as quizData } from "./api/opentdb";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      score: 0,
      name:props.location.pathname.split("/").reverse()[0],
      current: 0,
      loading: undefined,
    };
    console.log("props",props.location.pathname.split("/").reverse()[0])
  }

  setCurrent = (current) => {
    this.setState({ current });
  };
 
  setScore = (score) => {
    this.setState({ score });
  };

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      this.setState({ questions: await quizData(), loading: false });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    console.log(this.state);
    if (this.state.loading === false) {
      if (this.state.current >= this.state.questions.length) {
        var results = <Results {...this.state} />;
      } else {
        results = "";
      }
      return (
        <div>
          <QuestionList
            {...this.state}
            setCurrent={this.setCurrent}
            setScore={this.setScore}
          />
          {results}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default App;