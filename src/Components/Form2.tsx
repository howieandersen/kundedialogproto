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
                            <label className="a-label">Innledende info</label>

                            <hr /> <br></br>
                            <span className="a-input__help">
                                <label className="a-label">Tittel på prosjekt</label>
                            </span>
                            <input type="text" className="a-input" style={{ marginBottom: "20px" }} />
                            <div style={{ padding: "10px", border: "solid", borderColor: "#D9D9D6" }}>
                                <span className="a-input__help">
                                    <label className="a-label">Elevator Pitch</label>
                                </span>
                                <p>Ideen er</p>
                                <textarea className="a-textarea" rows={3}></textarea>
                                <p style={{ fontFamily: "Circular" }}>som skal løse</p>
                                <textarea className="a-textarea" rows={3}></textarea>
                                <p>for</p>
                                <textarea className="a-textarea" rows={3}></textarea>
                            </div>
                            <br></br>
                            <hr></hr>
                            <br></br>
                            <div className="m-form__group">
                                <span className="a-input__help">
                                    <label className="a-label">Mål/ambisjon</label>
                                </span>
                                <textarea className="a-textarea" rows={3}></textarea>
                                <br></br>
                                <span className="a-input__help">
                                    <label className="a-label">Behov/problem som skal løses</label>
                                </span>
                                <textarea className="a-textarea" rows={3}></textarea>
                                <br></br>
                                <span className="a-input__help">
                                    <label className="a-label">Ditt team</label>
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