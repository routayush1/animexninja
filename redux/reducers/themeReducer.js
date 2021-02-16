import { MyAction } from "../actions/actions";
import { States } from "../States";

export const themeReducer = (state = States.light, action) => {
  switch (action.type) {
    case MyAction.DARK:
      return States.dark;
    case MyAction.LIGHT:
      return States.light;
    default:
      return state;
  }
};
