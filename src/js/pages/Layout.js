import React from 'react';
import { Router, Route, Switch, Link } from "react-router-dom";
import Featured from "./Featured";
import Settings from "./Settings";
import Archives from "./Archives";

class Layout extends React.Component {
    navigate(){
        console.log(this.props.history);
        this.props.history.push('/', null);
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <h1>KillerNews.net</h1>
                {this.props.children}
                <Link to='settings' class="btn btn-default">Settings</Link >
                <Link to='archives' class="btn btn-default">Archives</Link >
                <button onClick={this.navigate.bind(this)}>Featured</button>
                <Link to='' class="btn btn-default">Featured</Link >
                <Switch>
                    <Route path="/settings" component={Settings} />
                    <Route path="/archives" component={Archives} />
                    <Route exact path="/" component={Featured} />
                </Switch>
            </div>
        );

    }
}

export default Layout;