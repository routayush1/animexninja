import { MyAction } from "./actions";

export const getAllList = (payload) => {
  return { type: MyAction.GETALLLIST, payload: payload };
};
export const addToMyList = (payload) => {
  return { type: MyAction.ADDTOMYLIST, payload: payload };
};
export const removeFromMyList = (payload) => {
  return { type: MyAction.REMOVEFROMLIST, payload: payload };
};
