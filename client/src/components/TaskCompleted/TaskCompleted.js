import React from "react";
import Task from "../Task/Task";
const TaskCompleted = ({ id, setCurrentId, ...restProps }) => {
  return (
    <Task
      id={id}
      setCurrentId={setCurrentId}
      taskheading="Task in progress"
      status={"pending"}
      {...restProps}
      taskheading="Task completed"
    />
  );
};

export default TaskCompleted;
