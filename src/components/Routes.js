import React from 'react';
import TestRoute from './TestRoute'
import Teacher from './Teacher'
import { Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import Course from './Course'
import Student from './Student'
import Parent from './Parent'


export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/teacher/course/" component={Teacher} />
                <Route exact path="/parent/" component={Parent} />
                <Route path="/teacher/course/:courseid" component={Course} />
                <Route path="/student/:courseid/:studentid/" component={Student}/>
                <Route exact path="/parent/:studentid/courses" component={Teacher}/>
                <Route path="/parent/:studentid/courses/:courseid" component={Student}/>
            </Switch>
        </Router>
    )
}