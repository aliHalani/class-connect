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
  const initialPost = {
    title: "",
    post_date: new Date().toJSON().slice(0,10).replace(/-/g,'-'),
    content: ""
  }
  const [postDetails, setPost] = React.useState(initialPost)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePost = () => {
    setOpen(false);
    props.updatePosts(postDetails);
    setPost(initialPost);
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
          Create Post
        </DialogTitle>
        <DialogContent>
          <TextField
            id="outlined-full-width"
            label="Post Title"
            placeholder="Enter title here..."
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            value={postDetails.title}
            onChange={(e) => setPost({...postDetails,
                                      title: e.target.value})}
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
            value={postDetails.post_date}
            onChange={(e) => setPost({...postDetails,
                                      post_date: e.target.value})}
          />
          <TextField
            id="outlined-multiline-static"
            label="Post Content"
            multiline
            rows="4"
            fullWidth
            variant="outlined"
            className={classes.postContent}
            value={postDetails.content}
            onChange={(e) => setPost({...postDetails,
                                      content: e.target.value})}
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handlePost} color="primary">
            Post
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}