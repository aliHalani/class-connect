import React from 'react';
import CardTemplate from './CardTemplate'
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


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

export default function StudentCard(props) {
    const classes = useStyles();
    const history = useHistory();
    return (
      <Card>
        <CardActionArea onClick={() => history.push(`/parent/${props.student.id}/courses/`)}>
          <CardContent>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              {props.student.first + " " + props.student.last}
            </Typography>
            <Typography component="p" variant="subtitle1">
              {"Curent average: " + props.student.average}
            </Typography>
            {/* <Typography color="textSecondary">
              {props.subHeading + ": " + props.subHeadingValue}
            </Typography> */}
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              View Student
          </Button>
          </CardActions>
        </CardActionArea>
      </Card>
    )
}