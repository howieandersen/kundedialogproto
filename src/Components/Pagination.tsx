import * as React from 'react';
import { Component, MouseEvent } from 'react';
import '../style.css'
import '../App.css';

export default class Pagination extends React.Component<any, any>{

  constructor(props: any) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
    };
  }

  public render() {
    return (
      <div className="o-paging">
        <div className="o-paging__inner">
          <ul>
            {this.props.getIndex() == 1 && <li onClick={() => this.handleClick(1)} className="o-paging__current-page"><a href="javascript:;">1</a></li>}
            {this.props.getIndex() != 1 && <li onClick={() => this.handleClick(1)} className=""><a href="javascript:;">1</a></li>}
            
            {this.props.getIndex() == 2 && <li onClick={() => this.handleClick(2)} className="o-paging__current-page"><a href="javascript:;">2</a></li>}
            {this.props.getIndex() != 2 && <li onClick={() => this.handleClick(2)} className=""><a href="javascript:;">2</a></li>}
            
            {this.props.getIndex() == 3 && <li onClick={() => this.handleClick(3)} className="o-paging__current-page"><a href="javascript:;">3</a></li>}
            {this.props.getIndex() != 3 && <li onClick={() => this.handleClick(3)} className=""><a href="javascript:;">3</a></li>}
            
            {this.props.getIndex() == 4 && <li onClick={() => this.handleClick(4)} className="o-paging__current-page"><a href="javascript:;">4</a></li>}
            {this.props.getIndex() != 4 && <li onClick={() => this.handleClick(4)} className=""><a href="javascript:;">4</a></li>}
            
            {this.props.getIndex() == 5 && <li onClick={() => this.handleClick(5)} className="o-paging__current-page"><a href="javascript:;">5</a></li>}
            {this.props.getIndex() != 5 && <li onClick={() => this.handleClick(5)} className=""><a href="javascript:;">5</a></li>}
            
            {this.props.getIndex() == 6 && <li onClick={() => this.handleClick(6)} className="o-paging__current-page"><a href="javascript:;">6</a></li>}
            {this.props.getIndex() != 6 && <li onClick={() => this.handleClick(6)} className=""><a href="javascript:;">6</a></li>}
            
            {this.props.getIndex() == 7 && <li onClick={() => this.handleClick(7)} className="o-paging__current-page"><a href="javascript:;">7</a></li>}
            {this.props.getIndex() != 7 && <li onClick={() => this.handleClick(7)} className=""><a href="javascript:;">7</a></li>}
          </ul>
        </div>
      </div>
    );
  }

  private handleClick(targetPage: number) {
    this.props.setIndex(targetPage)
  }
}