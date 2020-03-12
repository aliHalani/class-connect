import React from 'react';
import CardTemplate from './CardTemplate'

export default function CourseCard(props) {
    return (
        <CardTemplate title={props.course.courseName}
              mainHeading="Number of Students"
              mainValue={props.course.numOfStudents}
              subHeading="Course average"
              subHeadingValue={props.course.classAverage}
              linkText = "View course"
              linkValue={`${props.course.id}`}
        />
    )
}