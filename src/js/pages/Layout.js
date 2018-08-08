import React from 'react';
import { Router, Route, Switch, Link } from "react-router-dom";
import Featured from "./Featured";
import Settings from "./Settings";
import Archives from "./Archives";

class Layout extends React.Component {
    render() {
        const {history} = this.props;
        return (
            <div>
                <h1>KillerNews.net</h1>
                <div>
                    <Link to="/archives" class="btn btn-sm btn-success">archives</Link>
                    <Link to="/settings" class="btn btn-sm btn-primary">settings</Link>
                    <Link to="/" class="btn btn-sm btn-danger">featured</Link>
                </div>
                <div>
                    <Switch>
                        <Route path="/settings" component={Settings} />
                        <Route path="/archives/:article" name="archives" component={Archives} />
                        <Route exact path="/" component={Featured} />
                    </Switch>
                </div>
            </div>
        );

    }
}

export default Layout;