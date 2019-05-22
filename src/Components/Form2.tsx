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

                            <span className="a-input__help">
                            </span>
                            <hr /> <br></br>
                            <span className="a-input__help">
                                <p>Tittel</p>
                            </span>
                            <input type="text" className="a-input" style={{ marginBottom: "20px" }} />
                            <p>Ideen er</p>
                            <textarea className="a-textarea" rows={3}></textarea>
                            <p style={{ fontFamily: "Circular" }}>som skal løse</p>
                            <textarea className="a-textarea" rows={3}></textarea>
                            <p>for</p>
                            <textarea className="a-textarea" rows={3}></textarea>
                            <br></br>
                            <hr></hr>
                            <div className="m-form__group">
                                <label className="a-label">Mål/ambisjon</label>
                                <textarea className="a-textarea" rows={3}></textarea>
                                <br></br>
                                <label className="a-label">Behov/problem som skal løses</label>
                                <textarea className="a-textarea" rows={3}></textarea>
                                <br></br>
                                <label className="a-label">Ditt team</label>
                                <textarea className="a-textarea" rows={3}></textarea>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}