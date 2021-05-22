import { combineReducers } from "redux";
import taskReducer from "./reducer/taskreducer";
import apiStatusReducer from "./reducer/apiStausReducer";
// const rootReducer = combineReducers({ taskReducer });
export const rootReducer = () => {
  return combineReducers({ taskReducer, apiStatusReducer });
};
// console.log(rootReducer());
// export default rootReducer;
