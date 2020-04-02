import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AssignmentHeader from './AssignmentHeader';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CoursePost from './CoursePost'
import { UserContext } from './context/UserContext'


const useStyles = makeStyles(theme => ({
    root: {
        position: "inherit",
        flexGrow: 1,
        height: "100%"
    },
    expansion: {
        boxShadow: "none",
        maxWidth: "225px"
    },
    recommended: {
        marginTop: "40px"
    },
    content: {
        marginLeft: "24px",
        marginRight: "24px"
    }
}));


export default function Assignment(props) {
    const classes = useStyles();
    let grade = props.assignment.grade;
    const [user] = useContext(UserContext);
    const posts = props.posts;

    // let [imgShown, showImage] = useState(false);

    console.log(posts)

    return (
        <div className={classes.root}>
            <AssignmentHeader coursetitle={props.course.name} courseid={props.course.course_id}
                assignment={props.assignment} />

            <div className={classes.content}>
                <Card>
                    {props.assignment.attachment_path &&
                        <ExpansionPanel className={classes.expansion}>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>Click to show work</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <CardContent >
                                    <img src={props.assignment.attachment_path} />
                                </CardContent>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    }

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Instructor Comments
          </Typography>
                        <Typography variant="subtitle1">
                            {props.assignment.comments}
                        </Typography>

                        {grade <= 35 &&
                            <React.Fragment>
                                <Typography variant="h5" className={classes.recommended}>
                                    Recommended Resources
                    </Typography>

                                <Typography variant="subtitle1" style={{ marginTop: "10px" }}>
                                    For students struggling with insect-related topics, try providing them with a copy of the <a target="blank" href="https://www.penguinrandomhouse.com/books/137359/insectopedia-by-hugh-raffles/">Insectopedia</a>.
                    </Typography>
                            </React.Fragment>
                        }
                    </CardContent>




                </Card>
{/* 
                {user.type === "parent" &&
                    (<React.Fragment>
                        <Card style={{ marginTop: "160px", marginBottom: "10px" }}>
                            <CardContent>
                                <Typography variant="h5">
                                    Recent Posts
                    </Typography>
                            </CardContent>
                        </Card>
                        {posts.slice[0,3].map((post) => (
                            <CoursePost post={post}/>
                        ))}
                    </React.Fragment>)
                } */}

            </div>



        </div>
    )
}