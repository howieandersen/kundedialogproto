import * as React from 'react';
import '../style.css'
import '../App.css';

export default class Form6 extends React.Component<any, any>{

    public render() {
        return (
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
                                                <input type="radio" name="rsvp" />
                                                <span className="a-option__background"></span>
                                            </div>
                                            <div className="a-option">
                                                <span className="a-option__text">Innen 2 uker</span>
                                                <input type="radio" name="rsvp" />
                                                <span className="a-option__background"></span>
                                            </div>
                                            <div className="a-option">
                                                <span className="a-option__text">Innen 4 uker</span>
                                                <input type="radio" name="rsvp" />
                                                <span className="a-option__background"></span>
                                            </div>
                                            <div className="a-option">
                                                <span className="a-option__text">Innen 8 år</span>
                                                <input type="radio" name="rsvp" />
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
                                                <input type="radio" name="rsvps" />
                                                <span className="a-option__background"></span>
                                            </div>
                                            <div className="a-option">
                                                <span className="a-option__text">Videomøte</span>
                                                <input type="radio" name="rsvps" />
                                                <span className="a-option__background"></span>
                                            </div>
                                            <div className="a-option">
                                                <span className="a-option__text">Telefonmøte</span>
                                                <input type="radio" name="rsvps" />
                                                <span className="a-option__background"></span>
                                            </div>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}