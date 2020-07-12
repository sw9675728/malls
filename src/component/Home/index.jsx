import React, { Component } from 'react';
import './index.less';
import styled from 'styled-components'
import { Button } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Styleds from './../Styled/index.jsx'

class Home extends Component {
  render() {
    return (
        <header>
          <Link to='user'>user</Link>
            <div className='title'>首页头部标题</div>
            {/* <Styleds/> */}
        </header>
    )
  }
}
export default Home;
