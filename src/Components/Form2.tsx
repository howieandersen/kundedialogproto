import * as React from 'react';
import '../style.css'
import '../App.css';

export default class Form2 extends React.Component<any, any>{

    public render() {
        return (
            <div className="container">
                <form role="form" className="o-form bgWhite">
                    <div className="o-form__inner">
                        <div className="m-form__group">
                            <label className="a-label">Form 2</label>
                            <div className="wrapper-class">
                                <span className="a-input__help">
                                    <p>Enter the full name of your company, address, phone number, organisation number and company URL.</p>
                                </span>
                                <input type="email" className="a-input" />
                            </div>
                        </div>
                        <div className="m-form__group">
                            <label className="a-label">Name</label>
                            <input type="text" className="a-input" />
                        </div>
                        <div className="m-form__group">
                            <label className="a-label">Who is your value position?</label>
                            <textarea className="a-textarea" rows={10}></textarea>
                        </div>
                        <div className="m-form__group">
                            <label className="a-label">Radio Group</label>
                            <div className="wrapper-class">
                                <fieldset>
                                    <span className="a-input__help">
                                        <p>Select a Location:</p>
                                    </span>
                                    <div className="a-option">
                                        <span className="a-option__text">One</span>
                                        <input type="checkbox" name="rsvp_checkmark" />
                                        <span className="a-option__background"></span>
                                    </div>
                                    <div className="a-option">
                                        <span className="a-option__text">Two</span>
                                        <input type="checkbox" name="rsvp_checkmark" />
                                        <span className="a-option__background"></span>
                                    </div>
                                    <div className="a-option">
                                        <span className="a-option__text">Three</span>
                                        <input type="checkbox" name="rsvp_checkmark" />
                                        <span className="a-option__background"></span>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                        <div className="m-form__group">
                            <label className="a-label">Radio Group</label>
                            <div className="wrapper-class">
                                <fieldset>
                                    <span className="a-input__help">
                                        <p>Select a Location:</p>
                                    </span>
                                    <div className="a-option">
                                        <span className="a-option__text">One</span>
                                        <input type="radio" name="rsvp" />
                                        <span className="a-option__background"></span>
                                    </div>
                                    <div className="a-option">
                                        <span className="a-option__text">Two</span>
                                        <input type="radio" name="rsvp" />
                                        <span className="a-option__background"></span>
                                    </div>
                                    <div className="a-option">
                                        <span className="a-option__text">Three</span>
                                        <input type="radio" name="rsvp" />
                                        <span className="a-option__background"></span>
                                    </div>
                                </fieldset>
                            </div>
                        </div>

                        <a href="javascript:;" className="a-btn cta">Submit Application</a>
                    </div>
                </form>
            </div>
        );
    }
}