import React, { Component } from 'react';
import './index.less'
class Notfound extends Component {
    render() {
        return <div className="ex-main">
            <div className="ex-page-content text-center">
                <div className="text-error">
                    <span className="text-primary">4</span>
                    <span className="text-pink">0</span>
                    <span className="text-info">4</span>
                </div>
            </div>
            <h2>访问的页面不存在</h2><br />
            <p className="text-muted">非法的访问请求，请确保正确的请求URL </p>
            <br />
        </div>
    }
}

export default Notfound;