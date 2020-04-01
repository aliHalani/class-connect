import React, { useContext } from 'react';
import CourseCard from './CourseCard';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { courseData } from '../common/data'
import { makeStyles } from '@material-ui/core/styles';
import { UserContext } from './context/UserContext';

function createCourseCards(courseData, rowSize) {
  let coursecards = [];
  for (let i = 0, cycles = Math.ceil((courseData.length / rowSize)); i < cycles; i++) {
    let children = [];
    for (let j = i * 3; j < courseData.length & j < ((i * 3) + 3); j++) {
      children.push(<Grid item xs={12} md={4} lg={4}><CourseCard course={courseData[j]} /></Grid>)
    }
  coursecards.push(<Grid container spacing={rowSize}>{children}</Grid>)
}
return coursecards;
}

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "36px"
  }
}));

function retrieveCourses(id) {
  fetch(`http://localhost:5000/courses?id=${id}`)
        .then(res => {
          if (!res.ok) {throw res}
          return(res.json())})
        .then((data) => {
          console.log("success")
          console.log(data)
          // let currentUser = {first_name : data.first_name,
          //                    last_name: data.last_name,
          //                    type: data.type,
          //                    id: data.id}
          // setGlobalUser(currentUser);
          // localStorage.setItem("user", JSON.stringify(currentUser))
          // if (userData[user].type === "teacher") {
          //     history.push("/teacher/course/");
          // } else {
          //     history.push("/parent/");
          // }
        })
        .catch((res) => {
          // if (res.status === 401) {
          //   setLoginError(true);
          // }
          console.log("ERROR")
        })
}

export default function Teacher() {
  const classes = useStyles();
  const [user, setUser, clearUser] = useContext(UserContext);
  console.log(user);

  // const courses = createCourseCards(Object.values(courseData), 3)
  const courses = retrieveCourses(user.id)

    return (
          <Container className={classes.root} maxWidth="lg">
            {courses}
            {/* <Box pt={4}>
            { <Copyright /> }
          </Box> */}
        </Container>
    )
}
