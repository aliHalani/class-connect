import React from 'react';
import TestRoute from './TestRoute'
import Dashboard from './Dashboard'
import { Switch, BrowserRouter as Router, Route} from 'react-router-dom'

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/test" component={TestRoute} />
            </Switch>
        </Router>
    )
}