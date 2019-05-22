import * as React from 'react';
import '../style.css'
import '../App.css';

export default class SelectBox extends React.Component<any, any>{

  public render() {
    return (
<div className="o-paging">
  <div className="o-paging__inner">
    <ul>
      <li className="o-paging__current-page"><a href="javascript:;">1</a></li>
      <li className=""><a href="javascript:;">2</a></li>
      <li className=""><a href="javascript:;">3</a></li>
      <li>...</li>
      <li><a href="javascript:;">7</a></li>
      <li><a href="javascript:;">→</a></li>
    </ul>
  </div>
</div>
    );
  }
}