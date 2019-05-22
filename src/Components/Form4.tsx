import * as React from 'react';
import '../style.css'
import '../App.css';

export default class Form4 extends React.Component<any, any>{

    public render() {
        return (
            <div className="container">
                <form role="form" className="o-form bgWhite">
                    <div className="o-form__inner">
                        <div className="m-form__group">
                            <label className="a-label">Har du en rådgiver du vil snakke med?</label>
                            <div className="m-form__group">
                                <div className="wrapper-class">
                                    <fieldset>
                                        <span className="a-input__help">
                                            <p>Du har tidligere vært i kontakt med:</p>
                                        </span>
                                        <div className="a-option">
                                            <span className="a-option__text">Ola</span>
                                            <input type="radio" name="rsvp" />
                                            <span className="a-option__background"></span>
                                        </div>
                                        <div className="a-option">
                                            <span className="a-option__text">Per</span>
                                            <input type="radio" name="rsvp" />
                                            <span className="a-option__background"></span>
                                        </div>
                                        <div className="a-option">
                                            <span className="a-option__text">Jon</span>
                                            <input type="radio" name="rsvp" />
                                            <span className="a-option__background"></span>
                                        </div>
                                        <span className="a-input__help">
                                            <p><br></br>Andre:</p>
                                        </span>
                                        <input type="text" className="a-input" />
                                    </fieldset>
                                </div>
                            </div>
                            <div className="wrapper-class">
                                <span className="a-input__help">
                                    <label className="a-label">Hvilke ekspertiser bør delta i møtet?</label>
                                </span>
                                <fieldset>
                                    <div className="a-option">
                                        <span className="a-option__text">Finansiering</span>
                                        <input type="checkbox" />
                                        <span className="a-option__background"></span>
                                    </div>
                                    <div className="a-option">
                                        <span className="a-option__text">Internasjonale Markeder</span>
                                        <input type="checkbox" name="rsvp_checkmark" />
                                        <span className="a-option__background"></span>
                                    </div>
                                    <div className="a-option">
                                        <span className="a-option__text">Oppstart / Skalering</span>
                                        <input type="checkbox" name="rsvp_checkmark" />
                                        <span className="a-option__background"></span>
                                    </div>
                                    <div className="a-option">
                                        <span className="a-option__text">Rettigheter / Patenter</span>
                                        <input type="checkbox" name="rsvp_checkmark" />
                                        <span className="a-option__background"></span>
                                    </div>
                                    <div className="a-option">
                                        <span className="a-option__text">Annet</span>
                                        <input type="checkbox" name="rsvp_checkmark" />
                                        <span className="a-option__background"></span>
                                    </div>
                                </fieldset>
                            </div>
                            <div className="wrapper-class">
                                <span className="a-input__help">
                                    <label className="a-label">Basert på det vi vet så langt, vil du vite mer om:</label>
                                </span>
                                <div className="wrapper-class">
                                    <fieldset>
                                        <div className="a-option">
                                            <span className="a-option__text">Beskyttelse av ide</span>
                                            <input type="checkbox" />
                                            <span className="a-option__background"></span>
                                        </div>
                                        <div className="a-option">
                                            <span className="a-option__text">Bygge forretningsmodell</span>
                                            <input type="checkbox" name="rsvp_checkmark" />
                                            <span className="a-option__background"></span>
                                        </div>
                                        <div className="a-option">
                                            <span className="a-option__text">Nå et internasjonalt marked</span>
                                            <input type="checkbox" name="rsvp_checkmark" />
                                            <span className="a-option__background"></span>
                                        </div>
                                        <div className="a-option">
                                            <span className="a-option__text">Hva du skal spise til frokost</span>
                                            <input type="checkbox" name="rsvp_checkmark" />
                                            <span className="a-option__background"></span>
                                        </div>
                                        <div className="a-option">
                                            <span className="a-option__text">Annet</span>
                                            <input type="checkbox" name="rsvp_checkmark" />
                                            <span className="a-option__background"></span>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}