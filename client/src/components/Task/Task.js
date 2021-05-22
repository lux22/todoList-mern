import React from "react";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import Form from "../Form/Form";
import { useStyles } from "./task.styles";
import TasklistPage from "./TaskList/Tasklist";
import { useSelector } from "react-redux";

const TaskMain = ({
  setCurrentId,
  id,
  taskheading = "Add Task",
  status,
  history,
  ...restProps
}) => {
  const { apiStatusReducer } = useSelector((state) => state);
  const {
    location: { pathname },
  } = history;

  const taskStatus =
    pathname === "/inprogress"
      ? "pending"
      : pathname === "/completed"
      ? "completed"
      : null;

  const classes = useStyles();
  return (
    <Container>
      <Grid container>
        <Grid
          item
          md={12}
          classes={{
            root: classes.rightHeader,
          }}
        >
          <Typography variant="h5" component="h2">
            <Box
              fontWeight="700"
              fontSize={20}
              fontFamily="Raleway"
              color="#000000"
            >
              {!id ? taskheading : "Updated Task"}
            </Box>
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          item
          md={12}
          classes={{
            root: classes.listbox_root,
          }}
        >
          {pathname !== "/addtask" ? (
            <TasklistPage
              id={id}
              setCurrentId={setCurrentId}
              status={status}
              {...restProps}
              apiStatus={apiStatusReducer}
              taskStatus={taskStatus}
            />
          ) : (
            <Form
              id={id}
              setCurrentId={setCurrentId}
              taskStatus={taskStatus}
              history={history}
              {...restProps}
            />
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default TaskMain;
