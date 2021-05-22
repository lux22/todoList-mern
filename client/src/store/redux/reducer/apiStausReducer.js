import { initialState } from "../../initialState/initialState";
import * as actions from "../action/action";

// console.log(initialState.apistate);

const typeEndsWith = (type) => {
  return type.substring(type.length - 5) === "_TASK";
};

const apiStatusReducer = (apiState = initialState.apistate, action) => {
  if (action.type === actions.API_BEGIN) {
    return apiState + 1;
  } else if (action.type === actions.API_FAIED || typeEndsWith(action.type)) {
    return apiState - 1;
  }
  return apiState;
};

export default apiStatusReducer;
