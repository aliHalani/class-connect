import React from 'react';
import Teacher from './Teacher'
import { Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import Course from './Course'
import Student from './Student'
import Parent from './Parent'
import LoginPage from './LoginPage'


export default function AppRoutes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LoginPage}/>
                <Route exact path="/teacher/course/" component={Teacher} />
                <Route exact path="/parent/" component={Parent} />
                <Route path="/course" component={Course} />
                <Route path="/assignments" component={Student}/>
                <Route exact path="/parent/courses" component={Teacher}/>
                <Route path="/parent/:studentid/courses/:courseid" component={Student}/>
            </Switch>
        </Router>
    )
}