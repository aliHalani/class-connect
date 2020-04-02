import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {useHistory} from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(255,255,255,.3)',
    backgroundImage: "url(https://thebossmagazine.com/wp-content/uploads/2019/08/iStock-1093713604.jpg)"  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  courseTitle: {
    padding: "20px",
    paddingBottom: 0,
    marginBottom: 0,
    fontSize: "19px"
  }
}));

export default function MainFeaturedPost(props) {
  const classes = useStyles();

  let history = useHistory();

  return (
    <Paper className={classes.mainFeaturedPost}>
      {/* Increase the priority of the hero background image */}
      {/* {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />} */}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
        <Typography variant="h5" color="inherit" paragraph className={classes.courseTitle}
          onClick={() => history.push(`/course/${props.courseid}/`)}>
              {`< Back to ${props.coursetitle}`}
          </Typography>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {props.assignment.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {`Grade: ${props.assignment.grade}%`}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {new Date(props.assignment.assignment_date).toDateString()}
            </Typography>
            {/* <Link variant="subtitle1" href="#">
              {post.linkText}
            </Link> */}
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};