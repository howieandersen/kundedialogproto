import * as React from 'react';
import '../style.css'
import '../App.css';

export default class Form1 extends React.Component<any, any>{
    public render() {
        return (
            <div className="container">
                <form role="form" className="o-form bgWhite">
                    <div className="o-form__inner">
                        <div className="m-form__group">
                            <label className="a-label">Innledende spørsmål</label>
                            <div className="wrapper-class">
                                <span className="a-input__help">
                                    <p>Innovasjon Norge leverer mer enn bare tilskudd og lån. Vi har mange kunderådgivere som kan hjelpe deg og din bedrift med ulike kompetansetjenester. Svar på spørsmålene under for å finne ut hvordan vi kan hjelpe deg på mest mulig måte.</p>
                                </span>
                                <div className="App container" style={{ padding: "0px 100px 0px 100px" }}>
                                    <label className="a-label" style={{ textAlign: "center" }}>Gjelder dette en eller flere av disse næringene? <br></br> (Jordbruk, Skogbruk, Reinsdrift)</label>
                                </div>
                                <div className="App container" style={{ padding: "0px 30% 0px 30%" }}>
                                    <a className="a-btn border" onClick = {this.props.previousQuestion} style={{ float: "left", padding: "0px 45px 0px 45px" }}>Nei</a>
                                    <a className="a-btn border" onClick = {this.props.nextQuestion} style={{ float: "right", padding: "0px 48px 0px 48px" }}>Ja</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
