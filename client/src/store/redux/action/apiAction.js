import * as actions from "../action/action";
export const apiCall = () => {
  return { type: actions.API_BEGIN };
};

export const apiError = () => {
  return { type: actions.API_FAIED };
};
