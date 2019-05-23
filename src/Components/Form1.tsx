import * as React from 'react';
import '../style.css'
import '../App.css';

export default class Form1 extends React.Component<any, any>{

    constructor(props: any) {
        super(props);

        this.state = {
            introQuestionOne: "Gjelder dette en eller flere av disse næringene? (Jordbruk, Skogbruk, Reinsdrift)",
            introQuestionTwo: "Ønsker du å utvikle et reisemål i Norge (opplevelse, mat, losji, e.l.?)",

            phaseIdQuestionOne: "Har du gjort ferdig en grundig beskrivelse av prosjektet ditt for å få til et nytt produkt, en ny tjeneste, eller en ny måte å gjøre ting på?",
            phaseIdQuestionTwo: "Har du på funnet ut om prosjektet ditt er teknisk mulig OG har interesserte kjøpere i markedet?",
            phaseIdQuestionThree: "Er du så godt i gang med kundeprosjektet at du selger godt i ditt valgte marked?",
            phaseIdQuestionFour: "Ser du etter muligheter til å utvide i helt nye markeder?",

            prePhaseQuestionOne: "Har du fått bekreftet behov for ideen din blant minst fem mulige kunder?",
            prePhaseQuestionTwo: "Har du satt opp en organisasjon som kan ta prosjektet ditt videre de neste seks månedene?",
            prePhaseQuestionThree: "Sliter du med å finansiere det første trinnet i ideen din?",

            earlyPhaseQuestionOne: "Har du penger til å finansiere de neste nødvendige tiltakene for prosjektet?",
            earlyPhaseQuestionTwo: "Vil du ha nytte av å samarbeide med andre som har de samme utfordringene som deg?",

            operationalPhaseQuestionOne: "Ønsker du å bygge kompetanse i avgjørende områder?",
            operationalPhaseQuestionTwo: "Har du ambisjoner om å gå inn i et nytt marked?",
            operationalPhaseQuestionThree: "Vil du ha nytte av å samarbeide med andre som har de samme utfordringene som deg?",
            operationalPhaseQuestionFour: "Leter du etter en partner for samarbeid på et bestemt område?",

            growthPhaseQuestionOne: "Ønsker du å bygge kompetanse i avgjørende områder?",
            growthPhaseQuestionTwo: "Ser du gode muligheter for å vokse deg større i markeder du allerede er i?",
            growthPhaseQuestionThree: "Vil du vokse fortere hvis merkevaren din er bedre kjent i markedet du tar sikte på?",
            growthPhaseQuestionFour: "Ønsker du å tiltrekke deg turister?"
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
                                    {this.props.getQuestionIndex() > 2 && this.props.getPhase() == 0 && <p>Her identifiserer vi fase</p>}
                                    {this.props.getQuestionIndex() >= 5 && this.props.getPhase() == 1 && <p>Her identifiserer vi problemer for prefase</p>}
                                    {this.props.getQuestionIndex() >= 6 && this.props.getPhase() == 2 && <p>Her identifiserer vi problemer for tidlig fase</p>}
                                    {this.props.getQuestionIndex() >= 7 && this.props.getPhase() == 3 && <p>Her identifiserer vi problemer for operasjonell fase</p>}
                                    {this.props.getQuestionIndex() >= 7 && this.props.getPhase() == 4 && <p>Her identifiserer vi problemer for vekstfase</p>}
                                </span>
                                <hr />
                                <div className="App container" style={{ padding: "0px 20% 0px 20%" }}>
                                    {this.props.getSyvKjappeFerdig() && <label className="a-label" style={{ textAlign: "center" }}>Ferdig</label>}
                                    {this.props.getQuestionIndex() == 1 && this.props.getPhase() == 0 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.introQuestionOne}</label>}
                                    {this.props.getQuestionIndex() == 2 && this.props.getPhase() == 0 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.introQuestionTwo}</label>}

                                    {this.props.getQuestionIndex() == 3 && this.props.getPhase() == 0 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.phaseIdQuestionOne}</label>}
                                    {this.props.getQuestionIndex() == 4 && this.props.getPhase() == 0 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.phaseIdQuestionTwo}</label>}
                                    {this.props.getQuestionIndex() == 5 && this.props.getPhase() == 0 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.phaseIdQuestionThree}</label>}
                                    {this.props.getQuestionIndex() == 6 && this.props.getPhase() == 0 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.phaseIdQuestionFour}</label>}

                                    {this.props.getQuestionIndex() == 5 && this.props.getPhase() == 1 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.prePhaseQuestionOne}</label>}
                                    {this.props.getQuestionIndex() == 6 && this.props.getPhase() == 1 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.prePhaseQuestionTwo}</label>}
                                    {this.props.getQuestionIndex() == 7 && this.props.getPhase() == 1 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.prePhaseQuestionThree}</label>}

                                    {this.props.getQuestionIndex() == 6 && this.props.getPhase() == 2 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.earlyPhaseQuestionOne}</label>}
                                    {this.props.getQuestionIndex() == 7 && this.props.getPhase() == 2 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.earlyPhaseQuestionTwo}</label>}

                                    {this.props.getQuestionIndex() == 7 && this.props.getPhase() == 3 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.operationalPhaseQuestionOne}</label>}
                                    {this.props.getQuestionIndex() == 8 && this.props.getPhase() == 3 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.operationalPhaseQuestionTwo}</label>}
                                    {this.props.getQuestionIndex() == 9 && this.props.getPhase() == 3 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.operationalPhaseQuestionThree}</label>}
                                    {this.props.getQuestionIndex() == 10 && this.props.getPhase() == 3 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.operationalPhaseQuestionFour}</label>}

                                    {this.props.getQuestionIndex() == 7 && this.props.getPhase() == 4 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.growthPhaseQuestionOne}</label>}
                                    {this.props.getQuestionIndex() == 8 && this.props.getPhase() == 4 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.growthPhaseQuestionTwo}</label>}
                                    {this.props.getQuestionIndex() == 9 && this.props.getPhase() == 4 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.growthPhaseQuestionThree}</label>}
                                    {this.props.getQuestionIndex() == 10 && this.props.getPhase() == 4 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.growthPhaseQuestionFour}</label>}
                                </div>
                                <div className="App container" style={{ padding: "0px 20% 0px 20%", textAlign: "center", margin: "auto" }}>
                                    {!this.props.getSyvKjappeFerdig() && <a className="a-btn border" onClick={this.props.questionAnswerNo} style={{ float: "left", padding: "0px 45px 0px 45px" }}>Nei</a>}
                                    {this.props.getQuestionIndex() > 1 && <a className="a-btn small" onClick={this.props.previousQuestion} style={{ margin: "4px 0px 4px 0px" }}>Tilbake</a>}
                                    {!this.props.getSyvKjappeFerdig() && <a className="a-btn border" onClick={this.props.questionAnswerYes} style={{ float: "right", padding: "0px 48px 0px 48px" }}>Ja</a>}
                                </div>
                                <div className="App container" style={{ padding: "0px 20% 0px 20%", textAlign: "center", margin: "auto" }}>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
