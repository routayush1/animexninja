import { MyAction } from "./actions";
export const toggleDark = () => {
  return {
    type: MyAction.DARK,
  };
};

export const toggleLight = () => {
  return {
    type: MyAction.LIGHT,
  };
};
