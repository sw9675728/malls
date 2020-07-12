import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import routes from './router';
import util from './utils'
import Login from './component/Login/index.jsx'
const userInfo = util.storage.get("userInfo")

ReactDOM.render(
  (
    <Router >
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          {
            routes.map((item, index) => {
              return <Route key={index} path={item.path} exact={item.exact} render={props => {
                  return userInfo ? <item.component {...props} /> :  <Redirect to='/login'from='/'/>
                }
              }/>
            })
          }
        </Switch>
      </div>
    </Router>
  ),
  document.getElementById('root')
);


serviceWorker.unregister();
// return userInfo ? <item.component {...props} /> : <Redirect to='/login'from='/'/>