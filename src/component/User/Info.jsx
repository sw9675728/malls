import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Info extends Component {
  render() {
    let { match, routes } = this.props;
    let obj =  JSON.parse(match.params.obj);
    console.log(obj)
    return (
      <div>
        <h1>Info</h1>
      </div>
    )
  }
}
export default Info;
