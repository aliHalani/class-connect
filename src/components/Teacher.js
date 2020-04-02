import React, { useContext, useState, useEffect } from 'react';
import CourseCard from './CourseCard';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { UserContext } from './context/UserContext';
import { useLocation } from 'react-router-dom';

function createCourseCards(courseData, student, rowSize) {
  let coursecards = [];
  for (let i = 0, cycles = Math.ceil((courseData.length / rowSize)); i < cycles; i++) {
    let children = [];
    for (let j = i * 3; j < courseData.length & j < ((i * 3) + 3); j++) {
      children.push(<Grid item xs={12} md={4} lg={4} key={courseData[j].course_id}><CourseCard student={student} course={courseData[j]} /></Grid>)
    }
  coursecards.push(<Grid container key={i} spacing={rowSize}>{children}</Grid>)
}
return coursecards;
}

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "36px"
  }
}));

export default function Teacher() {
  const classes = useStyles();
  const [user, setUser, clearUser] = useContext(UserContext);
  const [courses, setCourses] = useState([])
  const {idToFetch, student = null} = useLocation().state;

  console.log(student)
  
  useEffect(() => {
    fetch(`http://localhost:5000/courses/${idToFetch}?type=${user.type}`)
        .then(res => {
          if (!res.ok) {throw res}
          return(res.json())})
        .then((data) => {
          setCourses(data.courses)
        })
        .catch((res) => {
          console.log("ERROR - retrieving courses")
        })
  }, [])

    return (
          <Container className={classes.root} maxWidth="lg">
            {createCourseCards(courses, student, 3)}
        </Container>
    )
}
