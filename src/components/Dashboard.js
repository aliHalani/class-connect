import React from 'react';
import CourseCard from './CourseCard';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


const courseData = [{courseName: "Intro to Architecture",
                      numOfStudents: 31,
                      classAverage: 73,
                      courseLink: "https://www.apple.com"},
                    
                      {courseName: "Intro to Architecture",
                      numOfStudents: 31,
                      classAverage: 73,
                      courseLink: "https://www.apple.com"},
                    
                      {courseName: "Intro to Architecture",
                      numOfStudents: 31,
                      classAverage: 73,
                      courseLink: "https://www.apple.com"},
                    
                      {courseName: "Intro to Architecture",
                      numOfStudents: 31,
                      classAverage: 73,
                      courseLink: "https://www.apple.com"},
                    
                      {courseName: "Intro to Architecture",
                      numOfStudents: 31,
                      classAverage: 73,
                      courseLink: "https://www.apple.com"}]

function createCourseCards(courseData, rowSize) {
  let coursecards = [];
  for (let i = 0, cycles = Math.ceil((courseData.length / rowSize)); i < cycles; i++) {
    let children = [];
    for (let j = i * 3; j < courseData.length & j < ((i * 3) + 3); j++) {
      children.push(<Grid item xs={12} md={4} lg={3}><CourseCard course={courseData[j]} /></Grid>)
    }
  coursecards.push(<Grid container spacing={rowSize}>{children}</Grid>)
}
return coursecards;
}

export default function Dashboard() {
  const courses = createCourseCards(courseData, 3)
    return (
          <Container maxWidth="lg">
            {courses}
            <Box pt={4}>
            {/* <Copyright /> */}
          </Box>
        </Container>
    )
}
