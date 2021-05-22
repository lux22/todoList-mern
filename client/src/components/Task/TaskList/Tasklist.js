import React, { useEffect, useState } from "react";
import SkeletonLoader from "../../Skeleton/Skeleton";
import { Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getTaskAction } from "../../../store/redux/action/taskaction";
import TaskItemCard from "../../TaskItemCard/TaskItemCard";

const TasklistPage = ({ setCurrentId, id, apiStatus, taskStatus }) => {
  console.log(taskStatus);
  const dispatch = useDispatch();
  const { taskReducer } = useSelector((state) => state);
  const [statusId, setStatusId] = useState(null);

  const gridItem = React.useMemo(
    () =>
      taskReducer
        .filter((item) => {
          return item.completed === taskStatus;
        })
        .map((item) => (
          <Grid item xs={4} key={item._id}>
            <TaskItemCard
              {...item}
              setCurrentId={setCurrentId}
              id={id}
              key={item._id}
              setStatusId={setStatusId}
              statusId={statusId}
            />
          </Grid>
        )),
    [id, statusId, taskReducer, setCurrentId, taskStatus]
  );

  const loading = [1, 2, 3].map((item) => (
    <Grid item xs={4} key={item}>
      <SkeletonLoader />
    </Grid>
  ));

  useEffect(() => {
    if (taskReducer.length === 0 || id !== null || statusId !== null) {
      setCurrentId(null);
      dispatch(getTaskAction());
    }
  }, [id, dispatch, statusId, taskReducer.length, taskStatus, setCurrentId]);

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        {taskReducer.length === 0 && apiStatus !== 0 ? loading : gridItem}
      </Grid>
    </React.Fragment>
  );
};

export default TasklistPage;
