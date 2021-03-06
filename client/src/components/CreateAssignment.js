import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit'
import TextField from '@material-ui/core/TextField';

function PaperComponent(props) {
    return (
        <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
            <Paper {...props} />
        </Draggable>
    );
}

const useStyles = makeStyles(theme => ({
    fab: {
        position: 'absolute',
        bottom: theme.spacing(4),
        right: theme.spacing(6),
    },
    postContent: {
        marginTop: "15px"
    }
}));

export default function DraggableDialog(props) {
    const [open, setOpen] = React.useState(false);
    const initialAssignment = {
        title: "",
        grade: "",
        assignment_date: new Date().toJSON().slice(0,10).replace(/-/g,'-'),
        comments: "",
        attachment_path: ""
    };

    const [assignmentDetails, setAssignment] = React.useState(initialAssignment);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAssignment = () => {
        setOpen(false);
        props.updateAssignments({...assignmentDetails, date: new Date(assignmentDetails.date).toDateString()});
        setAssignment(initialAssignment);
    };

    const classes = useStyles();

    return (
        <div>
            <Fab className={classes.fab} color="secondary" aria-label="edit" size="large" onClick={handleClickOpen}>
                <EditIcon />
            </Fab>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    Create Assignment
        </DialogTitle>
                <DialogContent>
                    <TextField
                        id="outlined-full-width"
                        label="Assignment Title"
                        placeholder="Enter title here..."
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        value={assignmentDetails.title}
                        onChange={(e) => setAssignment({
                            ...assignmentDetails,
                            title: e.target.value
                        })}
                    />
                    <TextField
                        id="outlined-full-width"
                        label="Grade"
                        placeholder="0"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        value={assignmentDetails.grade}
                        onChange={(e) => setAssignment({
                            ...assignmentDetails,
                            grade: e.target.value
                        })}
                    />
                    <TextField
                        id="date"
                        label="Date"
                        type="date"
                        fullWidth
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={assignmentDetails.assignment_date}
                        onChange={(e) => setAssignment({
                            ...assignmentDetails,
                            assignment_date: e.target.value
                        })}
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Comments"
                        placeholder="Enter comments here..."
                        multiline
                        rows="4"
                        fullWidth
                        variant="outlined"
                        className={classes.postContent}
                        value={assignmentDetails.comments}
                        onChange={(e) => setAssignment({
                            ...assignmentDetails,
                            comments: e.target.value
                        })}
                    />
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleAssignment} color="primary">
                        Post
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}