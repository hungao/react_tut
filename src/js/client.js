import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import createHashHistory from 'history/createHashHistory';

import Layout from "./pages/Layout";

const app = document.getElementById('app');
const history = createHashHistory();

ReactDOM.render(
    <Router history={history}>
        <Route exact path="/" component={Layout} />
    </Router>
    , app);
