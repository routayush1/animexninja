import { MyAction } from "../actions/actions";

export const loadingReducer = (state = true, action) => {
  switch (action.type) {
    case MyAction.FETCH:
      return true;
    case MyAction.RECEIVE:
      return false;
    case MyAction.FALSELOADING:
      return false;
    default:
      return state;
  }
};
