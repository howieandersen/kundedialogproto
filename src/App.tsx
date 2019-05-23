import * as React from 'react';
import Header from "./Components/Header";
import Form1 from "./Components/Form1";
import Form2 from "./Components/Form2";
import Form3 from "./Components/Form3";
import Form4 from "./Components/Form4";
import Form5 from "./Components/Form5";
import Form6 from "./Components/Form6";
import Form7 from "./Components/Form7";
import Pagination from "./Components/Pagination";
import { number, string } from 'prop-types';
import './App.css';

export default class App extends React.Component<any, any>{
  constructor(props: any) {
    super(props);

    this.questionAnswerYes = this.questionAnswerYes.bind(this);
    this.questionAnswerNo = this.questionAnswerNo.bind(this);
    this.previousQuestion = this.previousQuestion.bind(this);
    this.nextClicked = this.nextClicked.bind(this);
    this.previousClicked = this.previousClicked.bind(this);
    this.getQuestionIndex = this.getQuestionIndex.bind(this);
    this.getIndex = this.getIndex.bind(this);
    this.setIndex = this.setIndex.bind(this);
    this.getPhase = this.getPhase.bind(this);
    this.setPhase = this.setPhase.bind(this);
    this.setAnswer = this.setAnswer.bind(this);
    this.setTitle = this.setTitle.bind(this);
    this.getSyvKjappeFerdig = this.getSyvKjappeFerdig.bind(this);

    this.state = {
      index: 1,
      syvKjappeIndex: 1,
      syvKjappeFerdig: false, // This becomes true when there are no questions left for the user to answer
      phase: 0, // 0 = innledende spørsmål & velge fase, 1 = prephase, 2 = early phase, 3 = operational phase, 4 = growth phase

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
      growthPhaseQuestionThree: false,
      growthPhaseQuestionFour: false,

      title: string,
      ideenEr: string,
      somSkalLose: string,
      for: string,
      ambisjon: string,
      behov: string,
      team: string,
    };
  }

