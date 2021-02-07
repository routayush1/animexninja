import { MyAction } from "./actions";

export const resumeAction = (payload) => {
  return { type: MyAction.RESUMEID, payload: payload };
};
