import React, { useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { useParams } from "react-router-dom";
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import FolderIcon from '@material-ui/icons/Folder';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Assignment from './Assignment'
import CreateAssignment from './CreateAssignment';
import Typography from '@material-ui/core/Typography';
import { UserContext } from './context/UserContext';



const drawerWidth = 260;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginLeft: drawerWidth
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(4),
    right: theme.spacing(6),
  },
  studentList: {
    marginTop: "64px",
    paddingTop: 0,
    paddingBottom: 0
  },
  studentName: {
    paddingTop: "16px",
    paddingBottom: "16px"
  }
}));


export default function Student(props) {
  let classes = useStyles();

  let [activeAssignment, setActiveAssignment] = useState(null);
  let [assignments, setAssignments] = useState([]);
  const { course, student, posts } = useLocation().state;
  const [user, setUser, clearUser] = useContext(UserContext);

  function addAssignment(assignment) {
    assignment.date = new Date(assignment.assignment_date).toJSON().slice(0,10).replace(/-/g,'-')
    assignment.course_id = course.course_id
    assignment.student_id = student.user_id
    fetch('http://localhost:5000/records', {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(assignment)
    })
      .then(res => {
        if (!res.ok) { throw res }
        return (res.json())
      })
      .then((data) => {
        setAssignments((prevAssignments) => [...prevAssignments, data.data])
      })
      .catch((res) => {
        console.log("error adding assignment")
      })
  }

  useEffect(() => {
    fetch(`http://localhost:5000/records/${course.course_id}/${student.user_id}`)
      .then(res => {
        if (!res.ok) { throw res }
        return (res.json())
      })
      .then((data) => {
        if (data.records) {
          setAssignments(data.records)
        }
      })
      .catch((res) => {
        console.log("ERROR - retrieving students")
      })
  }, []);

  useEffect(() => {
    if (assignments.length > 0) {
      setActiveAssignment(assignments[0])
    }
  }, [assignments])

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <List className={classes.studentList} dense>
          <Typography variant="h5" color="inherit" align="center" className={classes.studentName}>
            {student.first_name + " " + student.last_name}
          </Typography>
          <Divider variant="fullWidth" component="li" />
          {Object.values(assignments).map(assignment => {
            const labelId = `checkbox-list-secondary-label-${assignment.id}`;
            const gradeLabel = `${assignment.grade}%`;
            return (
              <React.Fragment key={assignment.id}>
                <ListItem key={assignment.id} button onClick={() => {setActiveAssignment(assignment)}}>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText id={labelId} primary={assignment.title} secondary={assignment.date} />
                  <ListItemAvatar>
                    <ListItemText id={{ labelId } + '2'} primary={gradeLabel} />
                  </ListItemAvatar>
                </ListItem>
                <Divider variant="inset" component="li" />
              </React.Fragment>
            );
          })}
        </List>
      </Drawer>
      {activeAssignment !== null && <Assignment posts={posts} course={course} assignment={activeAssignment} />}
      {user.type === "teacher" && <CreateAssignment updateAssignments={addAssignment} />}
    </div>
  )
}