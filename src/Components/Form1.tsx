import * as React from 'react';
import '../style.css'
import '../App.css';

export default class Form1 extends React.Component<any, any>{

    constructor(props: any) {
        super(props);

        this.state = {
            introQuestionOneQ: "Gjelder dette en eller flere av disse næringene? (Jordbruk, Skogbruk, Reinsdrift)",
            introQuestionTwoQ: "Ønsker du å utvikle et reisemål i Norge (opplevelse, mat, losji, e.l.?)",

            phaseIdQuestionOneQ: "Har du gjort ferdig en grundig beskrivelse av prosjektet ditt for å få til et nytt produkt, en ny tjeneste, eller en ny måte å gjøre ting på?",
            phaseIdQuestionTwoQ: "Har du på funnet ut om prosjektet ditt er teknisk mulig OG har interesserte kjøpere i markedet?",
            phaseIdQuestionThreeQ: "Er du så godt i gang med kundeprosjektet at du selger godt i ditt valgte marked?",
            phaseIdQuestionFourQ: "Ser du etter muligheter til å utvide i helt nye markeder?",

            prePhaseQuestionOneQ: "Har du fått bekreftet behov for ideen din blant minst fem mulige kunder?",
            prePhaseQuestionTwoQ: "Har du satt opp en organisasjon som kan ta prosjektet ditt videre de neste seks månedene?",
            prePhaseQuestionThreeQ: "Sliter du med å finansiere det første trinnet i ideen din?",

            earlyPhaseQuestionOneQ: "Har du penger til å finansiere de neste nødvendige tiltakene for prosjektet?",
            earlyPhaseQuestionTwoQ: "Vil du ha nytte av å samarbeide med andre som har de samme utfordringene som deg?",

            operationalPhaseQuestionOneQ: "Ønsker du å bygge kompetanse i avgjørende områder?",
            operationalPhaseQuestionTwoQ: "Har du ambisjoner om å gå inn i et nytt marked?",
            operationalPhaseQuestionThreeQ: "Vil du ha nytte av å samarbeide med andre som har de samme utfordringene som deg?",
            operationalPhaseQuestionFourQ: "Leter du etter en partner for samarbeid på et bestemt område?",

            growthPhaseQuestionOneQ: "Ønsker du å bygge kompetanse i avgjørende områder?",
            growthPhaseQuestionTwoQ: "Ser du gode muligheter for å vokse deg større i markeder du allerede er i?",
            growthPhaseQuestionThreeQ: "Vil du vokse fortere hvis merkevaren din er bedre kjent i markedet du tar sikte på?",
            growthPhaseQuestionFourQ: "Ønsker du å tiltrekke deg turister?"
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
                                    {this.props.getQuestionIndex() == 1 && this.props.getPhase() == 0 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.introQuestionOneQ}</label>}
                                    {this.props.getQuestionIndex() == 2 && this.props.getPhase() == 0 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.introQuestionTwoQ}</label>}

                                    {this.props.getQuestionIndex() == 3 && this.props.getPhase() == 0 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.phaseIdQuestionOneQ}</label>}
                                    {this.props.getQuestionIndex() == 4 && this.props.getPhase() == 0 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.phaseIdQuestionTwoQ}</label>}
                                    {this.props.getQuestionIndex() == 5 && this.props.getPhase() == 0 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.phaseIdQuestionThreeQ}</label>}
                                    {this.props.getQuestionIndex() == 6 && this.props.getPhase() == 0 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.phaseIdQuestionFour}</label>}

                                    {this.props.getQuestionIndex() == 5 && this.props.getPhase() == 1 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.prePhaseQuestionOneQ}</label>}
                                    {this.props.getQuestionIndex() == 6 && this.props.getPhase() == 1 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.prePhaseQuestionTwoQ}</label>}
                                    {this.props.getQuestionIndex() == 7 && this.props.getPhase() == 1 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.prePhaseQuestionThreeQ}</label>}

                                    {this.props.getQuestionIndex() == 6 && this.props.getPhase() == 2 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.earlyPhaseQuestionOneQ}</label>}
                                    {this.props.getQuestionIndex() == 7 && this.props.getPhase() == 2 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.earlyPhaseQuestionTwoQ}</label>}

                                    {this.props.getQuestionIndex() == 7 && this.props.getPhase() == 3 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.operationalPhaseQuestionOneQ}</label>}
                                    {this.props.getQuestionIndex() == 8 && this.props.getPhase() == 3 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.operationalPhaseQuestionTwoQ}</label>}
                                    {this.props.getQuestionIndex() == 9 && this.props.getPhase() == 3 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.operationalPhaseQuestionThreeQ}</label>}
                                    {this.props.getQuestionIndex() == 10 && this.props.getPhase() == 3 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.operationalPhaseQuestionFourQ}</label>}

                                    {this.props.getQuestionIndex() == 7 && this.props.getPhase() == 4 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.growthPhaseQuestionOneQ}</label>}
                                    {this.props.getQuestionIndex() == 8 && this.props.getPhase() == 4 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.growthPhaseQuestionTwoQ}</label>}
                                    {this.props.getQuestionIndex() == 9 && this.props.getPhase() == 4 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.growthPhaseQuestionThreeQ}</label>}
                                    {this.props.getQuestionIndex() == 10 && this.props.getPhase() == 4 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.growthPhaseQuestionFourQ}</label>}
                                </div>
                                <div className="App container" style={{ padding: "0px 20% 0px 20%", textAlign: "center", margin: "auto" }}>
                                    {!this.props.getSyvKjappeFerdig() && <a className="a-btn border" onClick={this.props.questionAnswerNo} style={{ float: "left", padding: "0px 45px 0px 45px", border: "outset" }}>Nei</a>}
                                    {this.props.getQuestionIndex() > 1 && <a className="a-btn small" onClick={this.props.previousQuestion} style={{ margin: "5px 0px 5px 0px" }}>Tilbake</a>}
                                    {!this.props.getSyvKjappeFerdig() && <a className="a-btn border" onClick={this.props.questionAnswerYes} style={{ float: "right", padding: "0px 48px 0px 48px", border: "outset" }}>Ja</a>}
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
