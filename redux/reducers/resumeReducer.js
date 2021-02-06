import { MyAction } from "../actions/actions";

export const resumeReducer = (state = false, action) => {
  switch (action.type) {
    case MyAction.RESUMEID: {
      return action.payload;
    }
    default:
      return state;
  }
};