  public render() {
    return (
      <div className="App" style={{ paddingBottom: "30px" }}>
        <Header />
        <div style={{ width: "40%", minWidth: "800px", margin: "auto" }}>
          {this.state.index == 1 && <Form1 previousQuestion={this.previousQuestion} questionAnswerYes={this.questionAnswerYes} questionAnswerNo={this.questionAnswerNo} getQuestionIndex={this.getQuestionIndex} getPhase={this.getPhase} setPhase={this.setPhase} getSyvKjappeFerdig={this.getSyvKjappeFerdig} />}
          {this.state.index == 2 && <Form2 setTitle={this.setTitle} title={this.state.title}/>}
          {this.state.index == 3 && <Form3 />}
          {this.state.index == 4 && <Form4 />}
          {this.state.index == 5 && <Form5 />}
          {this.state.index == 6 && <Form6 />}
          {this.state.index == 7 && <Form7 />}
          <div className="App container">
            <a className="a-btn cta .m-text" onClick={() => { this.previousClicked() }} style={{ float: "left", padding: "0px 20px 0px 20px" }}>Previous</a>
            <a className="a-btn cta .m-text" onClick={() => { this.nextClicked() }} style={{ float: "right", padding: "0px 45px 0px 45px" }}>Next</a>
          </div>
          <div className={"pagination"} style={{display: "inline-block", textAlign: "center", width: "98%", position: "absolute", right: "1.3%"}}>
            <div style={{ textAlign: "center", display: "inline-block" }}>
              <Pagination style={{ textAlign: "center", display: "inline-block", position: "sticky"}} getIndex={this.getIndex} setIndex={this.setIndex} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  private getQuestionIndex() {
    return this.state.syvKjappeIndex
  }

  private getIndex() {
    return this.state.index
  }

  private setIndex(targetPage: number) {
    this.setState({index: targetPage})
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
    this.setAnswer(true)

    this.setState((prevState: { syvKjappeIndex: number; }) => {
      if (this.state.phase == 0 && prevState.syvKjappeIndex == 6)
        return { syvKjappeIndex: prevState.syvKjappeIndex + 1, phase: 4 }
      else
        return { syvKjappeIndex: prevState.syvKjappeIndex + 1 }
    })
  }

  private questionAnswerNo() {
    this.setAnswer(false)

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

  // title: string,
  // ideenEr: string,
  // somSkalLose: string,
  // for: string,
  // ambisjon: string,
  // behov: string,
  // team: string,

  private setTitle(newTitle: string) {
    this.setState({title: newTitle})
  }

  private previousQuestion() {
    this.setAnswer(false)

    this.setState((prevState: { syvKjappeIndex: number; }) => {
      if (this.state.phase == 1 && prevState.syvKjappeIndex == 5)
        return { syvKjappeIndex: prevState.syvKjappeIndex - 1, phase: 0 }
      else if (this.state.phase == 2 && prevState.syvKjappeIndex == 6)
        return { syvKjappeIndex: prevState.syvKjappeIndex - 1, phase: 0 }
      else if (this.state.phase == 3 && prevState.syvKjappeIndex == 7)
        return { syvKjappeIndex: prevState.syvKjappeIndex - 1, phase: 0 }
      else if (this.state.phase == 4 && prevState.syvKjappeIndex == 7)
        return { syvKjappeIndex: prevState.syvKjappeIndex - 1, phase: 0 }
      else
        return { syvKjappeIndex: prevState.syvKjappeIndex - 1, syvKjappeFerdig: false }
    })
  }

  private previousClicked() {
    this.setState((prevState: { index: number; }) => {
      if (prevState.index != 1)
        return { index: prevState.index - 1 }
      else
        return { index: prevState.index }
    })
  }

  private nextClicked() {
    this.setState((prevState: { index: number; }) => {
      if (prevState.index != 7)
        return { index: prevState.index + 1 }
      else
        return { index: prevState.index }
    })
  }

  private getSyvKjappeFerdig() {
    return this.state.syvKjappeFerdig
  }

  private setAnswer(answer: boolean) {
    if (this.state.syvKjappeIndex == 1)
      this.setState({ introQuestionOne: answer })
    else if (this.state.syvKjappeIndex == 2)
      this.setState({ introQuestionTwo: answer })

    else if (this.state.syvKjappeIndex == 3)
      this.setState({ phaseIdQuestionOne: answer })
    else if (this.state.syvKjappeIndex == 4)
      this.setState({ phaseIdQuestionTwo: answer })
    else if (this.state.syvKjappeIndex == 5 && this.state.phase == 0)
      this.setState({ phaseIdQuestionThree: answer })
    else if (this.state.syvKjappeIndex == 6 && this.state.phase == 0)
      this.setState({ phaseIdQuestionFour: answer })

    else if (this.state.syvKjappeIndex == 5 && this.state.phase == 1)
      this.setState({ prePhaseQuestionOne: answer })
    else if (this.state.syvKjappeIndex == 6 && this.state.phase == 1)
      this.setState({ prePhaseQuestionTwo: answer })
    else if (this.state.syvKjappeIndex == 7 && this.state.phase == 1)
      this.setState({ prePhaseQuestionThree: answer, syvKjappeFerdig: true })

    else if (this.state.syvKjappeIndex == 6 && this.state.phase == 2)
      this.setState({ earlyPhaseQuestionOne: answer })
    else if (this.state.syvKjappeIndex == 7 && this.state.phase == 2)
      this.setState({ earlyPhaseQuestionTwo: answer, syvKjappeFerdig: true })

    else if (this.state.syvKjappeIndex == 7 && this.state.phase == 3)
      this.setState({ operationalPhaseQuestionOne: answer })
    else if (this.state.syvKjappeIndex == 8 && this.state.phase == 3)
      this.setState({ operationalPhaseQuestionTwo: answer })
    else if (this.state.syvKjappeIndex == 9 && this.state.phase == 3)
      this.setState({ operationalPhaseQuestionThree: answer })
    else if (this.state.syvKjappeIndex == 10 && this.state.phase == 3)
      this.setState({ operationalPhaseQuestionFour: answer, syvKjappeFerdig: true })

    else if (this.state.syvKjappeIndex == 7 && this.state.phase == 4)
      this.setState({ growthPhaseQuestionOne: answer })
    else if (this.state.syvKjappeIndex == 8 && this.state.phase == 4)
      this.setState({ growthPhaseQuestionTwo: answer })
    else if (this.state.syvKjappeIndex == 9 && this.state.phase == 4)
      this.setState({ growthPhaseQuestionThree: answer })
    else if (this.state.syvKjappeIndex == 10 && this.state.phase == 4)
      this.setState({ growthPhaseQuestionFour: answer, syvKjappeFerdig: true })
  }
}