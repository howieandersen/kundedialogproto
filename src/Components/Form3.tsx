import * as React from 'react';
import '../style.css'
import '../App.css';

export default class Form3 extends React.Component<any, any>{

    public render() {
        return (
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
            </div>
        );
    }
}