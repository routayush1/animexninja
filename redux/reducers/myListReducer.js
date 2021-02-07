import { MyAction } from "../actions/actions";

export const myListReducer = (state = [], action) => {
  switch (action.type) {
    case MyAction.ADDTOMYLIST:
      return [...state, action.payload];
    case MyAction.REMOVEFROMLIST:
      return [...state.filter((items) => items.id != action.payload)];
    case MyAction.GETALLLIST:
      return action.payload;
    default:
      return state;
  }
};
