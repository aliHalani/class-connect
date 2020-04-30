import React, { useContext, useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import StudentCard from './StudentCard'
import { makeStyles } from '@material-ui/core/styles';
import { UserContext } from './context/UserContext'

function createStudentCards(studentData, rowSize) {
  studentData = studentData.slice(0,3);
  let coursecards = [];
  for (let i = 0, cycles = Math.ceil((studentData.length / rowSize)); i < cycles; i++) {
    let children = [];
    for (let j = i * 3; j < studentData.length & j < ((i * 3) + 3); j++) {
      children.push(<Grid item key={studentData[j].user_id} xs={12} md={4} lg={4}><StudentCard student={studentData[j]} /></Grid>)
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

export default function Parent() {
  const classes = useStyles();
  const [user, setUser, clearUser] = useContext(UserContext);
  const [students, setStudents] = useState([])
  
  useEffect(() => {
    fetch(`http://localhost:5000/students/${user.id}?type=${user.type}`)
        .then(res => {
          if (!res.ok) {throw res}
          return(res.json())})
        .then((data) => {
          setStudents(data.students)
        })
        .catch((res) => {
          console.log("ERROR - retrieving students")
        })
  }, [])

    return (
          <Container className={classes.root} maxWidth="lg">
            {createStudentCards(students, 3)}
            <Box pt={4}>
            {/* <Copyright /> */}
          </Box>
        </Container>
    )
}
