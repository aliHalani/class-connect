import React from 'react';
import { Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import LoginPage from './LoginPage'
import App from './App'


export default function MainRoutes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LoginPage}/>
                <Route component={App} />
            </Switch>
        </Router>
    )
}