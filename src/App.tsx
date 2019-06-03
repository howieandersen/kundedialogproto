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
    this.getSyvKjappeFerdig = this.getSyvKjappeFerdig.bind(this);
    this.getIndex = this.getIndex.bind(this);
    this.setIndex = this.setIndex.bind(this);
    this.getPhase = this.getPhase.bind(this);
    this.setPhase = this.setPhase.bind(this);
    this.setAnswer = this.setAnswer.bind(this);
    this.settitle = this.settitle.bind(this);


    this.settitle = this.settitle.bind(this);
    this.setideenEr = this.setideenEr.bind(this);
    this.setsomSkalLose = this.setsomSkalLose.bind(this);
    this.setfor = this.setfor.bind(this);


    this.componentForm4DidMount = this.componentForm4DidMount.bind(this)
    this.setLocalAdviserName = this.setLocalAdviserName.bind(this)
    this.setAdviser = this.setAdviser.bind(this);
    this.setTopicOne = this.setTopicOne.bind(this);
    this.setTopicTwo = this.setTopicTwo.bind(this);
    this.setTopicThree = this.setTopicThree.bind(this);
    this.setTopicFour = this.setTopicFour.bind(this);
    this.setTopicFive = this.setTopicFive.bind(this);
    this.setTopicSix = this.setTopicSix.bind(this);
    this.setTopicSeven = this.setTopicSeven.bind(this);

    this.setAnnetFalse = this.setAnnetFalse.bind(this);
    this.setAnnetTrue = this.setAnnetTrue.bind(this);
    this.setdiskuterekompetanse = this.setdiskuterekompetanse.bind(this);
    this.setdiskutereadvice = this.setdiskutereadvice.bind(this);
    this.setdiskuterenettverk = this.setdiskuterenettverk.bind(this);
    this.setdiskuterfinansiering = this.setdiskuterfinansiering.bind(this);
    this.setdiskuterannet = this.setdiskuterannet.bind(this);

    this.trykksendinn = this.trykksendinn.bind(this);

    this.state = {
      index: 1, //This indicates which Form (which step) component the user is currently looking at
      syvKjappeIndex: 1, // This indicates which question the user is currently viewing in Form1 (Innledende spørsmål)
      syvKjappeFerdig: false, // This becomes true when there are no questions left for the user to answer
      phase: 0, // 0 = innledende spørsmål & velge fase, 1 = prephase, 2 = early phase, 3 = operational phase, 4 = growth phase

      // Form1
      QintroQuestionOneQ: "Gjelder dette en eller flere av disse næringene? (Jordbruk, Skogbruk, Reinsdrift)",
      QintroQuestionTwoQ: "Ønsker du å utvikle et reisemål i Norge (opplevelse, mat, losji, e.l.?)",

      QphaseIdQuestionOneQ: "Har du gjort ferdig en grundig beskrivelse av prosjektet ditt for å få til et nytt produkt, en ny tjeneste, eller en ny måte å gjøre ting på?",
      QphaseIdQuestionTwoQ: "Har du på funnet ut om prosjektet ditt er teknisk mulig OG har interesserte kjøpere i markedet?",
      QphaseIdQuestionThreeQ: "Er du så godt i gang med kundeprosjektet at du selger godt i ditt valgte marked?",
      QphaseIdQuestionFourQ: "Ser du etter muligheter til å utvide i helt nye markeder?",

      QprePhaseQuestionOneQ: "Har du fått bekreftet behov for ideen din blant minst fem mulige kunder?",
      QprePhaseQuestionTwoQ: "Har du satt opp en organisasjon som kan ta prosjektet ditt videre de neste seks månedene?",
      QprePhaseQuestionThreeQ: "Sliter du med å finansiere det første trinnet i ideen din?",

      QearlyPhaseQuestionOneQ: "Har du penger til å finansiere de neste nødvendige tiltakene for prosjektet?",
      QearlyPhaseQuestionTwoQ: "Vil du ha nytte av å samarbeide med andre som har de samme utfordringene som deg?",

      QoperationalPhaseQuestionOneQ: "Ønsker du å bygge kompetanse i avgjørende områder?",
      QoperationalPhaseQuestionTwoQ: "Har du ambisjoner om å gå inn i et nytt marked?",
      QoperationalPhaseQuestionThreeQ: "Vil du ha nytte av å samarbeide med andre som har de samme utfordringene som deg?",
      QoperationalPhaseQuestionFourQ: "Leter du etter en partner for samarbeid på et bestemt område?",

      QgrowthPhaseQuestionOneQ: "Ønsker du å bygge kompetanse i avgjørende områder?",
      QgrowthPhaseQuestionTwoQ: "Ser du gode muligheter for å vokse deg større i markeder du allerede er i?",
      QgrowthPhaseQuestionThreeQ: "Vil du vokse fortere hvis merkevaren din er bedre kjent i markedet du tar sikte på?",
      QgrowthPhaseQuestionFourQ: "Ønsker du å tiltrekke deg turister?",

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

      // Form2
      title: string,
      ideenEr: string,
      somSkalLose: string,
      for: string,

      // Form4
      adviser: string,
      topicOne: false,
      topicTwo: false,
      topicThree: false,
      topicFour: false,
      topicFive: false,
      topicSix: false,
      topicSeven: false,
      localTitle: 'Navn på ønsket rådgiver',
      localAdviserName: this.props.adviser,

      // Form5
      annet: false,
      diskuter: "",
      diskuterekompetanse: false,
      diskutereadvice: false,
      diskuterenettverk: false,
      finansiering: false,
      diskuterannet: "",


      // Form6
      when: "",
      how: "",

      // Form7
      sendinn: false,
    };
  }

  public render() {
    return (
      <div className="App" style={{ paddingBottom: "30px" }}>
        <Header />
        <div style={{ width: "40%", minWidth: "800px", margin: "auto" }}>
          {this.state.index == 1 && // FORM 1 BEGINS HERE
            <div className="container">
              <form role="form" className="o-form bgWhite">
                <div className="o-form__inner">
                  <div className="m-form__group">
                    {this.getQuestionIndex() <= 2 && <label className="a-label">Innledende spørsmål</label>}
                    {this.getQuestionIndex() >= 3 && this.getPhase() == 0 && <label className="a-label">Identifisere fase</label>}
                    {this.getQuestionIndex() >= 5 && this.getPhase() == 1 && <label className="a-label">Identifisere problemer for prefase</label>}
                    {this.getQuestionIndex() >= 6 && this.getPhase() == 2 && <label className="a-label">Identifisere problemer for tidlig fase</label>}
                    {this.getQuestionIndex() >= 7 && this.getPhase() == 3 && <label className="a-label">Identifisere problemer for operasjonell fase</label>}
                    {this.getQuestionIndex() >= 7 && this.getPhase() == 4 && <label className="a-label">Identifisere problemer for vekstfase</label>}
                    <div className="wrapper-class">
                      <span className="a-input__help">
                        {this.getQuestionIndex() <= 2 && <p>Innovasjon Norge leverer mer enn bare tilskudd og lån. Vi har mange kunderådgivere som kan hjelpe deg og din bedrift med ulike kompetansetjenester. Svar på spørsmålene under for å finne ut hvordan vi kan hjelpe deg på mest mulig måte.</p>}
                        {this.getQuestionIndex() > 2 && this.getPhase() == 0 && <p>Her identifiserer vi fase</p>}
                        {this.getQuestionIndex() >= 5 && this.getPhase() == 1 && <p>Her identifiserer vi problemer for prefase</p>}
                        {this.getQuestionIndex() >= 6 && this.getPhase() == 2 && <p>Her identifiserer vi problemer for tidlig fase</p>}
                        {this.getQuestionIndex() >= 7 && this.getPhase() == 3 && <p>Her identifiserer vi problemer for operasjonell fase</p>}
                        {this.getQuestionIndex() >= 7 && this.getPhase() == 4 && <p>Her identifiserer vi problemer for vekstfase</p>}
                      </span>
                      <hr />
                      <div className="App container" style={{ padding: "0px 20% 0px 20%" }}>
                        {this.getSyvKjappeFerdig() && <label className="a-label" style={{ textAlign: "center" }}>Ferdig</label>}
                        {this.getQuestionIndex() == 1 && this.getPhase() == 0 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.QintroQuestionOneQ}</label>}
                        {this.getQuestionIndex() == 2 && this.getPhase() == 0 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.QintroQuestionTwoQ}</label>}

                        {this.getQuestionIndex() == 3 && this.getPhase() == 0 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.QphaseIdQuestionOneQ}</label>}
                        {this.getQuestionIndex() == 4 && this.getPhase() == 0 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.QphaseIdQuestionTwoQ}</label>}
                        {this.getQuestionIndex() == 5 && this.getPhase() == 0 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.QphaseIdQuestionThreeQ}</label>}
                        {this.getQuestionIndex() == 6 && this.getPhase() == 0 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.QphaseIdQuestionFourQ}</label>}

                        {this.getQuestionIndex() == 5 && this.getPhase() == 1 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.QprePhaseQuestionOneQ}</label>}
                        {this.getQuestionIndex() == 6 && this.getPhase() == 1 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.QprePhaseQuestionTwoQ}</label>}
                        {this.getQuestionIndex() == 7 && this.getPhase() == 1 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.QprePhaseQuestionThreeQ}</label>}

                        {this.getQuestionIndex() == 6 && this.getPhase() == 2 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.QearlyPhaseQuestionOneQ}</label>}
                        {this.getQuestionIndex() == 7 && this.getPhase() == 2 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.QearlyPhaseQuestionTwoQ}</label>}

                        {this.getQuestionIndex() == 7 && this.getPhase() == 3 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.QoperationalPhaseQuestionOneQ}</label>}
                        {this.getQuestionIndex() == 8 && this.getPhase() == 3 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.QoperationalPhaseQuestionTwoQ}</label>}
                        {this.getQuestionIndex() == 9 && this.getPhase() == 3 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.QoperationalPhaseQuestionThreeQ}</label>}
                        {this.getQuestionIndex() == 10 && this.getPhase() == 3 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.QoperationalPhaseQuestionFourQ}</label>}

                        {this.getQuestionIndex() == 7 && this.getPhase() == 4 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.QgrowthPhaseQuestionOneQ}</label>}
                        {this.getQuestionIndex() == 8 && this.getPhase() == 4 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.QgrowthPhaseQuestionTwoQ}</label>}
                        {this.getQuestionIndex() == 9 && this.getPhase() == 4 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.QgrowthPhaseQuestionThreeQ}</label>}
                        {this.getQuestionIndex() == 10 && this.getPhase() == 4 && <label className="a-label" style={{ textAlign: "center" }}>{this.state.QgrowthPhaseQuestionFourQ}</label>}
                      </div>
                      <div className="App container" style={{ padding: "0px 20% 0px 20%", textAlign: "center", margin: "auto" }}>
                        {!this.getSyvKjappeFerdig() && <a className="a-btn border" onClick={this.questionAnswerNo} style={{ float: "left", padding: "0px 45px 0px 45px", border: "outset" }}>Nei</a>}
                        {this.getQuestionIndex() > 1 && <a className="a-btn small" onClick={this.previousQuestion} style={{ margin: "5px 0px 5px 0px" }}>Tilbake</a>}
                        {!this.getSyvKjappeFerdig() && <a className="a-btn border" onClick={this.questionAnswerYes} style={{ float: "right", padding: "0px 48px 0px 48px", border: "outset" }}>Ja</a>}
                      </div>
                      <div className="App container" style={{ padding: "0px 20% 0px 20%", textAlign: "center", margin: "auto" }}>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>}
          {this.state.index == 2 && // FORM 2 BEGINS HERE
            <div className="container">
              <form role="form" className="o-form bgWhite">
                <div className="o-form__inner">
                  <div className="m-form__group">
                    <label className="a-label">Fortell oss om prosjektet ditt</label>

                    <hr /> <br></br>
                    <span className="a-input__help">
                      <label className="a-label">Tittel</label>
                    </span>
                    <input type="text" value={this.state.title} onChange={this.handleTitleChange.bind(this)} className="a-input" style={{ marginBottom: "30px" }} />
                    <div style={{ padding: "10px", border: "outset", borderColor: "#D9D9D6" }}>
                      <p>Ideen er (hvilken løsning)</p>
                      <textarea className="a-textarea" rows={2} value={this.state.ideenEr} onChange={this.handleideenErChange.bind(this)}></textarea>
                      <p style={{ fontFamily: "Circular" }}>som skal løse (hvilket problem)</p>
                      <textarea className="a-textarea" rows={2} value={this.state.somSkalLose} onChange={this.handlesomSkalLoseChange.bind(this)}></textarea>
                      <p>for (hvem)</p>
                      <textarea className="a-textarea" rows={2} value={this.state.for} onChange={this.handleforChange.bind(this)}></textarea>
                    </div>
                  </div>
                </div>
              </form>
            </div>}
          {this.state.index == 3 && // FORM3 BEGINS HERE
            <div className="container">
              <form role="form" className="o-form bgWhite">
                <div className="o-form__inner">
                  <div className="m-form__group">
                    <label className="a-label">Nyttige dokumenter om prosjektet ditt</label>
                    <div className="wrapper-class">
                      <span className="a-input__help">
                        <p>Har du dokumenter vi bør se på før møtet? Dette kan være skisser av forretningsmodell, pitch deck, eller lignende.</p>
                      </span>
                      <hr></hr>
                    </div>
                  </div>
                  <div className="App">
                    <img src="https://i.imgur.com/ZFiTuhn.png" style={{ display: "block", margin: "auto", width: "80%", border: "outset" }}></img>
                  </div>
                </div>
              </form>
            </div>}

          {/* Keep Form4 in seperate component file as we are required to use its componentDidMount() function to correctly display values */}

          {this.state.index == 4 && <Form4 setAdviser={this.setAdviser} adviser={this.state.adviser}
            setTopicOne={this.setTopicOne} topicOne={this.state.topicOne}
            setTopicTwo={this.setTopicTwo} topicTwo={this.state.topicTwo}
            setTopicThree={this.setTopicThree} topicThree={this.state.topicThree}
            setTopicFour={this.setTopicFour} topicFour={this.state.topicFour}
            setTopicFive={this.setTopicFive} topicFive={this.state.topicFive}
            setTopicSix={this.setTopicSix} topicSix={this.state.topicSix}
            setTopicSeven={this.setTopicSeven} topicSeven={this.state.topicSeven} />}

          {this.state.index == 5 && // FORM5 BEGINS HERE
            <div className="container">
              <form role="form" className="o-form bgWhite">
                <div className="o-form__inner">
                  <div className="m-form__group">
                    <label className="a-label">Mål for møtet</label>
                    <hr></hr>
                    <div className="wrapper-class">
                      <div className="m-form__group">
                        <div className="wrapper-class">
                          <fieldset>
                            <span className="a-input__help">
                              <p>Hva vil du diskutere med oss?</p>
                            </span>
                            <div className="a-option">
                              <span className="a-option__text">Kompetanse</span>
                              {this.state.diskuter == "kompetanse" && <input type="radio" value="kompetanse" onChange={this.setdiskuterutenomannet.bind(this)} checked={true} name="rsvp" />}
                              {this.state.diskuter != "kompetanse" && <input type="radio" value="kompetanse" onChange={this.setdiskuterutenomannet.bind(this)} name="rsvp" />}
                              <span className="a-option__background"></span>
                            </div>
                            <div className="a-option">
                              <span className="a-option__text">Råd</span>
                              {this.state.diskuter == "advice" && <input type="radio" value="advice" onChange={this.setdiskuterutenomannet.bind(this)} checked={true} name="rsvp" />}
                              {this.state.diskuter != "advice" && <input type="radio" value="advice" onChange={this.setdiskuterutenomannet.bind(this)} name="rsvp" />}
                              <span className="a-option__background"></span>
                            </div>
                            <div className="a-option">
                              <span className="a-option__text">Nettverk</span>
                              {this.state.diskuter == "nettverk" && <input type="radio" value="nettverk" onChange={this.setdiskuterutenomannet.bind(this)} checked={true} name="rsvp" />}
                              {this.state.diskuter != "nettverk" && <input type="radio" value="nettverk" onChange={this.setdiskuterutenomannet.bind(this)} name="rsvp" />}
                              <span className="a-option__background"></span>
                            </div>
                            <div className="a-option">
                              <span className="a-option__text">Finansiering</span>
                              {this.state.diskuter == "finansiering" && <input type="radio" value="finansiering" onChange={this.setdiskuterutenomannet.bind(this)} checked={true} name="rsvp" />}
                              {this.state.diskuter != "finansiering" && <input type="radio" value="finansiering" onChange={this.setdiskuterutenomannet.bind(this)} name="rsvp" />}
                              <span className="a-option__background"></span>
                            </div>
                            <div className="a-option">
                              <span className="a-option__text">Annet</span>
                              {this.state.annet && <input type="radio" onChange={this.setAnnetTrue.bind(this)} checked={true} name="rsvp" />}
                              {!this.state.annet && <input type="radio" onChange={this.setAnnetTrue.bind(this)} name="rsvp" />}
                              <span className="a-option__background"></span>
                            </div>
                            {this.state.annet && <input type="text" onChange={this.setdiskuterannet.bind(this)} className="a-input" value={this.state.diskuterannet} placeholder={"beskriv"} style={{ marginTop: "20px", maxWidth: "297.6px" }} />}
                          </fieldset>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>}
          {this.state.index == 6 && // FORM6 BEGINS HERE
            <div className="container">
              <form role="form" className="o-form bgWhite">
                <div className="o-form__inner">
                  <div className="m-form__group">
                    <label className="a-label">Foretrukket tidsrom og møteform</label>
                    <hr></hr>
                    <div className="wrapper-class">
                      <span className="a-input__help">
                        <p></p>
                      </span>
                    </div>

                    <div className="wrapper-class">
                      <div className="m-form__group">
                        <div className="wrapper-class">
                          <fieldset>
                            <span className="a-input__help">
                              <p>Når ønsker du at møtet skal skje?</p>
                            </span>
                            <div className="a-option">
                              <span className="a-option__text">Så fort som mulig</span>
                              {this.state.when != "så fort som mulig" && <input type="radio" value="så fort som mulig" onChange={this.setwhen.bind(this)} name="rsvp" />}
                              {this.state.when == "så fort som mulig" && <input type="radio" value="så fort som mulig" onChange={this.setwhen.bind(this)} checked={true} name="rsvp" />}
                              <span className="a-option__background"></span>
                            </div>
                            <div className="a-option">
                              <span className="a-option__text">Innen 2 uker</span>
                              {this.state.when != "innen 2 uker" && <input type="radio" value="innen 2 uker" onChange={this.setwhen.bind(this)} name="rsvp" />}
                              {this.state.when == "innen 2 uker" && <input type="radio" value="innen 2 uker" onChange={this.setwhen.bind(this)} checked={true} name="rsvp" />}
                              <span className="a-option__background"></span>
                            </div>
                            <div className="a-option">
                              <span className="a-option__text">Innen 4 uker</span>
                              {this.state.when != "innen 4 uker" && <input type="radio" value="innen 4 uker" onChange={this.setwhen.bind(this)} name="rsvp" />}
                              {this.state.when == "innen 4 uker" && <input type="radio" value="innen 4 uker" onChange={this.setwhen.bind(this)} checked={true} name="rsvp" />}
                              <span className="a-option__background"></span>
                            </div>
                            <div className="a-option">
                              <span className="a-option__text">Innen 8 uker</span>
                              {this.state.when != "innen 8 uker" && <input type="radio" value="innen 8 uker" onChange={this.setwhen.bind(this)} name="rsvp" />}
                              {this.state.when == "innen 8 uker" && <input type="radio" value="innen 8 uker" onChange={this.setwhen.bind(this)} checked={true} name="rsvp" />}
                              <span className="a-option__background"></span>
                            </div>
                          </fieldset>
                          <br></br>
                        </div>
                      </div>
                    </div>
                    <div className="wrapper-class">
                      <div className="m-form__group">
                        <div className="wrapper-class">
                          <fieldset>
                            <span className="a-input__help">
                              <p>Hvilken møteform foretrekker du?</p>
                            </span>
                            <div className="a-option">
                              <span className="a-option__text">Fysisk møte</span>
                              {this.state.how != "fysisk møte" && <input type="radio" value="fysisk møte" onChange={this.sethow.bind(this)} name="rsvps" />}
                              {this.state.how == "fysisk møte" && <input type="radio" value="fysisk møte" onChange={this.sethow.bind(this)} checked={true} name="rsvps" />}
                              <span className="a-option__background"></span>
                            </div>
                            <div className="a-option">
                              <span className="a-option__text">Videomøte</span>
                              {this.state.how != "videomøte" && <input type="radio" value="videomøte" onChange={this.sethow.bind(this)} name="rsvps" />}
                              {this.state.how == "videomøte" && <input type="radio" value="videomøte" onChange={this.sethow.bind(this)} checked={true} name="rsvps" />}
                              <span className="a-option__background"></span>
                            </div>
                            <div className="a-option">
                              <span className="a-option__text">Telefonmøte</span>
                              {this.state.how != "telefonmøte" && <input type="radio" value="telefonmøte" onChange={this.sethow.bind(this)} name="rsvps" />}
                              {this.state.how == "telefonmøte" && <input type="radio" value="telefonmøte" onChange={this.sethow.bind(this)} checked={true} name="rsvps" />}
                              <span className="a-option__background"></span>
                            </div>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>}
          {this.state.index == 7 && // FORM 7 BEGINS HERE
            <div className="container">
              <form role="form" className="o-form bgWhite">
                <div className="o-form__inner">
                  <div className="m-form__group">
                    <label className="a-label">Oppsummering</label>
                    <hr />
                    <br></br>
                    <span className="a-input__help">
                      <label className="a-label" style={{ wordWrap: "break-word" }}>{this.state.title}</label>
                    </span>
                    <div style={{ padding: "10px", border: "outset", borderColor: "#D9D9D6" }}>
                      <p style={{ fontFamily: "Circular", fontStyle: "italic"}}>Ideen er (hvilken løsning)</p>
                      <span className="a-input__help">
                        <p style={{ wordWrap: "break-word" }}>{this.state.ideenEr}</p>
                      </span>
                      <p style={{ fontFamily: "Circular", fontStyle: "italic"}}>som skal løse (hvilket problem)</p>
                      <span className="a-input__help">
                        <p style={{ wordWrap: "break-word" }}>{this.state.somSkalLose}</p>
                      </span>
                      <p style={{ fontFamily: "Circular", fontStyle: "italic"}}>for (hvem)</p>
                      <span className="a-input__help">
                        <p style={{ wordWrap: "break-word" }}>{this.state.for}</p>
                      </span>
                    </div>
                  </div>
                  <span className="a-input__help">
                    {this.state.adviser == "IN" && <p>Din rådgiver blir valgt av Innovasjon Norge.</p>}
                    {this.state.adviser != "IN" && <p>Din rådgiver er: {this.state.adviser}.</p>}
                  </span>
                  <span className="a-input__help">
                    {this.state.diskuter != "advice" && <p>Du vil snakke med oss om {this.state.diskuter}.</p>}
                    {this.state.diskuter == "advice" && <p>Du vil snakke med oss om råd.</p>}
                  </span>
                  <span className="a-input__help">
                    {<p>Du vil møte oss {this.state.when}.</p>}
                  </span>
                  <span className="a-input__help">
                    {<p>Du foretrekker {this.state.how}.</p>}
                  </span>
                  <div className="App container" style={{ padding: "0px 20% 0px 20%", textAlign: "center", margin: "auto" }}>
                    <a className="a-btn cta .m-text" onClick={() => { this.previousClicked() }} style={{ padding: "0px 20px 0px 20px" }}>Send inn</a>
                  </div>
                </div>
              </form>
            </div>}
          <div className="App container">
            <a className="a-btn cta .m-text" onClick={() => { this.previousClicked() }} style={{ float: "left", padding: "0px 20px 0px 20px" }}>Forrige</a>
            <a className="a-btn cta .m-text" onClick={() => { this.nextClicked() }} style={{ float: "right", padding: "0px 35px 0px 35px" }}>Neste</a>
          </div>
          <div className={"pagination"} style={{ display: "inline-block", textAlign: "center", width: "98%", position: "absolute", right: "1.3%" }}>
            <div style={{ textAlign: "center", display: "inline-block" }}>
              <Pagination style={{ textAlign: "center", display: "inline-block", position: "sticky" }} getIndex={this.getIndex} setIndex={this.setIndex} />
            </div>
          </div>
        </div>
      </div>
    );
  }


  // Functions for App component

  private previousClicked() {
    this.setState((prevState: { index: number; }) => {
      if (prevState.index == 5)
        this.componentForm4DidMount()
      if (prevState.index != 1)
        return { index: prevState.index - 1 }
      else
        return { index: prevState.index }
    })
  }

  private nextClicked() {
    this.setState((prevState: { index: number; }) => {
      if (prevState.index == 3)
        this.componentForm4DidMount()
      if (prevState.index != 7)
        return { index: prevState.index + 1 }
      else
        return { index: prevState.index }
    })
  }

  private getIndex() {
    return this.state.index
  }

  private setIndex(targetPage: number) {
    this.setState({ index: targetPage })
  }

  //Functions for Form1

  private getQuestionIndex() {
    return this.state.syvKjappeIndex
  }

  private getSyvKjappeFerdig() {
    return this.state.syvKjappeFerdig
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

  //Functions for Form2

  private handleTitleChange(event: { target: { value: any; }; }) {
    this.settitle(event.target.value)
  }

  private handleideenErChange(event: { target: { value: any; }; }) {
    this.setideenEr(event.target.value)
  }

  private handlesomSkalLoseChange(event: { target: { value: any; }; }) {
    this.setsomSkalLose(event.target.value)
  }

  private handleforChange(event: { target: { value: any; }; }) {
    this.setfor(event.target.value)
  }

  private settitle(newTitle: string) {
    this.setState({ title: newTitle })
  }

  private setideenEr(newIde: string) {
    this.setState({ ideenEr: newIde })
  }

  private setsomSkalLose(newIde: string) {
    this.setState({ somSkalLose: newIde })
  }

  private setfor(newIde: string) {
    this.setState({ for: newIde })
  }

  // Functions for Form3
  // None needed so far

  // Functions for Form4

  private componentForm4DidMount() {
    if (this.state.adviser == "Anita" || this.state.adviser == "Håkon" || this.state.adviser == "Hans Martin" || this.state.adviser == "IN")
      this.setState({ localAdviserName: "" })
  }

  private changeAdviser(event: { target: { value: any; }; }) {
    this.setState({ localAdviserName: "" })
    this.setAdviser(event.target.value)
  }

  private setLocalAdviserName(event: { target: { value: any; }; }) {
    this.setState({ localAdviserName: event.target.value })
    this.setAdviser(event.target.value)
  }

  private setAdviser(newTitle: boolean) {
    this.setState({ adviser: newTitle })
  }

  private setTopicOne() {
    if (this.state.topicOne)
      this.setState({ topicOne: false })
    else
      this.setState({ topicOne: true })
  }

  private setTopicTwo() {
    if (this.state.topicTwo)
      this.setState({ topicTwo: false })
    else
      this.setState({ topicTwo: true })
  }

  private setTopicThree() {
    if (this.state.topicThree)
      this.setState({ topicThree: false })
    else
      this.setState({ topicThree: true })
  }

  private setTopicFour() {
    if (this.state.topicFour)
      this.setState({ topicFour: false })
    else
      this.setState({ topicFour: true })
  }

  private setTopicFive() {
    if (this.state.topicFive)
      this.setState({ topicFive: false })
    else
      this.setState({ topicFive: true })
  }

  private setTopicSix() {
    if (this.state.topicSix)
      this.setState({ topicSix: false })
    else
      this.setState({ topicSix: true })
  }

  private setTopicSeven() {
    if (this.state.topicSeven)
      this.setState({ topicSeven: false })
    else
      this.setState({ topicSeven: true })
  }

  // Functions for Form5

  private setAnnetFalse(event: { target: { value: any; }; }) {
    this.setState({
      annet: false,
    })
  }

  private setAnnetTrue() {
    this.setState({
      annet: true,
      diskuterekompetanse: false,
      diskutereadvice: false,
      diskuterenettverk: false,
      diskuterefinansiering: false,
      diskuterannet: "",
    })
  }

  private setdiskuter(event: { target: { value: any; }; }) {
    this.setState({
      diskuter: event.target.value,
    })
  }

  private setdiskuterutenomannet(event: { target: { value: any; }; }) {
    this.setState({
      annet: false,
      diskuter: event.target.value,
    })
  }

  private setdiskuterekompetanse() {
    this.setState({
      annet: false,
      diskuterekompetanse: true,
      diskutereadvice: false,
      diskuterenettverk: false,
      diskuterefinansiering: false,
      diskuterannet: "",
    })
  }

  private setdiskutereadvice() {
    this.setState({
      annet: false,
      diskuterekompetanse: false,
      diskutereadvice: true,
      diskuterenettverk: false,
      diskuterefinansiering: false,
      diskuterannet: "",
    })
  }

  private setdiskuterenettverk() {
    this.setState({
      annet: false,
      diskuterekompetanse: false,
      diskutereadvice: false,
      diskuterenettverk: true,
      diskuterefinansiering: false,
      diskuterannet: "",
    })
  }

  private setdiskuterfinansiering() {
    this.setState({
      annet: false,
      diskuterekompetanse: false,
      diskutereadvice: false,
      diskuterenettverk: false,
      diskuterefinansiering: true,
      diskuterannet: "",
    })
  }

  private setdiskuterannet(event: { target: { value: any; }; }) {
    this.setState({
      diskuterekompetanse: false,
      diskutereadvice: false,
      diskuterenettverk: false,
      diskuterefinansiering: false,
      diskuterannet: event.target.value,
      diskuter: event.target.value,
    })
  }

  // Functions for Form6

  private setwhen(event: { target: { value: any; }; }) {
    this.setState({
      when: event.target.value,
    })
  }

  private sethow(event: { target: { value: any; }; }) {
    this.setState({
      how: event.target.value,
    })
  }

  // Functions for Form7
  private trykksendinn() {
    this.setState({sendinn: true})
  }
}