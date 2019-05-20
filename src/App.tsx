import * as React from 'react';
import Header from "./Components/Header";
import Form1 from "./Components/Form1";
import Form2 from "./Components/Form2";
import Form3 from "./Components/Form3";
import Form4 from "./Components/Form4";
import Form5 from "./Components/Form5";
import Form6 from "./Components/Form6";
import Form7 from "./Components/Form7";

export default class App extends React.Component<any, any>{
  constructor(props: any) {
    super(props);

    this.nextQuestion = this.nextQuestion.bind(this);
    this.previousQuestion = this.previousQuestion.bind(this);
    this.nextClicked = this.nextClicked.bind(this);
    this.previousClicked = this.previousClicked.bind(this);

    this.state = {
      index: 1,
      syvKjappeIndex: 1
    };
  }

  public render() {
    return (
      <div className="App" style={{ paddingBottom: "30px" }}>
        <Header />
        {this.state.index == 1 && <Form1 previousQuestion = {this.previousQuestion} nextQuestion = {this.nextQuestion}/>}
        {this.state.index == 2 && <Form2 />}
        {this.state.index == 3 && <Form3 />}
        {this.state.index == 4 && <Form4 />}
        {this.state.index == 5 && <Form5 />}
        {this.state.index == 6 && <Form6 />}
        {this.state.index == 7 && <Form7 />}
        <div className="App container ">
          <a className="a-btn cta .m-text" onClick={() => { this.previousClicked() }} style={{ float: "left", padding: "0px 20px 0px 20px" }}>Previous</a>
          <a className="a-btn cta .m-text" onClick={() => { this.nextClicked() }} style={{ float: "right", padding: "0px 45px 0px 45px" }}>Next</a>
        </div>
      </div>
    );
  }

  private nextQuestion() {
    this.setState((prevState: { syvKjappeIndex: number; }) => {
      console.log(prevState.syvKjappeIndex);
      if (prevState.syvKjappeIndex != 7)
        return { syvKjappeIndex: prevState.syvKjappeIndex + 1 }
      else
        return { syvKjappeIndex: prevState.syvKjappeIndex }
    })
  }

  private previousQuestion() {
    this.setState((prevState: { syvKjappeIndex: number; }) => {
      console.log(prevState.syvKjappeIndex);
      if (prevState.syvKjappeIndex != 1)
        return { syvKjappeIndex: prevState.syvKjappeIndex - 1 }
      else
        return { syvKjappeIndex: prevState.syvKjappeIndex }
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