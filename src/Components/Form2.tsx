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
                            <label className="a-label">Elevator Pitch</label>
                            <p>Ideen er</p>
                            <textarea className="a-textarea" rows={3}></textarea>
                            <p>som skal løse</p>
                            <textarea className="a-textarea" rows={3}></textarea>
                            <p>for</p>
                            <textarea className="a-textarea" rows={3}></textarea>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}