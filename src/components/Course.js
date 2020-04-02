import React, { useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CourseHeader from './CourseHeader';
import CoursePost from './CoursePost'
import CreatePost from './CreatePost';
import { useHistory } from 'react-router-dom'
import Divider from '@material-ui/core/Divider';
import { UserContext } from './context/UserContext'
import { useLocation } from 'react-router-dom'

const drawerWidth = 260;



export default function Course() {
  let history = useHistory();
  const { course, student } = useLocation().state;
  const [user, setUser, clearUser] = useContext(UserContext);
  const [postInfo, setPosts] = React.useState([]);
  const [students, setStudents] = React.useState([]);

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      marginLeft: user.type === "teacher" ? drawerWidth : 0
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      paddingTop: "72px"
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
    fab: {
      position: 'absolute',
      bottom: theme.spacing(4),
      right: theme.spacing(6),
    },
    courseHeader: {
      marginTop: "-36px"
    }
  }));

  const classes = useStyles();

  function addPost(post) {
    post.post_date = new Date(post.post_date).toJSON().slice(0,10).replace(/-/g,'-')
    post.course_id = course.course_id
    fetch('http://localhost:5000/posts', {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post)
    })
      .then(res => {
        if (!res.ok) { throw res }
        return (res.json())
      })
      .then((data) => {
        setPosts((prevPosts) => [...prevPosts, data.data])
      })
      .catch((res) => {
        console.log("error adding post")
      })
  }

  useEffect(() => {
    // get posts
    fetch(`http://localhost:5000/posts/${course.course_id}`)
      .then(res => {
        if (!res.ok) { throw res }
        return (res.json())
      })
      .then((data) => {
        let sortedPosts = data.posts.sort((post1, post2) => {
          return !Boolean(new Date(post1.post_date) - new Date(post2.post_date))
        });
        for (let post of sortedPosts) {
          post.post_date = new Date(post.post_date).toDateString()
          // post.post_date = ((post.post_date.getMonth() + 1) + post.post_date.getDay() + post.post_date.getYear() )
        }
        setPosts(sortedPosts.reverse())
      })
      .catch((res) => {
        console.log("ERROR - retrieving posts")
      })

    // get students enrolled in course
    fetch(`http://localhost:5000/students/${course.course_id}?type=${user.type}`)
      .then(res => {
        if (!res.ok) { throw res }
        return (res.json())
      })
      .then((data) => {
        setStudents(data.students)
      })
      .catch((res) => {
        console.log("ERROR - retrieving students")
      })
  }, [])


  return (
    <div className={classes.root}>
      {user.type === "teacher" && <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <List dense>
          {students.map(value => {
            const labelId = `checkbox-list-secondary-label-${value.user_id}`;
            return (
              <React.Fragment key={value.user_id}>
                <ListItem key={value.user_id} button onClick={() => history.push(`/assignments`, {
                  course: course,
                  student: value,
                  posts: postInfo
                })}>
                  <ListItemAvatar>
                    <Avatar
                      alt={`Avatar n°${value.user_id + 1}`}
                      src={"../images/student_avatar.jpg"}
                    />
                  </ListItemAvatar>
                  <ListItemText id={labelId} primary={value.first_name + " " + value.last_name} />
                </ListItem>
                <Divider variant="inset" component="li" />
              </React.Fragment>
            );
          })}
        </List>
      </Drawer>}
      <CourseHeader className={classes.courseHeader} student={student} posts={postInfo} course={course} post={{
        title: course.name,
        description: course.description,
        image: "https://images.unsplash.com/photo-1585082971056-a7f2fa6000a3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
        date: "Jan 17"
      }} />
      {postInfo.map((post, index) => (
        <CoursePost key={index} key_val={index} post={post} />
      ))}
      {user.type === "teacher" && <CreatePost updatePosts={addPost} />}
    </div>
  );


}