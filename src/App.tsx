import * as React from 'react';
import Header from "./Components/Header";
import Form1 from "./Components/Form1";
import Form2 from "./Components/Form2";
import Form3 from "./Components/Form3";
import Form4 from "./Components/Form4";
import Form5 from "./Components/Form5";
import Form6 from "./Components/Form6";
import Form7 from "./Components/Form7";
import SelectBox from "./Components/Selectbox";
import { number } from 'prop-types';

export default class App extends React.Component<any, any>{
  constructor(props: any) {
    super(props);

    this.questionAnswerYes = this.questionAnswerYes.bind(this);
    this.questionAnswerNo = this.questionAnswerNo.bind(this);
    this.previousQuestion = this.previousQuestion.bind(this);
    this.nextClicked = this.nextClicked.bind(this);
    this.previousClicked = this.previousClicked.bind(this);
    this.getQuestionIndex = this.getQuestionIndex.bind(this);
    this.getPhase = this.getPhase.bind(this);
    this.setPhase = this.setPhase.bind(this);

    this.state = {
      index: 1,
      syvKjappeIndex: 1,
      phase: 0, // 0 = innledende spørsmål, 1 = prephase, 2 = early phase, 3 = operational phase, 4 = growth phase

      introQuestionOne: false,
      introQuestionTwo: false,

      phaseIdQuestionOne: false,
      phaseIdQuestionTwo: false,
      phaseIdQuestionThree: false,
      phaseIdQuestionFour: false,

      prePhaseQuestionOne: false,
      prePhaseQuestionTwo: false,
      prePhaseQuestionThree: false,

      earlyPhaseQuestionOne: false,
      earlyPhaseQuestionTwo: false,

      operationalPhaseQuestionOne: false,
      operationalPhaseQuestionTwo: false,
      operationalPhaseQuestionThree: false,
      operationalPhaseQuestionFour: false,

      growthPhaseQuestionOne: false,
      growthPhaseQuestionTwo: false,
      growthPhaseQuestionThree: false
    };
  }

  public render() {
    return (
      <div className="App" style={{ paddingBottom: "30px" }}>
        <Header />
        <div style={{ width: "70%", margin: "auto" }}>
          {this.state.index == 1 && <Form1 previousQuestion={this.previousQuestion} questionAnswerYes={this.questionAnswerYes} questionAnswerNo={this.questionAnswerNo} getQuestionIndex={this.getQuestionIndex} getPhase={this.getPhase} setPhase={this.setPhase} />}
          {this.state.index == 2 && <Form2 />}
          {this.state.index == 3 && <Form3 />}
          {this.state.index == 4 && <Form4 />}
          {this.state.index == 5 && <Form5 />}
          {this.state.index == 6 && <Form6 />}
          {this.state.index == 7 && <Form7 />}
          <div className="App container">
            <a className="a-btn cta .m-text" onClick={() => { this.previousClicked() }} style={{ float: "left", padding: "0px 20px 0px 20px" }}>Previous</a>
            <a className="a-btn cta .m-text" onClick={() => { this.nextClicked() }} style={{ float: "right", padding: "0px 45px 0px 45px" }}>Next</a>
          </div>
        </div>
      </div>
    );
  }

  private getQuestionIndex() {
    return this.state.syvKjappeIndex
  }

  private getPhase() {
    return this.state.phase
  }

  private setPhase(phase: number) {
    this.setState({
      phase: number
    });
  }

  private questionAnswerYes() {
    this.setState((prevState: { syvKjappeIndex: number; }) => {
      if (this.state.phase == 0 && prevState.syvKjappeIndex == 6)
        return { syvKjappeIndex: prevState.syvKjappeIndex + 1, phase: 4 }
      else
        return { syvKjappeIndex: prevState.syvKjappeIndex + 1 }
    })
  }

  // private questionAnswerYes() {
  //   this.setState((prevState: { syvKjappeIndex: number; }) => {
  //     console.log(prevState.syvKjappeIndex);
  //     if (prevState.syvKjappeIndex != 7)
  //       return { syvKjappeIndex: prevState.syvKjappeIndex + 1 }
  //     else
  //       return { syvKjappeIndex: prevState.syvKjappeIndex }
  //   })
  // }

  private questionAnswerNo() {
    this.setState((prevState: { syvKjappeIndex: number; }) => {
      if (this.state.phase == 0 && prevState.syvKjappeIndex == 4)
        return { syvKjappeIndex: prevState.syvKjappeIndex + 1, phase: 1 }
      else if (this.state.phase == 0 && prevState.syvKjappeIndex == 5)
        return { syvKjappeIndex: prevState.syvKjappeIndex + 1, phase: 2 }
      else if (this.state.phase == 0 && prevState.syvKjappeIndex == 6)
        return { syvKjappeIndex: prevState.syvKjappeIndex + 1, phase: 3 }
      else
        return { syvKjappeIndex: prevState.syvKjappeIndex + 1 }
    })
  }

  // private questionAnswerNo() {
  //   this.setState((prevState: { syvKjappeIndex: number; }) => {
  //     console.log(prevState.syvKjappeIndex);
  //     if (prevState.syvKjappeIndex != 7)
  //       return { syvKjappeIndex: prevState.syvKjappeIndex + 1 }
  //     else
  //       return { syvKjappeIndex: prevState.syvKjappeIndex }
  //   })
  // }

  private previousQuestion() {
    this.setState((prevState: { syvKjappeIndex: number; }) => {
      console.log(prevState.syvKjappeIndex);
      if (this.state.phase == 1 && prevState.syvKjappeIndex == 5)
        return { syvKjappeIndex: prevState.syvKjappeIndex - 1, phase: 0 }
      else if (this.state.phase == 2 && prevState.syvKjappeIndex == 6)
        return { syvKjappeIndex: prevState.syvKjappeIndex - 1, phase: 0 }
      else if (this.state.phase == 3 && prevState.syvKjappeIndex == 7)
        return { syvKjappeIndex: prevState.syvKjappeIndex - 1, phase: 0 }
      else if (this.state.phase == 4 && prevState.syvKjappeIndex == 7) {
        return { syvKjappeIndex: prevState.syvKjappeIndex - 1, phase: 0 }
      }
      else
        return { syvKjappeIndex: prevState.syvKjappeIndex -1}
    })
  }

  private previousClicked() {
    this.setState((prevState: { index: number; }) => {
      console.log(prevState.index);
      if (prevState.index != 1)
        return { index: prevState.index - 1 }
      else
        return { index: prevState.index }
    })
  }

  private nextClicked() {
    this.setState((prevState: { index: number; }) => {
      console.log(prevState.index);
      if (prevState.index != 7)
        return { index: prevState.index + 1 }
      else
        return { index: prevState.index }
    })
  }
}