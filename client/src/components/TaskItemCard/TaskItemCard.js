import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateTask, deleteTask } from "../../store/redux/action/taskaction";
// import clsx from "clsx";
import moment from "moment";
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  Typography,
  IconButton,
  Avatar,
  CardActions,
  CardMedia,
} from "@material-ui/core";

import useStyles from "./taskitemcard.styles";
import { DeleteForever, HourglassEmptyOutlined } from "@material-ui/icons";
import MoreVertIcon from "@material-ui/icons/MoreVert";
const TaskItemCard = ({
  title,
  assigned,
  tags,
  selectedFile,
  description,
  _id,
  completed,
  createdAt,
  setStatusId,
  statusId,
  ...props
}) => {
  const classes = useStyles();

  const [toggle, setToggle] = useState(false);

  const { setCurrentId } = props;

  const avathar = assigned.charAt(0);

  const taskdata = useSelector((state) => state.taskReducer);

  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    if (statusId !== null) {
      setStatusId(null);
    }
  }, [statusId, setStatusId]);

  const fnUpdateForm = (id) => {
    setCurrentId(id);
    history.push("/addtask");
  };

  const taskDelete = (id) => {
    dispatch(deleteTask(id));
    setCurrentId(null);
  };

  const toggleStatus = (id) => {
    const data = taskdata
      .filter((item) => item._id === id)
      .map((item) => {
        if (!toggle && item.completed === "pending")
          return { ...item, completed: "completed" };
        else return { ...item, completed: "pending" };
      });
    setToggle(!toggle);
    setStatusId(id);
    dispatch(updateTask(id, ...data));
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {avathar}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={() => fnUpdateForm(_id)}>
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={moment(createdAt).fromNow()}
      />
      {selectedFile && (
        <CardMedia
          className={classes.media}
          image={selectedFile}
          title="Paella dish"
        />
      )}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          size="small"
          color="primary"
          onClick={() => toggleStatus(_id)}
        >
          <HourglassEmptyOutlined
            fontSize="small"
            color="primary"
            classes={{
              fontSizeSmall: classes.fontSizeSmall,
            }}
          />
          {completed}
        </Button>
        <Button
          variant="outlined"
          size="small"
          color="secondary"
          onClick={() => taskDelete(_id)}
        >
          <DeleteForever
            fontSize="small"
            color="secondary"
            classes={{
              fontSizeSmall: classes.fontSizeSmall,
            }}
          />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};
export default TaskItemCard;
