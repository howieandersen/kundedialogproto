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
                            <label className="a-label">Hvilken kompetanse bør din rådgiver besitte?</label>
                            <hr></hr>
                            <div className="m-form__group">
                                <div className="wrapper-class">
                                    <fieldset>
                                        <span className="a-input__help">
                                            <p>Du har tidligere vært i kontakt med:</p>
                                        </span>
                                        <div className="a-option">
                                            <span className="a-option__text" >Anita</span>
                                            {this.props.adviser == "Anita" && <input type="radio" value="Anita" onChange={this.changeAdviser.bind(this)} checked={true} name="rsvp" />}
                                            {this.props.adviser != "Anita" && <input type="radio" value="Anita" onChange={this.changeAdviser.bind(this)} name="rsvp" />}
                                            <span className="a-option__background"></span>
                                        </div>
                                        <div className="a-option">
                                            <span className="a-option__text">Håkon</span>
                                            {this.props.adviser == "Håkon" && <input type="radio" value="Håkon" onChange={this.changeAdviser.bind(this)} checked={true} name="rsvp" />}
                                            {this.props.adviser != "Håkon" && <input type="radio" value="Håkon" onChange={this.changeAdviser.bind(this)} name="rsvp" />}
                                            <span className="a-option__background"></span>
                                        </div>
                                        <div className="a-option">
                                            <span className="a-option__text">Hans Martin</span>
                                            {this.props.adviser == "Hans Martin" && <input type="radio" value="Hans Martin" onChange={this.changeAdviser.bind(this)} checked={true} name="rsvp" />}
                                            {this.props.adviser != "Hans Martin" && <input type="radio" value="Hans Martin" onChange={this.changeAdviser.bind(this)} name="rsvp" />}
                                            <span className="a-option__background"></span>
                                        </div>
                                        <span className="a-input__help">
                                            <p><br></br>Andre:</p>
                                        </span>
                                        <input type="text" className="a-input"  value={this.props.adviser} onChange={this.changeAdviser.bind(this)}/>
                                    </fieldset>
                                </div>
                            </div>
                            <div className="wrapper-class">
                                <span className="a-input__help">
                                    <label className="a-label">Hva er viktig for deg å diskutere med oss?</label>
                                </span>
                                <fieldset>
                                    <div className="a-option">
                                        <span className="a-option__text">Oppstart og skalering</span>
                                        {this.props.topicOne && <input type="radio" onChange={this.changeTopicOne.bind(this)} name="rsvp" />}
                                        {!this.props.topicOne && <input type="radio" onChange={this.changeTopicOne.bind(this)} name="rsvp" />}
                                        <span className="a-option__background"></span>
                                    </div>
                                    <div className="a-option">
                                        <span className="a-option__text">Innovasjon og utvikling av bedrift</span>
                                        <input type="checkbox" name="rsvp_checkmark" />
                                        <span className="a-option__background"></span>
                                    </div>
                                    <div className="a-option">
                                        <span className="a-option__text">Nå internasjonale markeder</span>
                                        <input type="checkbox" name="rsvp_checkmark" />
                                        <span className="a-option__background"></span>
                                    </div>
                                    <div className="a-option">
                                        <span className="a-option__text">Investering i landbruket</span>
                                        <input type="checkbox" name="rsvp_checkmark" />
                                        <span className="a-option__background"></span>
                                    </div>
                                    <div className="a-option">
                                        <span className="a-option__text">Beskyttelse av din ide</span>
                                        <input type="checkbox" name="rsvp_checkmark" />
                                        <span className="a-option__background"></span>
                                    </div>
                                    <div className="a-option">
                                        <span className="a-option__text">Finansiering</span>
                                        <input type="checkbox" name="rsvp_checkmark" />
                                        <span className="a-option__background"></span>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

    private changeAdviser(event: { target: { value: any; }; }) {
        this.props.setAdviser(event.target.value)
    }

    private changeTopicOne() {
        this.props.setTopicOne()
    }

    private changeTopicTwo() {
        this.props.setTopicTwo()
    }

    private changeTopicThree() {
        this.props.setTopicThree()
    }

    private changeTopicFour() {
        this.props.setTopicFour()
    }

    private changeTopicFive() {
        this.props.setTopicFive()
    }

    private changeTopicSix() {
        this.props.setTopicSix()
    }
}