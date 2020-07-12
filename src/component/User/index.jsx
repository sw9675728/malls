import React, { Component } from 'react';
// import { Route, Redirect, Switch, Link } from 'react-router-dom'

class User extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { match, routes } = this.props;
        console.log(this.props)
        let obj1 = {
            name:'msw',
            age:23
        }
        let gerInfo = {
            work:'It',
            gongsi:'联拓'
        }
        return (
            <div>
                <div className="content">
                    <div className="left">
                        <h1>user</h1>
                    </div>
                    <div className="right">
                    {/* <Switch>
                        {routes.map((route, key) => {
                            return (
                                <Route
                                    key={key}
                                    path={route.path}
                                    render={prop => (
                                        // pass the sub-routes down to keep nesting
                                        <route.component {...prop} routes={route.routes} />
                                    )}
                                />

                            );
                        })}
                        </Switch> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default User;