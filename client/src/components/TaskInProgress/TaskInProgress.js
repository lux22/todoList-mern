import React from "react";
import Task from "../Task/Task";

const TaskInProgress = ({ id, setCurrentId, ...restProps }) => {
  return (
    <Task
      id={id}
      setCurrentId={setCurrentId}
      taskheading="Task in progress"
      status={"pending"}
      {...restProps}
    />
  );
};

export default TaskInProgress;
