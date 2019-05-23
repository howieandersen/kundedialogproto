import * as React from 'react';
import '../style.css'
import '../App.css';

export default class Form5 extends React.Component<any, any>{

    public render() {
        return (
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
                                                <p>Førsteprioritet</p>
                                            </span>
                                            <div className="a-option">
                                                <span className="a-option__text">Finansiering</span>
                                                <input type="radio" name="rsvp" />
                                                <span className="a-option__background"></span>
                                            </div>
                                            <div className="a-option">
                                                <span className="a-option__text">Kompetanse</span>
                                                <input type="radio" name="rsvp" />
                                                <span className="a-option__background"></span>
                                            </div>
                                            <div className="a-option">
                                                <span className="a-option__text">Råd</span>
                                                <input type="radio" name="rsvp" />
                                                <span className="a-option__background"></span>
                                            </div>
                                            <div className="a-option">
                                                <span className="a-option__text">Nettverk</span>
                                                <input type="radio" name="rsvp" />
                                                <span className="a-option__background"></span>
                                            </div>
                                            <div className="a-option">
                                                <span className="a-option__text">Annet</span>
                                                <input type="radio" name="rsvp" />
                                                <span className="a-option__background"></span>
                                            </div>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <div className="wrapper-class">
                                <span className="a-input__help">
                                    <p>Forslag til agenda, varighet, e.l</p>
                                </span>
                                <textarea className="a-textarea" rows={3}></textarea>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}