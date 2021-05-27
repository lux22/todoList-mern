import React from "react";
import Task from "../Task/Task";
const TaskCompleted = ({ id, setCurrentId, ...restProps }) => {
  return (
    <Task
      id={id}
      setCurrentId={setCurrentId}
      status={"pending"}
      {...restProps}
      taskheading="Task completed"
    />
  );
};

export default TaskCompleted;
