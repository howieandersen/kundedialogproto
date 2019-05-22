import * as React from 'react';
import '../style.css'
import '../App.css';

export default class Form1 extends React.Component<any, any>{
    
  constructor(props: any) {
    super(props);

    this.state = { 
        questionOne: "Gjelder dette en eller flere av disse næringene? (Jordbruk, Skogbruk, Reinsdrift)",
        questionTwo: "Ønsker du å utvikle et reisemål i Norge (opplevelse, mat, losji, e.l.?)",
        questionThree: "Har du gjort ferdig en grundig beskrivelse av prosjektet ditt for å få til et nytt produkt, en ny tjeneste, eller en ny måte å gjøre ting på?",
        questionFour: "Er du så godt i gang med kundeprosjektet at du selger godt i ditt valgte marked?",
        questionFourIfNo: "Har du fått bekreftet behov for ideen din blant minst fem mulige kunder?",
        questionFive: "Gjelder dette en eller flere av disse næringene? (Jordbruk, Skogbruk, Reinsdrift)",
        questionSix: "Gjelder dette en eller flere av disse næringene? (Jordbruk, Skogbruk, Reinsdrift)",
        questionSeven: "Gjelder dette en eller flere av disse næringene? (Jordbruk, Skogbruk, Reinsdrift)",
    };
  }


    public render() {
        return (
            <div className="container">
                <form role="form" className="o-form bgWhite">
                    <div className="o-form__inner">
                        <div className="m-form__group">
                        {this.props.getQuestionIndex() <= 2 && <label className="a-label">Innledende spørsmål</label>}
                        {this.props.getQuestionIndex() >= 3 && this.props.getPhase() == 0 && <label className="a-label">Identifisere fase</label>}
                        {this.props.getQuestionIndex() >= 5 && this.props.getPhase() == 1 && <label className="a-label">Identifisere problemer for prefase</label>}
                        {this.props.getQuestionIndex() >= 6 && this.props.getPhase() == 2 && <label className="a-label">Identifisere problemer for tidlig fase</label>}
                        {this.props.getQuestionIndex() >= 7 && this.props.getPhase() == 3 && <label className="a-label">Identifisere problemer for operasjonell fase</label>}
                        {this.props.getQuestionIndex() >= 7 && this.props.getPhase() == 4 && <label className="a-label">Identifisere problemer for vekstfase</label>}
                            <div className="wrapper-class">
                                <span className="a-input__help">
                                    {this.props.getQuestionIndex() <= 2 && <p>Innovasjon Norge leverer mer enn bare tilskudd og lån. Vi har mange kunderådgivere som kan hjelpe deg og din bedrift med ulike kompetansetjenester. Svar på spørsmålene under for å finne ut hvordan vi kan hjelpe deg på mest mulig måte.</p>}
                        {this.props.getQuestionIndex() >= 3 && this.props.getPhase() == 0 && <p>Her identifiserer vi fase</p>}
                        {this.props.getQuestionIndex() >= 5 && this.props.getPhase() == 1 && <p>Her identifiserer vi problemene for prefase</p>}
                        {this.props.getQuestionIndex() >= 6 && this.props.getPhase() == 2 && <p>Her identifiserer vi problemene for tidlig fase</p>}
                        {this.props.getQuestionIndex() >= 7 && this.props.getPhase() == 3 && <p>Her identifiserer vi problemene for operasjonell fase</p>}
                        {this.props.getQuestionIndex() >= 7 && this.props.getPhase() == 4 && <p>Her identifiserer vi problemene for vekstfase</p>}
                                </span>
                                <hr />
                                <div className="App container" style={{ padding: "0px 20% 0px 20%"}}>
                                {this.props.getQuestionIndex() == 1 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.questionOne}</label>}
                                {this.props.getQuestionIndex() == 2 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.questionTwo}</label>}
                                {this.props.getQuestionIndex() == 3 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.questionThree}</label>}
                                {this.props.getQuestionIndex() == 4 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.questionFour}</label>}
                                </div>
                                <div className="App container" style={{ padding: "0px 20% 0px 20%", textAlign: "center",  margin: "auto"}}>
                                    <a className="a-btn border" onClick = {this.props.questionAnswerNo} style={{ float: "left", padding: "0px 45px 0px 45px" }}>Nei</a>
                                    {this.props.getQuestionIndex() > 1 && <a className="a-btn small" onClick = {this.props.previousQuestion} style={{margin: "4px 0px 4px 0px"}}>Tilbake</a>}
                                    <a className="a-btn border" onClick = {this.props.questionAnswerYes} style={{ float: "right", padding: "0px 48px 0px 48px" }}>Ja</a>
                                </div>
                                <div className="App container" style={{ padding: "0px 20% 0px 20%", textAlign: "center", margin: "auto"}}>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
