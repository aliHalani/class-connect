import React from 'react';
import { Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import LoginPage from './LoginPage'
import MainApp from './MainApp'
import { UserContextProvider } from './context/UserContext'


export default function App() {
    return (
        <UserContextProvider>
            <Router>
                <Switch>
                    <Route exact path="/" component={LoginPage}/>
                    <Route component={MainApp} />
                </Switch>
            </Router>
        </UserContextProvider>
    )
}