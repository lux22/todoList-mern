import * as actionType from "../action/action";
const taskReducer = (tasks = [], action) => {
  switch (action.type) {
    case actionType.UPDATE_TASK:
      return tasks.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
    case actionType.GET_TASK:
      return action.payload;
    case actionType.CREATE_TASk:
      return [...tasks, action.payload];
    case actionType.DELETE_TASK:
      console.log(tasks.find((item) => item.id !== action.payload));
      return tasks.find((item) => item.id !== action.payload);
    default:
      return tasks;
  }
};

export default taskReducer;
