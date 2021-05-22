import * as api from "../../../api/taskapi";
import * as action from "../action/action";
import { apiCall, apiError } from "../action/apiAction";

// Reterive all the taskdata if any presist
export const getTaskAction = () => async (dispatch) => {
  try {
    dispatch(apiCall());
    const { data } = await api.getTaskInProgress();
    dispatch({ type: action.GET_TASK, payload: data });
  } catch (err) {
    console.log(err);
    dispatch(apiError());
  }
};

export const taskPost = (taskpost) => async (dispatch) => {
  try {
    const { data } = await api.createTask(taskpost);
    dispatch({ type: action.CREATE_TASk, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const updateTask = (taskId, taskpost) => async (dispatch) => {
  try {
    dispatch(apiCall());
    const { data } = await api.taskUpdate(taskId, taskpost);
    dispatch({ type: action.UPDATE_TASK, payload: data });
  } catch (err) {
    dispatch(apiError());
    console.log(err);
  }
};

export const deleteTask = (taskId) => async (dispatch) => {
  try {
    dispatch(apiCall());
    const { data } = await api.taskDelete(taskId);
    dispatch({ type: action.UPDATE_TASK, payload: taskId });
  } catch (err) {
    dispatch(apiError());
    console.log(err);
  }
};
