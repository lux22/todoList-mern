import * as actionType from "../action/action";
const taskReducer = (tasks = [], action) => {
  switch (action.type) {
    case actionType.UPDATE_TASK:
      console.log(action.payload.data._id);
      return tasks.map((item) =>
        item._id === action.payload.data._id ? action.payload.data : item
      );
    case actionType.GET_TASK:
      return action.payload;
    case actionType.CREATE_TASk:
      return [...tasks, action.payload];
    case actionType.DELETE_TASK:
      return tasks.filter((item) => item.id !== action.payload);
    default:
      return tasks;
  }
};

export default taskReducer;
