import React, { Component } from 'react';
class Main extends Component {
    render() {
      console.log(this.props)
      let {query} = this.props.location;
      if(query)console.log(JSON.parse(query));
      
      return (
        <div>
          <h1>Main</h1>
        </div>
      )
    }
  }
  export default Main;
  