import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { studentData } from '../common/data'
import StudentCard from './StudentCard'
import { makeStyles } from '@material-ui/core/styles';

function createStudentCards(studentData, rowSize) {
  studentData = studentData.slice(0,3);
  let coursecards = [];
  for (let i = 0, cycles = Math.ceil((studentData.length / rowSize)); i < cycles; i++) {
    let children = [];
    for (let j = i * 3; j < studentData.length & j < ((i * 3) + 3); j++) {
      children.push(<Grid item xs={12} md={4} lg={4}><StudentCard student={studentData[j]} /></Grid>)
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

export default function Parent() {
  const classes = useStyles();
  const courses = createStudentCards(Object.values(studentData), 3)
    return (
          <Container className={classes.root} maxWidth="lg">
            {courses}
            <Box pt={4}>
            {/* <Copyright /> */}
          </Box>
        </Container>
    )
}
