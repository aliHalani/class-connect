import React, { useState, useContext } from 'react';
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
import { useHistory } from 'react-router-dom'
import { assignmentData, studentData } from '../common/data'
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

  let [user] = useContext(UserContext);
  let [activeAssignmentID, setActiveAssignment] = useState(0);
  let [assignments, setAssignments] = useState(assignmentData);
  let { courseid, studentid } = props.match.params;

  let student;
  studentData.map((std) => {
    if (std.id == studentid) {
      student = std;
    }
  });

  function addAssignment(assignment) {
    let id = new Date().getTime();
    assignment.id = id;
    setAssignments((oldAssignments) => ({...oldAssignments, [id]: assignment}));
  }

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
          {/* <ListItem key={studentid} button>
            <ListItemText id={studentid} primary={student.first + " " + student.last} />
          </ListItem>
           */}

          <Typography variant="h5" color="inherit" align="center" className={classes.studentName}>
            {student.first + " " + student.last}
          </Typography>
          <Divider variant="fullWidth" component="li" />
          {Object.keys(assignments).map(value => {
            const labelId = `checkbox-list-secondary-label-${value}`;
            const gradeLabel = `${assignments[value].grade}%`;
            return (
              <React.Fragment>
                <ListItem key={value} button onClick={() => setActiveAssignment(value)}>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText id={labelId} primary={assignments[value].title} secondary={assignments[value].date} />
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
      <Assignment urlparams={props.match.params} assignment={assignments[activeAssignmentID]} />
        {user.type === "teacher" && <CreateAssignment updateAssignments={addAssignment}/>}                
    </div>
  )
}