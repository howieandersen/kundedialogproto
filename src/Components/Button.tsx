import * as React from 'react';
import '../style.css'
import '../App.css';

export default class App extends React.Component<any, any>{

  public render() {
    return (
      <div className="App container ">
        <a className="a-btn cta .m-text" style={{ float: "left", padding: "0px 20px 0px 20px"  }}>Previous</a>
        <a className="a-btn cta .m-text" style={{ float: "right", padding: "0px 45px 0px 45px" }}>Next</a>
      </div>
    );
  }
}
