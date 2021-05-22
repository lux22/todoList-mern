import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import TaskMain from "../Task/Task";

const TaskCompleted = React.lazy(() =>
  import("../TaskCompleted/TaskCompleted")
);

const TaskInProgress = React.lazy(() =>
  import("../TaskInProgress/TaskInProgress")
);

const Routes = (props) => {
  const { id, setCurrentId } = props;
  return (
    <Suspense fallback="Loading indecator">
      <Switch>
        <Route exact path="/" />
        <Route
          exact
          path="/addtask"
          render={(props) => (
            <TaskMain {...props} id={id} setCurrentId={setCurrentId} />
          )}
        />
        <Route
          exact
          path="/inprogress"
          render={(props) => (
            <TaskInProgress {...props} id={id} setCurrentId={setCurrentId} />
          )}
        />
        <Route
          exact
          path="/completed"
          render={(props) => (
            <TaskCompleted {...props} id={id} setCurrentId={setCurrentId} />
          )}
        />
      </Switch>
    </Suspense>
  );
};

export default Routes;
