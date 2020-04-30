import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  depositContext: {
    flex: 1,
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  }
}));

// function reroute(props) {
//   props.history.push("/test");
// }

export default function CardTemplate(props) {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Card>
      <CardActionArea onClick={() => history.push(props.linkValue)}>
        <CardContent>
          <Typography component="h2" variant="h6" color="primary" gutterBottom>
            {props.title}
          </Typography>
          <Typography component="p" variant="subtitle1">
            {props.mainHeading + ': ' + props.mainValue}
          </Typography>
          <Typography color="textSecondary">
            {props.subHeading + ": " + props.subHeadingValue}
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button size="small" color="primary">
            View Course
        </Button> */}
        <Button size="small" color="primary">
            View Course
        </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}