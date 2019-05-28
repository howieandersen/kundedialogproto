import * as React from 'react';
import '../style.css'
import '../App.css';

export default class Form5 extends React.Component<any, any>{

    constructor(props: any) {
        super(props);

        this.setAnnetFalse = this.setAnnetFalse.bind(this);
        this.setAnnetTrue = this.setAnnetTrue.bind(this);

        this.state = {
            annet: false
        };
    }

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
                                                <p>Hva vil du diskutere med oss?</p>
                                            </span>
                                            <div className="a-option">
                                                <span className="a-option__text">Kompetanse</span>
                                                <input type="radio" value="1" onChange={this.setAnnetFalse.bind(this)} name="rsvp" />
                                                <span className="a-option__background"></span>
                                            </div>
                                            <div className="a-option">
                                                <span className="a-option__text">Råd</span>
                                                <input type="radio" value="2" onChange={this.setAnnetFalse.bind(this)} name="rsvp" />
                                                <span className="a-option__background"></span>
                                            </div>
                                            <div className="a-option">
                                                <span className="a-option__text">Nettverk</span>
                                                <input type="radio" value="3" onChange={this.setAnnetFalse.bind(this)} name="rsvp" />
                                                <span className="a-option__background"></span>
                                            </div>
                                            <div className="a-option">
                                                <span className="a-option__text">Finansiering</span>
                                                <input type="radio" value="4" onChange={this.setAnnetFalse.bind(this)} name="rsvp" />
                                                <span className="a-option__background"></span>
                                            </div>
                                            <div className="a-option">
                                                <span className="a-option__text">Annet</span>
                                                <input type="radio" value="5" onChange={this.setAnnetTrue.bind(this)} name="rsvp" />
                                                <span className="a-option__background"></span>
                                            </div>
                                            {this.state.annet && <input type="text" className="a-input" placeholder={"beskriv plz"} style={{marginTop: "20px", maxWidth: "297.6px" }} />}
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

    private setAnnetFalse(event: { target: { value: any; }; }) {
        this.setState({ annet: false })
    }

    private setAnnetTrue() {
        this.setState({ annet: true })
    }
}