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
                            <label className="a-label">Fortell oss om prosjektet ditt</label>

                            <hr /> <br></br>
                            <span className="a-input__help">
                                <label className="a-label">Tittel på prosjekt</label>
                            </span>
                            <input type="text" value={this.props.title} onChange={this.handleTitleChange.bind(this)} className="a-input" style={{ marginBottom: "30px" }} />
                            <div style={{ padding: "10px", border: "outset", borderColor: "#D9D9D6" }}>
                                <p>Ideen er</p>
                                <textarea className="a-textarea" rows={2} value={this.props.ideenEr} onChange={this.handleideenErChange.bind(this)}></textarea>
                                <p style={{ fontFamily: "Circular" }}>som skal løse</p>
                                <textarea className="a-textarea" rows={2} value={this.props.somSkalLose} onChange={this.handlesomSkalLoseChange.bind(this)}></textarea>
                                <p>for</p>
                                <textarea className="a-textarea" rows={2} value={this.props.for} onChange={this.handleforChange.bind(this)}></textarea>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

    private handleTitleChange(event: { target: { value: any; }; }) {
        this.props.settitle(event.target.value)
    }

    private handleideenErChange(event: { target: { value: any; }; }) {
        this.props.setideenEr(event.target.value)
    }

    private handlesomSkalLoseChange(event: { target: { value: any; }; }) {
        this.props.setsomSkalLose(event.target.value)
    }

    private handleforChange(event: { target: { value: any; }; }) {
        this.props.setfor(event.target.value)
    }
}