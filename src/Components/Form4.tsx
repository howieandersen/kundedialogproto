import * as React from 'react';
import '../style.css'
import '../App.css';
import { placeholder } from '@babel/types';
import { string } from 'prop-types';

export default class Form4 extends React.Component<any, any>{

    constructor(props: any) {
        super(props);

        this.setLocalAdviserName = this.setLocalAdviserName.bind(this)

        this.state = {
            localTitle: 'Navn på ønsket rådgiver',
            localAdviserName: this.props.adviser
        };
    }

    componentDidMount() {
        if (this.props.adviser == "Anita" || this.props.adviser == "Håkon" || this.props.adviser == "Hans Martin" || this.props.adviser == "IN")
            this.setState({ localAdviserName: "" })
    }

    public render() {
        return (
            <div className="container">
                <form role="form" className="o-form bgWhite">
                    <div className="o-form__inner">
                        <div className="m-form__group">
                            <label className="a-label">Velg din rådgiver</label>
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
                                        <input type="text" className="a-input" value={this.state.localAdviserName} onChange={this.setLocalAdviserName.bind(this)} placeholder={this.state.localTitle} style={{ maxWidth: "297.6px" }} />
                                        <span className="a-input__help">
                                            <p><br></br>Eller:</p>
                                        </span>
                                        <div className="a-option">
                                            <span className="a-option__text" >La oss velge rådgiver til deg</span>
                                            {this.props.adviser == "IN" && <input type="radio" value="IN" onChange={this.changeAdviser.bind(this)} checked={true} name="rsvp" />}
                                            {this.props.adviser != "IN" && <input type="radio" value="IN" onChange={this.changeAdviser.bind(this)} name="rsvp" />}
                                            <span className="a-option__background"></span>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                            {this.props.adviser == "IN" &&
                                <div className="wrapper-class">
                                    <span className="a-input__help">
                                        <label className="a-label">Hvilke kompetanser bør din rådgiver besitte?</label>
                                    </span>
                                    <fieldset>
                                        <div className="a-option">
                                            <span className="a-option__text">Oppstart</span>
                                            {this.props.topicOne && <input type="checkbox" onChange={this.changeTopicOne.bind(this)} checked={true} name="rsvp_checkmark" />}
                                            {!this.props.topicOne && <input type="checkbox" onChange={this.changeTopicOne.bind(this)} name="rsvp_checkmark" />}
                                            <span className="a-option__background"></span>
                                        </div>
                                        <div className="a-option">
                                            <span className="a-option__text">Skalering</span>
                                            {this.props.topicTwo && <input type="checkbox" onChange={this.changeTopicTwo.bind(this)} checked={true} name="rsvp_checkmark" />}
                                            {!this.props.topicTwo && <input type="checkbox" onChange={this.changeTopicTwo.bind(this)} name="rsvp_checkmark" />}
                                            <span className="a-option__background"></span>
                                        </div>
                                        <div className="a-option">
                                            <span className="a-option__text">Utvikling av bedrift</span>
                                            {this.props.topicThree && <input type="checkbox" onChange={this.changeTopicThree.bind(this)} checked={true} name="rsvp_checkmark" />}
                                            {!this.props.topicThree && <input type="checkbox" onChange={this.changeTopicThree.bind(this)} name="rsvp_checkmark" />}
                                            <span className="a-option__background"></span>
                                        </div>

                                        <div className="a-option">
                                            <span className="a-option__text">Nå internasjonale markeder</span>
                                            {this.props.topicFour && <input type="checkbox" onChange={this.changeTopicFour.bind(this)} checked={true} name="rsvp_checkmark" />}
                                            {!this.props.topicFour && <input type="checkbox" onChange={this.changeTopicFour.bind(this)} name="rsvp_checkmark" />}
                                            <span className="a-option__background"></span>
                                        </div>
                                        <div className="a-option">
                                            <span className="a-option__text">Investering i landbruk</span>
                                            {this.props.topicFive && <input type="checkbox" onChange={this.changeTopicFive.bind(this)} checked={true} name="rsvp_checkmark" />}
                                            {!this.props.topicFive && <input type="checkbox" onChange={this.changeTopicFive.bind(this)} name="rsvp_checkmark" />}
                                            <span className="a-option__background"></span>
                                        </div>
                                        <div className="a-option">
                                            <span className="a-option__text">Beskyttelse av din ide</span>
                                            {this.props.topicSix && <input type="checkbox" onChange={this.changeTopicSix.bind(this)} checked={true} name="rsvp_checkmark" />}
                                            {!this.props.topicSix && <input type="checkbox" onChange={this.changeTopicSix.bind(this)} name="rsvp_checkmark" />}
                                            <span className="a-option__background"></span>
                                        </div>
                                    </fieldset>
                                </div>}
                        </div>
                    </div>
                </form>
            </div>
        );
    }

    private changeAdviser(event: { target: { value: any; }; }) {
        this.setState({ localAdviserName: "" })
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

    private changeTopicSeven() {
        this.props.setTopicSeven()
    }

    private setLocalAdviserName(event: { target: { value: any; }; }) {
        this.setState({ localAdviserName: event.target.value })
        this.props.setAdviser(event.target.value)
    }
}