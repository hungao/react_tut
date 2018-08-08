import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';

import Layout from "./pages/Layout";

const app = document.getElementById('app');
const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <Route path="/" component={Layout}>
        </Route>
    </Router>
    , app);
