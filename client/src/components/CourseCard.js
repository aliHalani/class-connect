import React from 'react';
import CardTemplate from './CardTemplate'

export default function CourseCard(props) {
    return (
        <CardTemplate title={props.course.name}
              mainHeading="Number of Students"
              mainValue={props.course.size}
              subHeading="Course average"
              subHeadingValue={props.course.class_average}
              linkText = "View course"
              linkValue={{pathname: "/course",
                          state: {course : props.course,
                                  student: props.student}}}
        />
    )
}